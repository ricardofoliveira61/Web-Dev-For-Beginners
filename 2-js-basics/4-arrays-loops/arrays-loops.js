// Arrays allow to store different typpes of data in one array. The syntax is let myArray = []

let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanila", "Pistachio", "Rocky Road"];
// Array elements  are assigned with a unique value called index, starting with the value 0
console.log(iceCreamFlavors[2]); // will print Vanila
//You can use the index to change the value on that index
iceCreamFlavors[4] = "Butter Pecan"; //will change Rocky Road by Butter Pecan
// You can also insert a new value at a given index by doing
iceCreamFlavors[5] = "Cookie Dough";
// However array have special methods to add elemnts to the end of the array like the push() method.
// Arrays also have the length property that will tell how many elements the array contains
console.log(iceCreamFlavors.length);

// LOOPS
// For loop
// The for loop requires 3 parts to iterate:
//  counter -> A variable that is typically initialized with a number that counts the number of iterations
//  condition -> Expression that uses comparasion operators to cause the loop to stop when false
//  iteration-expression -> Runs at the end of each iteration, typically used to change the counter value
// this parts are sperated by (;)

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// for of loops
// similar to the for loops but instead they are an elemnts of an array for example

for (let flavor of iceCreamFlavors) {
  console.log(flavor);
}

// WHILE loops
// While loops only require a condition that will stop the loop when the condition becomes false. Contidions in while loops
// often rely on other values like counters and must be managed during the loop, otherwise the condition will always be true
// and the loop will never stop
//
// Counting up to 10 using a while loop

let i = 1;

while (i < 11) {
  console.log(i);
  i++;
}

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
}

console.log(Object.keys(iceCreamFlavors)); // prints the index of each element of the array

iceCreamFlavors.length = 2 //this will decrease the array by deleting elements
console.log(iceCreamFlavors);

// join method, joins the elements of an array
console.log(iceCreamFlavors.join(","));

// slice() returns a shallow copy (this means this copy shares the same reference point to the same underlying object as those of the source object
// from which the copy was made). The slice method takes two arguments, the start and the end. The start is the index to start
// while the end can be ommited resulting the end to be the last element, or in case the end is passed the end index is not inclueded in the copy
// The original array will not be modified

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2)); // from camel till the end
console.log(animals.slice(2, 4));//from camel till duck
console.log(animals.slice(-2));// the last two elements
console.log(animals.slice(2, -1))// from camel till the last element, not including it

// indexOf() gives the index of the first element found, if elemnt not present returns -1
console.log(animals.indexOf("ant"));// 0
console.log(animals.indexOf("giraffe")); //-1

// push(), adds the specified elements to the end of the array
console.log(animals);
animals.push("cows");
console.log(animals);

//splice method changes the content of an array by removing or replacing existing elements and/or adding new
// elements in place

