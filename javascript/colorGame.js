// hardcoded
//var colors=["rgb(0, 0, 255)","rgb(155, 0, 255)","rgb(255, 0, 0)","rgb(250, 120, 0)","rgb(50, 50, 255)","rgb(0, 250, 0)"];
var numSquare=6;
var colors=generateRandomColors(numSquare);
var square=document.querySelectorAll(".square");
var dispColor=document.getElementById("displayColor");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#resetColors");
var hardButton=document.querySelector("#hardBtn");
var easyButton=document.querySelector("#easyBtn");
//for hard mode
hardButton.addEventListener("click",function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquare=6;
	colors=generateRandomColors(numSquare);
	pickedColor=pickColor();
	dispColor.textContent=pickedColor;
	for(var i=0;i<square.length;i++){
		square[i].style.background=colors[i];
		square[i].style.display="block";
		
	}

});
//for easy mode
easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquare=3;
	colors=generateRandomColors(numSquare);
	pickedColor=pickColor();
	dispColor.textContent=pickedColor;
	for(var i=0;i<square.length;i++){
		if(colors[i]){
			square[i].style.background=colors[i];
		}
		else{
			square[i].style.display="none";
		}
	}
	
});
var pickedColor=pickColor();
dispColor.textContent=pickedColor;
//new colors button
reset.addEventListener("click",function(){
	//geterate random colors
	colors=generateRandomColors(numSquare);
	//pick a color
	pickedColor=pickColor();
	//chane colorDisplay
	dispColor.textContent=pickedColor;
	for(var i=0;i<square.length;i++){
		square[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
	messageDisplay.textContent="";
	this.textContent="New Colors";
});


for(var i=0;i<square.length;i++){
	//give initial colors
	square[i].style.background=colors[i];
	//add event listener
	square[i].addEventListener("click",function(){
		//grab color of the click
	var clickedColor=this.style.background;
	//alert(typeof(clickedColor) +" "+typeof(pickedColor));
	//alert(clickedColor+" "+pickedColor);
		//compare clickedColor and pickedColor
	if(clickedColor.toString()===pickedColor.toString()){
			messageDisplay.textContent="Correct!!!";
			changeColor(clickedColor);
			h1.style.background=clickedColor;
			reset.textContent="Play Again?";
		}
	else{
			//alert("Wrong!");
			this.style.background="black";
			messageDisplay.textContent="Try Again!";

		}
		//console.log(clickedColor+"  "+pickedColor);
	});
}
//function to change color of all square to matched color
function changeColor(color){
	//loop through all squares
	for(var i=0;i<square.length;i++){
		//change color of each square
		square[i].style.background=color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

//function to generate random color
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		//generate random color and push into array
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//for random number for red
	var r=Math.floor(Math.random() * 256);
	//random numer for green
	var g=Math.floor(Math.random() * 256);
	//random number for blue
	var b=Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g + ", " + b +")";
}