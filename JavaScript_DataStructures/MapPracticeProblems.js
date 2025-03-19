// Problem 1: Simulating a die roll and tracking occurrences
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

let dieRolls = {};
let maxRolls = 10;
let maxReached = false;

// Initialize dictionary
for (let i = 1; i <= 6; i++) {
    dieRolls[i] = 0;
}

// Roll the die until any number reaches 10 times
while (!maxReached) {
    let roll = rollDie();
    dieRolls[roll]++;
    if (dieRolls[roll] === maxRolls) {
        maxReached = true;
    }
}

console.log("Die Roll Results:", dieRolls);

// Finding max and min rolled numbers
let maxNum = Object.keys(dieRolls).reduce((a, b) => dieRolls[a] > dieRolls[b] ? a : b);
let minNum = Object.keys(dieRolls).reduce((a, b) => dieRolls[a] < dieRolls[b] ? a : b);

console.log("Number that reached maximum times:", maxNum);
console.log("Number that was rolled the least times:", minNum);

// Problem 2: Generating birth months for 50 individuals
function generateBirthMonths() {
    let birthMonths = {};
    for (let i = 1; i <= 12; i++) {
        birthMonths[i] = [];
    }
    
    for (let i = 1; i <= 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1;
        birthMonths[month].push(i);
    }
    return birthMonths;
}

let birthMonthMap = generateBirthMonths();
console.log("Individuals grouped by birth month:", birthMonthMap);