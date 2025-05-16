const body= document.body;

const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);

// const msg = document.createElement("p");
// msg.textContent = "Welcome to my app. This is a message box";
// panel.appendChild(msg);

// const closeBtn = document.createElement("button");
// closeBtn.textContent = "x";
// panel.appendChild(closeBtn);

// closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel),); 


const canvas = document.createElement("canvas");
canvas.style.background = "grey";
canvas.style.width = "500px";
canvas.style.height = "500px";
canvas.style.marginLeft = "650px";
body.style.backgroundColor = "pink";

const ctx = canvas.getContext("2d");
ctx.font = "17pt Arial";
ctx.fillText("Ammtul <3", 100, 40);

// adding an image to the canvas
function addAnImage(){
const img = new Image();
img.src = "images/gwagon.png";

img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // try 20, 20, 20, 20
}

};

addAnImage(); //call the function #

var cars = [];
cars[0] = "images/gclass.jpg";
cars[1] = "images/gwagon.png";


panel.appendChild(canvas);
