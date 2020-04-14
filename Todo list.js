//check off specific todos by clicking
$("ul").on("click", "li", function(){                //this on("click", "li", function()) --- this is a method which is similar to only click method but when we add a
													 //new todo then it cant be toggled like others that we are toggling so here first we add $("ul") and in it we give the
													 //method so  this handles the li that we going to add and make it work like others

	$(this).toggleClass("completed");                //class completed made in css to toggle it here 
});

//click on X to delete todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();                            // this just removes the <ul> that we want to fadeout when clicking X and not the whole of the li/ul/div or any
	});                                              //parent gives the element printed in inspectors sources and html and removes the thing that we have clicked
	event.stopPropagation();                         //this event helps to show that we have clicked only that particular part and not toggling other tags to be clicked or hit
});

// $("ul").click(function(){
// 	alert("clicked on a ul");
// });
//                                                   //to prevent such cases where if we only select span or any other element 
// $("#container").click(function(){                 //we have to add events in the thimg that we want to receive only when we have clicked that item
// 	alert("clicked on a container");
// });

// $("body").click(function(){
// 	alert("clicked on a body");
// });

//to create todos after adding them in type bar using listeners
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from type bar
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add it to the ul
		$("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + todoText + "</li>")    //this append takes the grabbed values and adds it to the ul of html 
	}
});

$(".fa fa-plus").click(function(){                      //the class of icon to  be toggled when we click to appear and disappear//
	$("input[type = 'text']").fadeToggle()
});