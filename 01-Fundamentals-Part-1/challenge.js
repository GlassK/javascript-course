// #1
//Test data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
//Test data 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);

// #2
//Test data
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//소수점 첫째 자리까지 (반올림) .toFixed(자릿수)
const BMIMark = (massMark / heightMark ** 2).toFixed(1);
const BMIJohn = (massJohn / heightJohn ** 2).toFixed(1);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// #3
//Test data 1
const dolphinsAvg = (96 + 108 + 89) / 3;
const koalasAvg = (88 + 91 + 110) / 3;
//Test data 2
const dolphinsAvg = (97 + 112 + 101) / 3;
const koalasAvg = (109 + 95 + 123) / 3;
//Test data 3
const dolphinsAvg = (97 + 112 + 101) / 3;
const koalasAvg = (109 + 95 + 106) / 3;

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log("The winner is Dolphins!");
} else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
  console.log("The winner is Koalas!");
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100) {
  console.log("Draw!");
} else {
  console.log("No team wins the tropy");
}

// #4
// Test data 1
const bill = 275;
// Test data 2
const bill = 40;
// Test data 3
const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
