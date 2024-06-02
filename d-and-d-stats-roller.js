console.log("Hello Adventurer.");
const allStats = [];
allStats.push(rollOneStat());
allStats.push(rollOneStat());
allStats.push(rollOneStat());
allStats.push(rollOneStat());
allStats.push(rollOneStat());
allStats.push(rollOneStat());
allStats.push(rollOneStat());
allStats.sort(compareNumbers);
let garbageNumber = allStats.shift();
console.log("discard roll", garbageNumber);

console.log("final rolls for stats", allStats);
function rollOneStat() {
  let result1 = rollD6();
  let result2 = rollD6();
  let result3 = rollD6();
  let result4 = rollD6();
  const rolls = [result1, result2, result3, result4];
  rolls.sort();

  rolls.shift();
  //console.log(rolls);
  //calc total
  let statRollTotal = rolls[0] + rolls[1] + rolls[2];
  return statRollTotal;
}

function rollD6() {
  let outcome = Math.ceil(6 * Math.random());
  return outcome;
}

function compareNumbers(a, b) {
  return a - b;
}
