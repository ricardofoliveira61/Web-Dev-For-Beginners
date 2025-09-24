let myTrueBoolean = true;
let myFalseBoolean = false;

// < less than 
// <= less than or equal to 
// > greater than
// >= greater than or equal to 
// === Strict equality compares both the type and the value
// == equality compares the value and ignore the type
// !== inequality compares if two values are different, also takes in consideration the type
// != compares if two values are different not caring about the type

// if statement
// the if statement will run code between its block if the condition is true
// if (condition){Code to run if the condition is true}
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  console.log("Getting a new laptop");
} else {
  console.log("Can't afford a new laptop, yet!");
}

// switch statement is used to preform different actions based  on different conditions
let a = 2;

switch (a) {
  case 1:
    a = "one";
    break;

  case 2:
    a = "two";
    break;

  case 3:
    a = "three";
    break;

  default:
    a = "not found";
    break;
}

console.log(`The value is ${a}`);

// Logical operators and booleans
//  && (and) return true if both sides are true
//  || (or) return true if one of the sides is true
//  ! (not) returns the oposite of a boolean expresion
//
// & bitwise and
// | bitwise or
//  be aware that && also can be used as short curcuit if it's not between two logical operations

console.log((2 === 2) && (3 === 3));
console.log(2 && 3); // this is a short circuit. If the first element if true returns the second, but if the first element is false returns the first element. See example below
console.log(false && 3); // the same logic can be used with the "or" operartor
//
//

let laptopDiscount = laptopPrice - laptopPrice * 0.2

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscount) {
  console.log("Getting a new laptop");
} else {
  console.log("Can't affoard a new laptop, yet!");
}

// ternary expresion
// condition ? <retunr this if true> : < return this if false>

let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
console.log(biggestNumber);
