// 1 - MinMaxThreeDigit
 let min = 999;
 let max = 100;
 for (let i = 0; i < 5; i++) {
     let num = Math.floor(Math.random() * 900) + 100;
     if (num < min) {
         min = num;
     }
     if (num > max) {
         max = num;
     }
 }
 console.log("Minimum:", min);
 console.log("Maximum:", max);
 
 // 2 - DateRangeCheck
 let day = parseInt(process.argv[2]);
 let month = parseInt(process.argv[3]);
 let isValid = false;
 if ((month == 3 && day >= 20 && day <= 31) ||
     (month == 4 && day >= 1 && day <= 30) ||
     (month == 5 && day >= 1 && day <= 31) ||
     (month == 6 && day >= 1 && day <= 20)) {
     isValid = true;
 }
 console.log(isValid);
 
 // 3 - LeapYearCheck
 let year = parseInt(process.argv[2]);
 if (year >= 1000 && year <= 9999) {
     if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
         console.log("Leap Year");
     } else {
         console.log("Not a Leap Year");
     }
 } else {
     console.log("Invalid Year");
 }
 
 // 4 - CoinFlip
 let coin = Math.floor(Math.random() * 2);
 if (coin == 0) {
     console.log("Heads");
 } else {
     console.log("Tails");
 }