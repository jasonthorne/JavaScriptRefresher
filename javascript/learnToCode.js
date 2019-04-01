 //Ctrl-alt j in chrome for dev tools +++
            

//================================
//Variables and Strings

/*
var firstName = "John";
var lastName = "Smith";
var dataOfBirth = "10-09-82";
var age = "23";
var profileImageUrl = "http://myPic.com/pic.jpg";

//concatenation. ('age' is auto converted into string):
var loginWelcomeMessage = "Welcome " + firstName + ". Happy " + age + "rd birthday!";

console.log(loginWelcomeMessage);
*/

//================================
/*
//Numbers in JavaScript

//all numbers are floating point (whether decimal point is shown or not)
var age = 23;
var age2 = 23.556;

var sum = 10 + 15;
var sub = 15 - 10;
var mul = 10 * 3;
var div = 9/3;
var mod = 10 % 3; //gives the remainder in a division operator

var msg = "10/3 = 3 with a remainder of " + mod;

var result = 10 * ((5 + 3) - 4) //order of operations in parenthesis


console.log(result);
*/
//================================
//Comparison Operators in JavaScript
 /*           
 if (1 == 1){
	 console.log("Yo!")
 }
 
 var myAccountBalance= 300;
 var nikeShoes = 799.23;
 var coupon = 500;
 
// == equal value
// === same value and data type
// <= less than or equal to
// >= greater than or equal to
// !== not equal to

var val1 = 23;
var val2 = "23";

if (val1 === val2){
	console.log("These are the same!");
}else{
	console.log("One of these is not like the other....");
}
*/
//================================
//Logical Operators in JavaScript
/*
if (1 == 1 && 2 == 2 || "Joe" == "Joe"){
	console.log("These are both true");
}

if (true && true){
	console.log("These are the same");
}

if (true && false){
	console.log("These are the same");
}


if (1 == 3 || "Joe" == "Joe"){
	console.log("One of these is true");
}

var cat1 = 5;
var cat2 = 10;
var cat3 = 1;
var cat3DisabledHandicap = true;

if(cat1 > cat2 && cat1 > cat3 && !cat3DisabledHandicap){
	console.log("Cat1 is the cutest!");
}else if (cat2 > cat1 && cat2 > cat3 && !cat3DisabledHandicap){
	console.log("Cat2 is the cutest!");
}else if (cat3 > cat1 && cat3 > cat2 || cat3DisabledHandicap){
	console.log("Cat3 is the cutest!");
}
*/
//================================
//JavaScript Arrays

var studentNames = ["Timmy", "Janessa", "Arun"];

var naughtyList = [];

naughtyList.push(students[0]); //add to array

console.log(naughtyList);

var index = naughtyList.indexOf("Timmy"); //returns the index of "Timmy", OR -1 if not found

if (index > -1){
	naughtyList.splice(index, 1); //splice the array at the index, and remove 1 element ("Timmy"). ++++++++
}

console.log(naughtyList);


var person = ["John", 23, true] //can accept mixed data types. NOT RECOMMENDED!! 


//================================
//JavaScript Loops

























 