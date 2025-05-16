const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//1) Add a square to the canvas
// ctx.fillStyle = "rgb(200 0 0)";
// ctx.fillRect(10, 10, 50, 50);

//2) Draw a solid square 
//ctx.fillRect(200, 10, 100, 100);

//3) Draw shapes 
/*
ctx.beginPath(); 
ctx.moveTo(10,120);
ctx.lineTo(10, 180); 
ctx.lineTo(110, 150); 
ctx.fill(); 
*/

//4) Draw stroked lines 
/*
function drawTriangle(){
ctx.beginPath();
ctx.moveTo(140, 160);
ctx.lineTo(14, 220);
ctx.lineTo(40, 190);
ctx.closePath();
ctx.stroke();
}

drawTriangle();
*/

//5) Draw some complex lines 
// ctx.beginPath();
// ctx.moveTo(160, 160);
// ctx.lineTo(170, 220);
// ctx.lineTo(240, 210);
// ctx.lineTo(260, 170);
// ctx.lineTo(190, 140);
// ctx.closePath();
// ctx.stroke();

//6) Draw a small circle 
/*
ctx.beginPath();
ctx.arc(100, 300, 40, 0, Math.PI, true);
ctx.stroke();
*/

//7) Draw a full circle
/*
ctx.beginPath();
ctx.arc(100, 300, 30, 0, 2 *Math.PI, true); 
ctx.fill();
*/

//8) Draw a three-quarter arc 
/*
ctx.beginPath();
ctx.arc(200, 300, 25, 0, 3 / 2 *Math.PI, false);
ctx.stroke();
*/

//9) Drawing text on canvas
/*
ctx.font = "17pt Arial";
ctx.fillText("Working with Canvas is fun", 330, 40);

ctx.font = "18pt Garamond";
ctx.fillText("I love HTML Canvas", 330, 60); 

ctx.font = "24pt Arial";
ctx.fillText("Canvas is great", 330, 80); 
*/

//10) Fill style anc colour
ctx.fillStyle = "blue";
ctx.fillRect(310, 160, 100, 50); 
ctx.strokeStyle = "pink"; 
ctx.strokeRect(310, 240, 100, 50);
