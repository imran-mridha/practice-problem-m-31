// Practice Problem map(), filter(), find()

// Problem 01 -- From PDF

// With For Loop
const numbers = [1, 3, 5, 7, 9];
const evenNums = [];

for(const number of numbers){
  // console.log(number)
  evenNums.push(number + 1);
}

console.log(evenNums)

// With Map Mathod

const evenNums2 = numbers.map(number => number+1)

console.log(evenNums2)

// Problem 02 -- From PDF
// filter Mathod
const numbers2 = [33, 50, 79, 78, 90, 101, 30];
const divisibleByTen = numbers2.filter(num => num % 10 === 0);
console.log(divisibleByTen)

// Problem 03 -- From PDF
// find Mathod
const divisibleByTenFind = numbers2.find(num => num % 10 === 0);
console.log(divisibleByTenFind)
