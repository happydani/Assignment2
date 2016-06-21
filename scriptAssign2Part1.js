// Assignment 2 Part 1 - 

// STEP 1 - Find the length of a user's name

/*var name = window.prompt("What is your name?");
window.alert("The length of your name is " + name.length + " characters.");

// STEP 2 - Find the character at a user supplied number

var name = window.prompt("What is your name?");
var length = name.length;
window.alert("The length of your name is " + length + " characters.");
var num = window.prompt("Please supply a number between 0 and " + (length-1) + ".");
window.alert("The character at " + num + " is " + name.charAt(num));


// STEP 3 - use the concat method

var fName = window.prompt("What is your first name?");
var lName = window.prompt("What is your last name?");
lName = " " + lName 
window.alert("Your name is: " + fName.concat(lName));


// STEP 4 - Find the index of a word in a string

var fox = "The quick brown fox jumps over the lazy dog";
window.alert("The index of the word fox is: " + fox.indexOf("fox"));


// STEP 5 - Find the index of the last instance of a substring

var fox = "The quick brown fox jumps over the lazy fox";
window.alert("The index of last instance of the word fox is: " + fox.lastIndexOf("fox"));


// STEP 6 - Replace one string with another

var lazy = "The quick brown fox jumped over the lazy dog"
var fullName = window.prompt("What is your full name?");
window.alert(lazy.replace("the lazy dog", fullName));


// STEP 7 - Get the index of a search term in a string

var fox = "The quick brown fox jumps over the lazy dog";
var wordToSearch = window.prompt("Search for a word");
window.alert("Found it at index " + fox.search(wordToSearch));


// STEP 8 - Get a slice of text from one string and save it to another, then convert it to upper case

var old_string = "The quick brown fox jumps over the lazy dog";
var new_string = " oops!";
var i = old_string.search("the lazy dog");
new_string = old_string.slice(i,i+12);
window.alert("The new string is : " + new_string.toUpperCase());


// STEP 9 - Trim leading and trailing blank characters and convert to lower case

var fox = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
window.alert("The new string is : " + fox.trim().toLowerCase());

*/
// STEP 10 - Capitalize a sentence string

var fox = "the quick brown fox jumps over the lazy dog";
fox = fox.replace(fox[0], fox[0].toUpperCase());
window.alert("The capitalized string is : " +  fox);





