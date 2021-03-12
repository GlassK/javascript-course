//Activating Strict Mode
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

const interface = "Audio";
const private = 534;
const if = 23;

//Functions
function logger() {
  console.log("My name is Jonas");
}

//calling/running/invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

//Function Declarations vs. Expressions
//Function declaration
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
//Function expression
const age2 = calcAge2(1991);
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

console.log(age1, age2);

//Arrow Functions
//regular function
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

//arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires int ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1990, "Bob"));

//Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//Reviewing Functions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired🎉`);
    return -1; // no meaning
  }
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

//Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends); //["Michael", "Steven", "Peter"]

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); //Michael
console.log(friends[2]); //Peter

console.log(friends.length); //3
console.log(friends[friends.length - 1]); //Peter

friends[2] = "Jay";
console.log(friends); ////["Michael", "Steven", "Jay"]
//friends = ["Bob", "Alice"];

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas); // ["Jonas", "Schmedtmann", 46, "teacher", Array(3)]
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years)); // NaN

const age1 = calcAge(years[0]); // 47
const age2 = calcAge(years[1]); // 70
const age3 = calcAge(years[years.length - 1]); // 19
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages); // [47, 70, 19]

//Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];
//Add elements
const newLength = friends.push("Jay");
console.log(friends); // ["Michael", "Steven", "Peter", "Jay"]
console.log(newLength); // 4
friends.unshift("John");
console.log(friends); // ["John", "Michael", "Steven", "Peter", "Jay"]
//Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped); // Peter
console.log(friends); // ["John", "Michael", "Steven"]
friends.shift(); // First
console.log(friends); //  ["Michael", "Steven"]

console.log(friends.indexOf("Steven")); // 1
console.log(friends.indexOf("Bob")); // -1

friends.push(23);
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false
console.log(friends.includes("23")); // false

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

//Introduction to Objects
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

//Dot vs. Bracket Notation
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas); // 위와 같은 결과 (알파벳 순으로 정렬)

console.log(jonas.lastName); // Schmedtmann
console.log(jonas["lastName"]); // Schmedtmann

const nameKey = "Name";
console.log(jonas["first" + nameKey]); // Jonas
console.log(jonas["last" + nameKey]); // Schmedtmann

//console.log(jonas."last" + nameKey);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose betwwen firstName, lastName, age, job, and friends"
);
console.log(interestedIn);
console.log(jonas.interestedIn); // undefined (오브젝트의 존재하지 않은 프로퍼티에 접근하려고 할 때)
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose betwwen firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@Jonasschmedtman";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

//Object Methods
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   //console.log(this); // jonas object 전체를 출력한다
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.calcAge()); // 46
//console.log(jonas["calcAge"](1991)); // 46
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
//Challenge
//"Jonas is a 46-year old teacher, and he has a/no driver's license"
console.log(jonas.getSummary());

//Iteration: The for Loop
//for loop keeps running while condition is TRUE
//rep = rep + 1
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

//Looping Arrays, Breaking and Continuing
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  //Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  //Filling types array
  types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types); // ["string", "string", "number", "string", "object", "boolean"]

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}

//Looping Backwards and Loops in Loops
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
//The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
