var numBoxes = 6;
var colors = [];
var pickedColor;
var boxes = document.querySelectorAll(".box");
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.getElementById("displayMessage");
var h1 = document.querySelector("h1");
var newButton = document.getElementsByTagName("button")[0];
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//modebuttons event listeners
	setupModeButtons();
	setupBoxes();
	reset();
}

function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numBoxes = 3: numBoxes = 6;

		// if(this.textContent === "Easy"){
		// 	numBoxes = 3;
		// }else{
		// 	numBoxes = 6;
		// }
		reset();
	})
}
}

function reset(){
	//generate all new colors
	colors = generateColors(numBoxes);
	//pick a color from the array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;

	newButton.textContent = "New Colors";

	displayMessage.textContent = "";

	h1.style.backgroundColor = "steelblue";
	//change colors of boxes
	for(var i =0; i < boxes.length; i++){
		boxes[i].style.backgroundColor = colors[i];
		if(colors[i]){
			boxes[i].style.display = "block";
			boxes[i].style.backgroundColor = colors[i];
		}else{
			boxes[i].style.display = "none";
		}
	}
}

// setup Boxes
function setupBoxes(){
	for(var i =0; i < boxes.length; i++){

		// add clicked listerners to boxes
		boxes[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor
			if(clickedColor === pickedColor){

				newButton.textContent = "Play Again";
				displayMessage.textContent = "Correct!";
				h1.style.backgroundColor = pickedColor;
				// for(var i = 0; i < boxes.length; i++){
				// 	boxes[i].style.backgroundColor = pickedColor;
				// }
				changeColors(clickedColor);
			}else{
				this.style.backgroundColor = "#232323";
				displayMessage.textContent = "Try Again";
			}
		})
	}
}

// add listener to Button
newButton.addEventListener("click", function(){
	reset();
})
	
	for(var i =0; i < boxes.length; i++){

		// add clicked listerners to boxes
		boxes[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor
			if(clickedColor === pickedColor){

				newButton.textContent = "Play Again";
				displayMessage.textContent = "Correct!";
				h1.style.backgroundColor = pickedColor;
				// for(var i = 0; i < boxes.length; i++){
				// 	boxes[i].style.backgroundColor = pickedColor;
				// }
				changeColors(clickedColor);
			}else{
				this.style.backgroundColor = "#232323";
				displayMessage.textContent = "Try Again";
			}
		})
	}

function changeColors(color){
	for(var i = 0; i < boxes.length; i++){
		boxes[i].style.backgroundColor = pickedColor;
				}
}

function pickColor(){
	var randomColor = Math.floor(Math.random()*colors.length);
	return colors[randomColor];

}

function generateColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push to array
		arr.push(randomColorGenerate());
	}
	//return that array
	return arr;
}

function randomColorGenerate(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

