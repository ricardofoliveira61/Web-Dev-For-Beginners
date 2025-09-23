/*
  Functions are blocks of code that can be executed on demand. Its perfect for 
  scneraios where you need to perform the same task multiple times.
  This allows to recycle code and centralize all the logic in one place.
  There two important concets in functions: Definition and invoking
  Definition is when you declare the function and its internal logic, while 
  invoking is when you call the function to execute.
*/
//Example
// declaring the function
function displayGreeting() {
  console.log("Hello, world!");
}
// invoking the function
displayGreeting();
// methods is a special type of function that are defined inside a class
// Funtions should always be named using camelCasing
//
// passing information to a function is done through passin parameters to a function.

function displayGreeting(name) {
  console.log(`Hello, ${name}`)
}

displayGreeting("Ricardo")

// default values for a parameter can be set by assining a parameter to a value
function displayGreeting(name, salutation = "Hello") {
  console.log(`${salutation}, ${name}`);
}
// this way we can decide if we want to set a value for salutation
displayGreeting("Ricardo")
displayGreeting("Ricardo", "Olá")

// Return values
// The return keyword is used to exit the function before it reaching to the closing bracket
// additionaly it can return any of the primital data types that can be used elsewhere.

function greetingsMessage(name) {
  const message = `Hello, ${name}`;

  return message
}

// greetingsMessage("Ricardo") this function won't print the message to the console since its using
// return, to see the value we need to use console.log(greetingsMessage("ricardo")) or first 
// declare and assign a variable with the return result of the function and then use console.log(variableName)
console.log(greetingsMessage("Victor"));

// anonymous functions are like lambda functions in python, they do not have a name and can only be used once 
setTimeout(function () {
  console.log("This is an anonymous function");
}, 300)

// arrow functions are the same as functions but do not need the function keyword

setTimeout(() => { console.log("hello, world") }, 300) // 

// End of lesson 5

