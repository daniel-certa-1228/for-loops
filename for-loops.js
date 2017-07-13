console.log("for-loops.js");

//Increment by 10

// Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use console.log() to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.

for (let i = 5; i < 121; i += 10) {
	console.log("Curent value is " + i + ".");
};

// Decrement by division

// Write a for loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2. Use console.log() to output its value every time. When the counter variable's value is 1, stop execution.
for (let i = 4096; i > 1; i/=2) {
	console.log("Current value is " + i + ".");
}

// Array iteration

// Create an array that contains the names of American Presidents. Loop over that array with a for loop, and use string concatenation with console.log() to output the order and name of each President (see example below).

let presidents = [
	"George Washington",
	"John Adams",
	"Thomas Jefferson",
	"James Madison",
	"James Monroe",
	"John Quincy Adams",
	"Andrew Jackson",
	"Martin Van Buren",
	"William Henry Harrison",
	"John Tyler",
	"James K. Polk",
	"Zachary Taylor",
	"Millard Fillmore",
	"Franklin Pierce",
	"James Buchanan",
	"Abraham Lincoln",
	"Andrew Johnson",
	"Ulysses S. Grant",
	"Rutherford B. Hayes",
	"James Garfield",
	"Chester A. Arthur",
	"Grover Cleveland",
	"Benjamin Harrison",
	"Grover Cleveland",
	"William McKinley",
	"Theodore Roosevelt",
	"William Howard Taft",
	"Woodrow Wilson",
	"Warren G. Harding",
	"Calvin Coolidge",
	"Herbert Hoover",
	"Franklin D. Roosevelt",
	"Harry S. Truman",
	"Dwight D. Eisenhower",
	"John F. Kennedy",
	"Lyndon B. Johnson",
	"Richard M. Nixon",
	"Gerald R. Ford",
	"James Carter",
	"Ronald Reagan",
	"George H. W. Bush",
	"William J. Clinton",
	"George W. Bush",
	"Barack Obama",
	"Donald J. Trump",
];

for (let i = 0; i < presidents.length; i++) {
	console.log("President #" + (i+1) + " was " + presidents[i] + ".");
}

// Object iteration

// You can use another kind of for loop to iterate over objects. Iterate over the object below and use console.log() to output the names of the keys in the object.

let antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (let prop in antSpecies) {
	console.log(prop);
}
