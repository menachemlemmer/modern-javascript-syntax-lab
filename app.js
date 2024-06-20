// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const numsDoubled = nums.map((num) => {
  return num * 2;
});

console.log(numsDoubled);

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

// Your code here

const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping, secondTopping);

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: "Audi",
  model: "q5",
};

// Your code here
const { make, model } = car;
console.log(make, model);

// Your code here
const controversialPizzaToppings = [...pizzaToppings];
console.log(controversialPizzaToppings);

// Duplicate the following object and spread its values into a new variable `myCar`.

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here
const myCar = { ...car };

myCar.model = "q7";

console.log(car, myCar);

// Create an object named userProfile.
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

const propertyName = "username";

const userProfile = {
  [propertyName]: "john",
};

console.log(userProfile);
