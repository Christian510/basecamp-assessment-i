// #1 create a variable called 'myName' and assign it to your name as a string

let myName = "Christian";
// #2 create a variable called 'faveNum' and assign it to your favorite number

let faveNum = 1972;

// #3 create a variable called 'lovesCode' and set it to true

let lovesCode = true;

// #4 Using the previously created variables, create a new variable called 'me' that uses the myName and faveNum varible to create a sentence like this 'My name is Bryan and my favorite number is 3'

let me;
me = "My name is " + myName + " and my favorite number is " + faveNum;
// this is missleading.  you say I am suppose to make a sentenc "like" the one above.
// But, the test result reuires that it is structured exactly the same as the example given above.

// #5 Using the previously created faveNum variable, create a new variable called 'trueFaveNum'. *trueFaveNum* should equal true when comparing faveNum to your favorite number.v // HINT: Use a comparison operator.

let trueFaveNum = true;
trueFaveNum === faveNum;
// This doesn't make sense to me.

// #6 Create a new variable called notHakeem. Using the previously created myName variable, test that your name DOES NOT equal the string 'Hakeem Olajuwon'. If your name does happen to be Hakeem Olajuwon, test against 'Karl Malone'.
let notHakeem;

var testString = function(testName) {
 if(testName !== myName) {return true}
 else {return false}
}

notHakeem = testString("Hakeem Oljuwon");
console.log(notHakeem);

// #7 Create an if statement that checks the age variable below. If age is greater than 16, then set canDrive to true otherwise set canDrive to false. The canDrive variable will be set by the unit test so do not adjust it.

var age = 18;
var canDrive;

if(age > 16){
  canDrive = true;
} else {
  canDrive = false;
}

// #8 Create an if statement inside of the responseCreator function that sets the colorResponse variable value based off of a passed in value. The param value passed in will be added in the unit test. If the param value is 'green' set colorResponse variable to 'Green is okay'. If the param value is 'red' set reponse variable to 'I heart red'. Otherwise set the colorResponse variable to 'What is your favorite color?'. Make sure to return the colorResponse variable at the end once it has been properly set.

var colorResponse;

var responseCreator = function(param){
  if(param === "green") {return "Green is okay"}           
  else if(param === "red") {return "I heart red"} 
  else {return "What is your favorite color?"}             
}
colorResponse = responseCreator("red");

// #9 Create a function called 'sum' that takes in one parameter and returns the sum of that parameter added it itself.

function sum(p){return p + p;}
sum(5);

// #10 Create a function called 'greeter' that takes in two parameters, name and number. Have 'greeter' return a string that says something like this, 'Hi! I am Bryan and I am 28 years old" but with the appropriate values..

function greeter(name, number) {
  
  return "Hi! I am " + name + " and I am " + number + " years old";
}
greeter("Bryan", 28);
// These instructions are missleading.  They ask to construction a sentence "like"
// 'Hi! I am Bryan and I am 20 years old'.  But, in reality in order to pass one must construct that exact sentence.