console.log("Hello Adventurer.");
let result1 = rollD6();
let result2 = rollD6();
let result3 = rollD6();
let result4 = rollD6();
const rolls = [result1, result2, result3, result4];
rolls.sort();
console.log(rolls);

rolls.shift();
console.log(rolls);
//calc total
let statRollTotal = rolls[0] + rolls[1] + rolls[2];
console.log(statRollTotal);




function rollD6() {
  let outcome = Math.ceil(6 * Math.random());
  return outcome;
}
