// var canvas = document.getElementById("mycan");

var canvas = document.querySelector("canvas"); 

// Setting the window width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

var c = canvas.getContext("2d");

/*
c.fillStyle = "rgb(255, 0, 0, 0.4)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "#afafaf;"; 
c.fillRect(400, 100, 100, 100);
c.fillStyle = "#a8dfca;"; 
c.fillRect(300, 300, 100, 100);
c.fillRect(500, 500, 100, 100);


// Line drawing
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300); 
c.strokeStyle = "#babadc";
c.stroke();

// Are/Circle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = "#edbedb"; 
c.stroke();

for(var i = 0; i < 3; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    c.beginPath(); 
    c.arc(300, 300, 30, 0, Math.PI * 2, false);
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "#decabe;"; 
    c.stroke(); 
}
*/

// The start of a new animation of a circle 
// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "pink";
// c.stroke();

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "pink";
        c.stroke();
        //c.fill();
    }

    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = this.dx;
        }
        if(this.y.radius > innerHeight || this.y - this.radius <0){
            this.dy = -this.dy;
        }

       this.x += this.dx;
       this.y += this.dy;

       this.draw();
    }
}


var circleArray = [];

for(var i =0; i <100; i++) {
    var radius = 30;
    //var circle = new Circle(200, 200, 3, 30);
    var x = Math.random() * (innerWidth - radius *2) + radius;
    var y = Math.random() * (innerHeight - radius *2) + radius;
    var dx = (Math.random() -0.5) * 2;
    var dy = (Math.random() -0.5) * 2;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight); 

    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }

    //circle.update();

    //Here we will make the circle bounce back
    /*if(x + radius > innerWidth || x - radius < 0){
        dx = dy;
    }*/

}

animate();