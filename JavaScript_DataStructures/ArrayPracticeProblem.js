
// Problem 1: Generate 10 random 3-digit numbers and find the 2nd largest & 2nd smallest without sorting
console.log("Script is running...");

function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;
    
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
        
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
        
            secondSmallest = num;
        }
    }
    
    return { secondLargest, secondSmallest };
}

let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 900) + 100);
console.log("Generated Numbers:", numbers);
console.log(findSecondLargestAndSmallest(numbers));


// Problem 2: Sort array and find 2nd largest & 2nd smallest


console.log("Generated Numbers:", numbers);

numbers.sort((a, b) => a - b); // Sort in ascending order
console.log("Sorted Numbers:", numbers);
console.log("Second Smallest:", numbers[1], "Second Largest:", numbers[numbers.length - 2]);


// Problem 3: Prime Factorization and storing in an array
function primeFactors(n) {
    let factors = [];
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    if (n > 2) factors.push(n);
    return factors;
}

let num = 56; // Example number
console.log("Prime Factors of", num, ":", primeFactors(num));

// Problem 4: Find triplets that sum to zero
function findTriplets(arr) {
    let triplets = [];
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    triplets.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return triplets;
}

let tripletArray = [-1, 0, 1, 2, -1, -4];
console.log("Triplets that sum to zero:", findTriplets(tripletArray));

// Problem 5: Find numbers between 0-100 that have repeated digits
function findRepeatedDigits() {
    let repeatedNumbers = [];
    for (let i = 10; i <= 100; i++) {
        let strNum = i.toString();
        if (strNum[0] === strNum[1]) {
            repeatedNumbers.push(i);
        }
    }
    return repeatedNumbers;
}

console.log("Numbers with repeated digits:", findRepeatedDigits());
