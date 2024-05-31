let greeting =
  "Pretty Pegasus wants to go to the Pantheon to party with the gods. ";
console.log(greeting);

let die1 = rollD6(); 
console.log(die1);
let greeting2 = "Poor Pegasus";
let greeting3 = "Party on Pegasus!";
if (die1 > 1) {
  console.log(greeting2);
} else {
  console.log(greeting3);
}
function rollD6() {
  let outcome = Math.ceil(6 * Math.random());
              return outcome;
}
