let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let vhod = document.getElementById("vhod");
let p= document.getElementById("tutorial");
let broqch= document.getElementById("broqch");
let obekt = {
ime: "Минчо",
familiq: "Лентата",
vazrast: 19
}
console.log(obekt.familiq);
let nx = 10;
let ny = 7;
let sqside = 70;
let herox = 0;
let heroy = 0;
let heroimg = new Image();
canvas.width = nx * sqside;
canvas.height = ny * sqside;
heroimg.src = "mincho.png";

let camera =  {
	x: 8,
	y: 5
}
let cameraimage = new Image();
cameraimage.src="camera.jpg";
let cameracount = 0;		
drawMap();
function drawMap() {
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	for (let i = 0; i < nx; i++) {
		for (let j = 0; j < ny; j++) {
			context.strokeRect(i * sqside, j * sqside, sqside, sqside);
			
		}
	
	}

	context.drawImage(cameraimage, camera.x * sqside, camera.y * sqside, sqside, sqside);
	context.drawImage(heroimg, herox * sqside, heroy * sqside, sqside, sqside);
}

drawMap();

canvas.onclick = function(e) {
	//let x = e.x - canvas.offsetLeft;
	//let y = e.y - canvas.offsetTop;
	//herox = Math.floor(x / sqside);
	//heroy = Math.floor(y / sqside);
	//drawMap();
}
function moveLeft() {
	if(herox > 0){
		herox --;
	}
	drawMap();
 
 }
 function moveDown() {
	 if(heroy < ny - 1) {
		heroy ++;
	 }
	drawMap();
 
 }
 function moveRight() {
	 if(herox < nx - 1) {
		herox ++;
	 }
	 
	drawMap();
 
 }
 function moveUp() {
	 if(heroy > 0) {
		heroy --;
     }
	drawMap();
 
 }
 
document.onkeypress = function(e) {
	let key = e.key;
	if(key == "a" || key == "ArrowLeft") {moveLeft();}
	else if(key == "s" || key == "ArrowDown") {moveDown();}
	else if(key == "d" || key == "ArrowRight") {moveRight();}
	else if(key == "w" || key == "ArrowUp") {moveUp();}
	if(herox == camera.x && heroy == camera.y){
		novacamera();
	}
}
function novacamera() {
	let m = [Math.floor(Math.random() * nx), Math.floor(Math.random() * ny)];
	
	camera = {x:m[0], y:m[1]};
	cameracount++;
	broqch.textContent = cameracount + "";
	if(cameracount ==10){
		p.textContent = "БРАВО! ТИ СПЕЧЕЛИ!";
		p.fontSize = "50";
		camera = 0;
		
	}
	else if (cameracount == 1) {
		p.textContent = "Минчо който не се казва Минчо се засилва по перона и се провиква: Ела тука да ти осветя лентата бее!!!";
	}
}
vhod.onkeydown = function(e) {
	if(e.key == "r") {
		herox = heroy = 0;
		cameracount = 0;
		camera =  {
			x: 8,
			y: 5
		}
		vhod.textContent = "" ;
		drawMap();
		broqch.textContent = "" ;
	}
}
