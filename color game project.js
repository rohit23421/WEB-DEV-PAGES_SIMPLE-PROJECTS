var numberofsquares = 6;
var colors = generaterandomcolors(numberofsquares);         // we can replace it with numofsquares for another syntax
//[
//	"rgb(255, 0, 0)",        //the spaces after each comma are important to implement the color
//	"rgb(255, 255, 0)",      //the spaces after each comma are important to implement the color
//	"rgb(0, 255, 0)",        //the spaces after each comma are important to implement the color
//	"rgb(0, 255, 255)",      //the spaces after each comma are important to implement the color
//	"rgb(0, 0, 255)",        //the spaces after each comma are important to implement the color
//	"rgb(255, 0, 255)"       //the spaces after each comma are important to implement the color
//]
var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
//var modebuttons = document.querySelectorAll(".mode");             //use . for class



// for(var i = 0; i < modebuttons.length; i++){
// 	modebuttons[i].addEventListener("click",function(){
// 		modebuttons[0].classList.remove("selected");
// 		modebuttons[1].classList.remove("selected");
// 		this.classList.add("selected");

// 		this.textContent === "Easy" ? numberofsquares = 3: numberofsquares = 6;   //this is used inplace of the lower one this is just a use of ternary operator

// 		// if(this.textContent === "Easy"){                         //
// 		// 	numberofsquares = 3;                                    // 
// 		// } else {                                                 // this whole can be used in place of the ternary operators place     
// 		// 	numberofsquares = 6;                                    //that depends on how we want to organise the syntax
// 		// }    
// 		                                                    //
// 		//reset();      we can also call a function and type the code below to call it for the same use 
	
// 	});
//}

// function reset(){
// 	colors = generaterandomcolors(numberofsquares);
// 	//pick a new random color from array
// 	pickedColor = pickcolor();
// 	//change colordisplay to matched picked color
// 	colordisplay.textContent = pickedColor;
// 	this.textContent = "New colors";

// 	messagedisplay.textContent = "";
// 	//change color of squares
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.display = "block";
// 			squares[i].style.backgroundColor = colors[i];
// 		}else {
// 			squares[i].style.backgroundColor = "none";
// 		}
// 	}	
// 	h1.style.backgroundColor = "steelblue";
// }

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numberofsquares = 3;
	colors = generaterandomcolors(numberofsquares);       //or replace by numofsquares for another type of syntax
	pickedColor = pickcolor();
	colordisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numberofsquares = 6;               
	colors = generaterandomcolors(numberofsquares);     //or replace by numofsquares for another type of synta
	pickedColor = pickcolor();
	colordisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}

});

resetbutton.addEventListener("click",function(){
	//generate all new colors 
	colors = generaterandomcolors(numberofsquares);                      //or replace by 6
	//pick a new random color from array
	pickedColor = pickcolor();
	//change colordisplay to matched picked color
	colordisplay.textContent = pickedColor;
	this.textContent = "New colors";

	messagedisplay.textContent = "";
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	//reset();                                                           // we can also use this instead of all that is above in this resetbutton
});

colordisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];  //use style.backgroundColor always as its compatible to all the browsers

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of picked color
		var clickedcolor = this.style.backgroundColor;
		//compare color to pickedcolor
		console.log(pickedColor, clickedcolor); // to print in console about whats going on to be compared
		if(clickedcolor === pickedColor){
			messagedisplay.textContent = "correct";
			resetbutton.textContent = "play again";
			changecolors(clickedcolor);
			h1.style.backgroundColor = clickedcolor;
		}else {
			this.style.backgroundColor = "#232323";
			messagedisplay.textContent = "try again";
		}
	});
}

function changecolors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
	//change each color to match given color
	squares[i].style.backgroundColor = color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generaterandomcolors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into array(arr)
		arr.push(randomcolor())
	}
	//return that array
	return arr;
}

function randomcolor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}