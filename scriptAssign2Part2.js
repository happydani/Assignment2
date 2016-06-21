// Assignment 2 Part 2
////////////////////////////////////////////
// Part 1 - Math and Math Functions

// STEP 1 - Display the absolute value of a number
/*
var x = window.prompt("Please provide a number");
window.console.log("The absolute value of this number is : " + Math.abs(x));


// STEP 2 - Round the value up or down

var x = window.prompt("Please provide a floating point number (a decimal)");
window.console.log("The rounded value of this number is : " + Math.round(x));


// STEP 3 - Round down to the nearest integer

var x = window.prompt("Please provide a floating point number (a decimal)");
window.console.log("The rounded down value to the nearest integer of this number is : " + Math.floor(x));


// STEP 4 - ask the user to enter 5 number and report the max and min

var commaDelimitedNumbers = window.prompt("Please enter 5  comma delimited numbers");
window.console.log(commaDelimitedNumbers);

var arr = new String(commaDelimitedNumbers);
arr = arr.split(",");
var max = Math.max.apply(Math, arr);
var min = Math.min.apply(Math, arr);

window.console.log("max = " + max + " and min = " + min); 


// STEP 5 - find the square root of a number

var x = window.prompt("Please provide a number");
window.console.log("The square root of this number is : " + Math.sqrt(x));


////////////////////////////////////////////
// Part 2 - Date and Date Functions

// STEP 6 - Get today's date

var myDate = new Date();
myDate = myDate.toDateString();
//myDate = myDate.split(" ");
window.console.log(myDate);


// STEP 7 - Calculate days in a given month

var month = window.prompt("Supply a month: ");
var year = window.prompt("Supply a year: ");
var daysInMonth = new Date(year, month, 0).getDate();
window.console.log(daysInMonth);


// STEP 8 - get the month name from a particular date
var myDate = new Date();
myDate = myDate.toDateString();
myDate = myDate.split(" ");
window.console.log(myDate[1]);


// STEP 9 - test whether a date is a weekend

var myDate = new Date();
myDate = myDate.toDateString();
myDate = myDate.split(" ");
window.console.log("Today is " + myDate[0]);
if (myDate[0] == "Sat" || myDate[0] == "Sun") {
    window.console.log("Yipee!! This date is a weekend!");
}
else {
    window.console.log("Ah man!! This date is a weekday!");
}


// STEP 10 - Display yesterdays day of the week
var myDate = new Date();
var yesterday = myDate.setDate(myDate.getDate([0]) - 1);
myDate = myDate.toDateString();
myDate = myDate.split(" ");

window.console.log("Yesterday was " + myDate[0]);


// STEP 11 - Get the current day of the week and display its first character

var myDate = new Date();
myDate = myDate.toDateString();
myDate = myDate.split(" ");
window.console.log("Today is " + myDate[0].charAt(0));



////////////////////////////////////////////
// Part 3 - Conditional Logic and Looping Operations

// STEP 12 - Enter two numbers and determine if the first is larger

var x = window.prompt("Enter a number");
var y = window.prompt("Enter a second number");

if (x > y) {
    window.console.log("The first number was larger");
}


// STEP 13 - Determine a student's grades based on their scores.

var student = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
var score = [80, 77, 88, 95, 68];
var grade = [];

for (var i = 0; i < student.length; i++) {
    if (score[i] < 60) {
        grade[i] = "F";
    }
    else if (score[i] < 70) {
        grade[i] = "D";
    }
    else if (score[i] < 80) {
        grade[i] = "C";
    }
    else if (score[i] < 90) {
        grade[i] = "B";
    }
    else if (score[i] < 100) {
        grade[i] = "A";
    }
    else {
        window.console.log("No grade!");
    }
    window.console.log(student[i] + " scored " + score[i] + ", or " + grade[i]);
}


// STEP 14 - 

for (var i=1; i <= 15; i++) {
    if (i % 2 == 0) {
       window.console.log(i + " is even"); 
    }
    else {
        window.console.log(i + " is odd");
    }
}


// STEP 15 - 

for (var i=1; i <= 100; i++) {
    if (i % 3 == 0) {
       window.console.log("Fizz"); 
    }
    else if (i % 5 == 0) {
        window.console.log("Buzz");     
    }
    else {
        window.console.log(i);
    }
}


////////////////////////////////////////////
// Part 4 - The “Hitchhiker’s Guide to the Galaxy” 


// STEP 1 - give the user a choice whether to play or not

var ready = window.confirm("Are you ready to play Hitchhiker's Guide to the Galaxy?"); 

if (ready == true) {
    window.alert("Awesome, our hero is waiting!");
}
else {
    window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
}


// STEP 2 - set the stage for the game

window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");


// STEP 3 - ask user which direction to head

var direction = window.prompt("Which direction would you like to head (please enter forward, left, or right)?");


// STEP 4 - tell user results of choice

switch (direction) {
    case "forward": alert("You walk about 100 yards and safely make your way out of the cave.");
        break; // break out of the cycle
    case "left": alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
		break;
    case "right": alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
		break;    
    default: alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
}


// STEP 5 & 6 - user rates the game ... evaluate if feedback valid

var feedback = window.prompt("Please rate my game on a scale of 1 to 10 with 10 as the highest");
if ((feedback >= 1) && (feedback <= 10)) {

    if ((feedback >=6) && (feedback <=10)) {
        window.alert("Thank you, we will continue to make improvements to the game!");
    }
    else {
        window.alert("Whatever, you weren’t very good at this game anyway!");
    }
}
else {
    feedback = 10;
    window.alert("You didn't pick a number in the correct range");
}


////////////////////////////////////////////
// Part 5 - The “Coin Flip” Game


// STEP 1 - random generator

var coinFlip = Math.random();
window.console.log("Random coinFlip = " + coinFlip);


// STEP 2 - user selects heads or tails

var choice = window.prompt("Select 'heads' or 'tails'");


// STEP 3 throug 7 - win or lose?...the various permutations

if (coinFlip < .5 ) {

// STEP 8 - two Math methods to get a solid whole number on the coin flip

    coinFlip = Math.floor(coinFlip);
    window.console.log("Floor coinFlip = " + coinFlip);
    if  (choice == "heads") {
        alert("The flip was heads and you chose heads...you win!");
    }
    else {
        alert("The flip was heads and you chose tails...you lose!");
    }
}
else {
    coinFlip = Math.ceil(coinFlip);
    window.console.log("Ceiling coinFlip = " + coinFlip);
    if  (choice == "heads") {
        alert("The flip was tails and you chose heads...you lose!");
    }
    else {
        alert("The flip was tails and you chose tails...you win!");
    }
}


////////////////////////////////////////////
// Part 6 - The “Coin Flip” Game Redux 

// STEP 1 - assign a variable for a random generator

var coinFlip;
var result;

// STEP 2 - set loop

for (var i=1; i <= 10; i++) {
    
    // STEP 3 - set random generator and round the number up or down
    result = Math.round(Math.random(i));
    
    
    
    
    coinFlip = window.console.log(i + "     coinFlip = " + result);
    
    // STEP 4 - 
    if (result == 0) {
        window.console.log(" Heads");
    }
    else if (result == 1) {
        window.console.log(" Tails");
    }
    else {
        window.console.log("Neither heads nor tails");
    }
    
}


////////////////////////////////////////////
// Part 7 - The “Coin Flip Streak” Game


// STEP 1 - assign a variable for a random generator

var coinFlip;
var result;
var i=0;

// STEP 2 - set do while loop

do {
    
    // STEP 3 - set random generator and round the number up or down
    result = Math.round(Math.random(i));
    
    coinFlip = window.console.log(i + "     coinFlip = " + result);
    
    // STEP 4 - 
    if (result == 0) {
        window.console.log(" Heads");
    }
    else if (result == 1) {
        window.console.log(" Tails...Game Over!");
        break;
    }
    
    // STEP 5 - end the loop when coinFlip becomes tails

    else {
        window.console.log("Neither heads nor tails");
    }
    i++;
} while (i <= 10);



////////////////////////////////////////////
// Part 8 - Looping a Triangle

var strOfHashes = " ";

for (var i=0; i < 8; i++) {
    //window.console.log("\n");
    for (var j=0; j < i; j++) {
        strOfHashes = strOfHashes + "#"; //use concatination
    }
    window.console.log(strOfHashes);
    // window.console.log("i = " + i + " while j = " + j);
    strOfHashes = " ";
}

*/
///////////////////////////////////////////
// Part 9 - Odd or Even? 

for (var i=0; i <= 15; i++) {
    if (i % 2 == 0) {
       window.console.log(i + " is even"); 
    }
    else {
        window.console.log(i + " is odd");
    }
}
