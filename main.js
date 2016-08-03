/*
=======================================================

** Week 2 - Project 2 **
*** Looping & Conditionals ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Loops and Iteration Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

or If...Else Documentation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

or While Loop Documentation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while


BASIC TRACK: 1-15
ADVANCED TRACK: 16-20
=======================================================
*/


// 1. Output each item in the following Array to your console:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];

console.log("\nQuestion 1\n");
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
for(i=0; i<livingRoom.length; i++) {
	console.log(livingRoom[i])
}



// 2. Using a loop, log numbers 22-33 in the console.

console.log("\nQuestion 2\n");
for(i=22; i<34; i++) {
	console.log(i);
}

// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.

console.log("\nQuestion 3\n");
for(i=75; i<101; i = i + 5) {
	console.log(i);
}


// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.

console.log("\nQuestion 4\n");
var counter = 0;
while (counter < 5) {
	console.log("This is how a profesional loops");
	counter++;
}

// 5. Separately, use both a for loop and while loop to do the same thing.
//     Print out the sentence "At home, I have _____ cats."
//     The numbers should range from 10 to 110, in increments of 25.

console.log("\nQuestion 5\n");

for (i=10; i<111 ; i=i+25 ) {
	console.log("At home I have " + i + " cats");
}

var counter = 10;

while (counter < 111) {
	console.log("At home I have " + counter + " cats");
	counter = counter + 25;
}


// 6. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8];

console.log("\nQuestion 6\n");

var numArray = [2, 17, 9, 24, 8];

for (i=0; i<numArray.length; i++) {

if(numArray[i]%2 === 0 && numArray[i] <11) {
console.log("The number is even");

} else if (numArray[i]%2 === 0 && numArray[i] > 10)
	console.log("The number is even and greater than 10");	
else {
	console.log("The number is odd");
}

}

// 7. Using the following Array, create variable called numThrees with the value [13, 23, 33, 43, 53, 63, 73]
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77]

console.log("\nQuestion 7\n");

var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77];

var numThrees;

 //This is what we need to output [13, 23, 33, 43, 53, 63, 73]
 
 for (i=0; i<numArray.length; i = i+3) {
 	numThrees = numArray[i];
 	console.log(numThrees);
 }



// 8. Write a loop that outputs the following to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######

console.log("\nQuestion 8\n");

// #
// ##
// ###
// ####
// #####
// ######
// #######

var init = "";

for (i=0; i<8; i++) {
	
		var init = init.concat("#");
		console.log(init);

	
} 


// 9. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

console.log("\nQuestion 9\n");

// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.


for (i=0; i<101; i++) {
	if (i%3 ===0 && i%5 === 0) {
		console.log("Fizz");
	} else if (i%5 === 0) {
		console.log("Buzz");
	} else if (i%3 === 0) {
		console.log("FizzBuzz");
	} else {
		console.log (i);
	}
}



// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 10. Use a variable called "human" to prompt the user to type their choice.

console.log("\nQuestion 10\n");

var userChoice = prompt ("Type in your choice: Rock, Paper, or Scissors");

console.log (userChoice);

// 11. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//     For reference:
//     Math.random gives you a random number between 0 and 1, which is different each time you call it.

console.log("\nQuestion 11\n");

var computer = Math.random();

console.log (computer);


// 12. Let's start our conditional statement.
//     If the random computer number falls between 0 and .33, the computer is "rock"
//     If the random computer number falls between .34 and .66, the computer is "paper"
//     If the random computer number falls between .67 and 1, the computer is "scissors"

console.log("\nQuestion 12\n");

//     If the random computer number falls between 0 and .33, the computer is "rock"
//     If the random computer number falls between .34 and .66, the computer is "paper"
//     If the random computer number falls between .67 and 1, the computer is "scissors"

if (computer > 0 && computer < .33) {
  computer = "rock";
} else if (computer > .33 && computer < .66) {
  computer = "paper";
} else {
  computer = "scissors";
}

console.log (computer);




// 13. Using both "human" and the computer choice, begin another conditional statement to compare them.

console.log("\nQuestion 13\n");

if (computer === "rock" && userChoice === "rock") {
  console.log ("It's a draw!");
} else if (computer === "rock" && userChoice === "paper") {
  console.log ("Your win!");
} else if (computer === "rock" && userChoice === "scissors") {
  console.log ("You lose!");
} else if (computer === "paper" && userChoice === "paper") {
  console.log ("It's a draw!");
} else if (computer === "paper" && userChoice === "rock") {
  console.log ("You lose!");
} else if (computer === "paper" && userChoice === "scissors") {
  console.log ("You win!");
} else if (computer === "scissors" && userChoice === "scissors") {
  console.log ("It's a draw!");
} else if (computer === "scissors" && userChoice === "rock") {
  console.log ("You win!");
} else if (computer === "scissors" && userChoice === "paper") {
  console.log ("You lose!");
} else {
  console.log ("bad input");
}

// 14. After comparing, determine who has won; the computer or the human!

// This is done in the answer to the last question.

// 15. Give yourself a high five for completing your first javascript game!
// BONUS: What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.

// This is covered in the last else

// else {
//   console.log ("bad input");
// }


// ADVANCED TRACK
// 16. Write a conditional statement to find the largest of the numbers in the array provided.
var largestNum = [-5, -2, -6, 0, -1]

console.log("\nQuestion 16\n");

// Write a conditional statement to find the largest of the numbers in the array provided.

var largestNum = [-5, -2, -6, 0, -1];

var winner = largestNum[0];
var currentNum;
var nextNum;

for (i=0; i<largestNum.length; i++) {
	
	if (winner >= largestNum[i]) {
		
	} else if (winner < largestNum[i]) {
		winner = largestNum[i];
	} else {
		console.log ("The third condition.");
	}

}

console.log(winner);



// HEADS OR TAILS?
// 17. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)

var coin = Math.floor(Math.random() * 2);

console.log(coin);



// 18. Use a do/while loop to keep flipping the coin until you get tails.

console.log("\nQuestion 18\n");

do {
	var coin = Math.floor(Math.random() * 2);
} while (coin === 1);

console.log(coin);

// CHESS BOARD
// 19. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

console.log("\nQuestion 17\n");

var cont = "";

for (i=0; i<8; i++) {
	for(j=0; j<4; j++){
	var cont = cont.concat(" #")
	}
	var cont = cont.concat("\n");
}

console.log(cont);

// 20. When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.

console.log("\nQuestion 18\n");

var height = prompt ("What is the height of your grid?");
var width = prompt ("What is the width of your grid?");

var cont = "";

for (i=0; i<height; i++) {
	for(j=0; j<width/2; j++){
	var cont = cont.concat(" #")
	}
	var cont = cont.concat("\n");
}

console.log(cont);
