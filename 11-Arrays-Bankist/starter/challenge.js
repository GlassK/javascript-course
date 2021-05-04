'use strict';

// #1
//3살 이상이면 adult, 미만이면 puppy
const checkDogs = (dogsJulia, dogsKate) => {
  dogsJulia = dogsJulia.slice(1, 3);
  // 모범답안: slice한 후 splice
  //   const dogsJuliaCorrected = dogsJulia.slice();
  //   dogsJuliaCorrected.splice(0, 1);
  //   dogsJuliaCorrected.splice(-2);
  const dogs = dogsJulia.concat(dogsKate);
  console.log(dogs);
  dogs.forEach(function (age, i, _) {
    console.log(
      age >= 3
        ? `Dog number ${i + 1} is adult, and is ${age} years old`
        : `Dog number ${i + 1} is still a puppy 🐶`
    );
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
