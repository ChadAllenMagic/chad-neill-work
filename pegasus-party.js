let greeting =
  "Pretty Pegasus wants to go to the Pantheon to party with the gods. ";
console.log(greeting);

let die1 = Math.ceil(6 * Math.random());
console.log(die1);
let die2 = Math.ceil(6 * Math.random());
if (die1 === 1) {
  console.log(die2);
}

let die3 = Math.ceil(6 * Math.random());
if (die2 === 2) {
  console.log(die3);
}
let greeting2 = "Party on Pegasus!";
if (die3 === 3) {
  console.log(greeting2);
}
