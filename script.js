let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let nx = 4;
let ny = 3;
let sqside = 70;
let herox = 2;
let heroy = 1;
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
		}	
	}
}

drawMap();

canvas.onclick = function(e) {
	let x = e.x - canvas.offsetLeft;
	let y = e.y - canvas.offsetTop;
	herox = Math.floor(x / sqside);
	heroy = Math.floor(y / sqside);
	drawMap();
}
function moveLeft() {
 herox --;
 drawMap();
 
 }
 function moveDown() {
  heroy ++;
 drawMap();
 
 }
 function moveRight() {
  herox ++;
 drawMap();
 
 }
 function moveUp() {
  heroy --;
 drawMap();
 
 }
 
document.onkeypress = function(e) {
let key = e.key;
switch(key) {
case "a": moveLeft(); break;
case "s": moveDown(); break;
case "d": moveRight(); break;
case "w": moveUp(); break;
	}

console.log(key);
}