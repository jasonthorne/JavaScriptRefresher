//variables that store a html element:
var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');

/*
numField1.value = "test"; //'value' for input fields
resultField.innerText = "test"; //'innerText' for text
*/

//create a form var:
var form = document.getElementById('xIsWhatPercentOfY'); 

//add a 'submit' event listener to the form (for our button (of type 'submit') which is inside the form):
form.addEventListener('submit', function(){
	//anonymous in-line function thats called when event is triggered:
	
	
	//form validation:
	if(!numField1.value || !numField2.value){ //if fields are null or undefined ('!' checks for both)
		alert("Please enter values in the fields");
	}else{
		var x = parseFloat(numField1.value); //convert string to float
		var y =  parseFloat(numField2.value); //convert string to float
		
		alert(x + y);
	}
	
	
	console.log(x);
	console.log(y);
	
});