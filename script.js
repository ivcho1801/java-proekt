let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let vhod = document.getElementById("vhod").value;
let words = vhod.split(" ");
console.log(words);
let p= document.getElementById("tutorial");
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

function drawMap() {
	heroimg.src = "mincho.png";
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(heroimg, herox * sqside, heroy * sqside, sqside, sqside);
	for (let i = 0; i < nx; i++) {
		for (let j = 0; j < ny; j++) {
			context.strokeRect(i * sqside, j * sqside, sqside, sqside);
			let isFill = false;
			if(Math.random() * 100 <= 3) {
			isFill = true;
			}
		}
	
	}
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
	 p .innerText = "Минчо който не се казва Минчо се засилва по перона и се провиква: Ела тука да ти осветя лентата бее!!!";
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

}
