//Values and Variables
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!');

console.log(40 + 8 + 23 - 10); //40 + 8 + 23 - 10;

console.log('Jonas');
console.log(23);

let firstname = "Matilda";
console.log(firstname);
console.log(firstname);
console.log(firstname);

let Person = 'jonas';

let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';
console.log(myFirstJob);
let job1 = 'Programmar';
let job2 = 'teacher';

let 3years = 3;

let jonas&matilda = 'JM';

let new = 27;
let function = 27;

//Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun)

console.log(typeof true);  //boolean
console.log(typeof javascriptIsFun);  //boolean
console.log(typeof 23);  //number
console.log(typeof 'Jonas');  //string

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);  //undefined
console.log(typeof year);  //undefined

year = 1991;
console.log(typeof year);  //number

console.log(typeof null);  //object

//let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;  //TypeError
const job;  //SyntaxError

var job = 'programmar';
job = 'teacher';

lastName = 'Schmedtmann'
console.log(lastName);

//Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;  //15
x += 10;  // x = x + 10 = 25
x *= 4;  // x = x * 4 = 100
x++;  // x = x + 1 = 101
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);  //>, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

//Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018); //true

console.log(25 - 10 - 5); // 10
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y); // 10 10

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

//Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);
console.log("String with \nmultiple \nlines ");
console.log(`String
multiple
line`);

//Taking Decisions: if / else Statements
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} year :)`);
}

//control structure 
if() {

} else {

}

const birthYear = 1998;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//Type Conversion and Coercion
//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // 1991 "1991"
console.log(inputYear + 18); // 199118
console.log(Number(inputYear) + 18); // 2009

console.log(Number("Jonas")); // NaN(Not A Number)
console.log(typeof NaN); // number

console.log(String(23), 23); //23(string) 23(number)

//type coercion
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("I am " + String(23) + " years old");

console.log("23" - "10" - 3); // 10
console.log("23" + "10" + 3); // 23103
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5
console.log("23" > "18"); // true

let n = "1" + 1;
n = n - 1;
console.log(n); // 10

console.log(2 + 3 + 4 + "5"); // "95"
console.log("10" - "4" - "3" - 2 + "5"); // "15"

//Truthy and Falsy Values
//5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Jonas")); //true
console.log(Boolean({})); //true
console.log(Boolean("")); //false

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!"); //실행됨
}

let height = 123;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED"); //실행됨
}

//Equality Operators: == vs. ===
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)"); //실행 안됨
if (age == 18) console.log("You just became an adult :D (loose)"); //실행됨

console.log(18 === 18); // true
console.log(18 === 19); // false

console.log("18" == 18); //true
console.log("18" === 18); //false

//const favourite = prompt("What's your favourite number?");
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite); // string

if (favourite == 23) {
  //'23' == 23
  // 23 == 23
  console.log("Cool! 23 is an amazing number!");
}

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) console.log("Why not 23?");

//Boolean Logic
const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision); //false
console.log(hasDriversLicense || hasGoodVision); //true
console.log(!hasDriversLicense); //false

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired); //true

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const day = "monday";

switch (day) {
  case "monday": //day === 'monday'
    console.log("Plan consure structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day");
}

//Statements and Expressions
// Expression
3 + 4;
1991;
true && false && !false;
//Statement
if (23 > 10) {
  const str = "23 is bigger";
}
console.log(`I'm ${2037 - 1991} years old.`);
console.log(`I'm ${2037 - 1991} years old ${if (23 > 10) {
  const str = "23 is bigger";
}}.`);
const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);

//The Conditional (Ternary) Operator
const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
