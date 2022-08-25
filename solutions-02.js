// ---> Practice Problem reduce() 

// Problem 01 -- From PDF
const numbers = [1, 9, 17, 22];
let sum = 0;
// for of loop 
for(const number of numbers){
  sum += number;
}
console.log(sum)
// Reduce Mathod
const reduceValue = numbers.reduce((previous, current) => previous + current, 0)

const reduceValue2 = numbers.reduce((previous, current) => {
  console.log(previous,current)
  return previous + current
}, 0)

console.log(reduceValue2)
console.log(reduceValue)

// Problem 01(Optional) -- From PDF

const peoples = [
  {name: 'Meena', age: 20},
  {name: 'Rina', age: 15},
  {name: 'Suchorita', age: 22},
]

// With For of Loop
let agesSum = 0;
for(const people of peoples){
  agesSum += people.age;
}
console.log(agesSum)

//Reduce Mathod
const agesSum2 = peoples.reduce((previous, current)=> previous + current.age ,0)
console.log(agesSum2)
