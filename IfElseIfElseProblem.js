// 1 - DigitToWord
 let digit = parseInt(process.argv[2]);
 if (digit == 0) {
     console.log("Zero");
 } else if (digit == 1) {
     console.log("One");
 } else if (digit == 2) {
     console.log("Two");
 } else if (digit == 3) {
     console.log("Three");
 } else if (digit == 4) {
     console.log("Four");
 } else if (digit == 5) {
     console.log("Five");
 } else if (digit == 6) {
     console.log("Six");
 } else if (digit == 7) {
     console.log("Seven");
 } else if (digit == 8) {
     console.log("Eight");
 } else if (digit == 9) {
     console.log("Nine");
 } else {
     console.log("Invalid Digit");
 }
 
 // 2 - NumberToWeekday
 let num = parseInt(process.argv[2]);
 if (num == 1) {
     console.log("Sunday");
 } else if (num == 2) {
     console.log("Monday");
 } else if (num == 3) {
     console.log("Tuesday");
 } else if (num == 4) {
     console.log("Wednesday");
 } else if (num == 5) {
     console.log("Thursday");
 } else if (num == 6) {
     console.log("Friday");
 } else if (num == 7) {
     console.log("Saturday");
 } else {
     console.log("Invalid Number");
 }
 
 // 3 - NumberToPlace
 let place = parseInt(process.argv[2]);
 if (place == 1) {
     console.log("Unit");
 } else if (place == 10) {
     console.log("Ten");
 } else if (place == 100) {
     console.log("Hundred");
 } else if (place == 1000) {
     console.log("Thousand");
 } else if (place == 10000) {
     console.log("Ten Thousand");
 } else {
     console.log("Invalid Input");
 }
 
 // 4 - MaxMinArithmetic
 let a = parseInt(process.argv[2]);
 let b = parseInt(process.argv[3]);
 let c = parseInt(process.argv[4]);
 
 let op1 = a + b * c;
 let op2 = a % b + c;
 let op3 = c + a / b;
 let op4 = a * b + c;
 
 let max = op1;
 if (op2 > max) max = op2;
 if (op3 > max) max = op3;
 if (op4 > max) max = op4;
 
 let min = op1;
 if (op2 < min) min = op2;
 if (op3 < min) min = op3;
 if (op4 < min) min = op4;
 
 console.log("Results:", op1, op2, op3, op4);
 console.log("Maximum:", max);
 console.log("Minimum:", min);