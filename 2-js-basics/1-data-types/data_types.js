// declare a variable, {} creates a block scope. let and const are block scope available meaning they you have any value in another scope
// therefore the same variable name can be declared on different scopes without giving errors
// let lets the declare variable change
{
  let myVariable
  myVariable = 123 // assigning a variable to a value
  console.log("Declare and assigning on separete lines:", myVariable)
}

let myVariable = 123 //declaring and assigning a variable
console.log("Declare and assign at the same time", myVariable)
myVariable = 321;
console.log("Changing the variable value", myVariable)

// const. Const must have a value meaning it needs to be declared and assigned in the same line

const myVariableConst = 123;
//const protects the reference of the variable, this means that once the variable is defined and assigned it can't be reassigned
//myVariableConst = 321 //expected to give an error. TypeError: Assignment to constant variable
// However if I assigned a object to a const variable, I can change it's value
const obj = { "name": "Bob" }
console.log("Cont Obj before change:", obj)
obj.name = "Alejandra"
console.log("Cont Obj after change:", obj)
// the object value can be proteced with Object.freeze()
const obj_2 = Object.freeze({ "name": "Bob" })
console.log("Cont Obj_2 before change:", obj_2)
obj_2.name = "Alejandra"
console.log("Cont Obj_2 after change:", obj_2) // the value changed however no error is throw

// DATA TYPES: They are 7 primitive data types
// NUMBERS = JS does not differenciate between ints and floats
console.log("*******************************")
console.log("NUMBERSSSS")
const numberInt = 10
console.log(`TypeOf ${numberInt}: ${typeof numberInt}`)
console.log(`TypeOf ${-10}: ${typeof -10}`)
console.log(`TypeOf ${10.20}: ${typeof 10.20}`)
// Numbers can also be used to perform arithmetic operations
console.log("SUM:", 1 + 2);
console.log("SUBTRACTION:", 1 - 2);
console.log("MULTIPLICATION:", 2 * 5);
console.log("DIVISION:", 4 / 2);
console.log("REMAINDER:", 3 % 2);

// STRINGS: Strings are set of characters contained inside quotes
console.log("*******************************")
console.log("STRINGS")
const myString = "This is a string"
console.log(myString)
// Formating Strings
// '+' is used to concatenate Strings
const myString1 = "Hello";
const myString2 = "World";
console.log(myString1 + " " + myString2);
// template literals is another way of formating strings, used to put inside a placeholder(${}), anything that is not plain text can be put inside the place holder including strings
console.log(`${myString1} ${myString2}!`)

//BOOLEANS can only be two values: true or false
// in js variable can be considered truthy or falsy with truthy variables returning true and falsy returning false
// js has suprising ways of handling datatypes for example
console.log(1 == 1);//true
console.log(1 == "1");//true
console.log(1 === "1"); //false
console.log(1 > 2); //false
console.log(2 >= 2); //true

// end of lesson 4
