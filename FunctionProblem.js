// 1 - TempConversion
 function convertTemperature(choice, value) {
     switch (choice) {
         case 1:
             if (value >= 0 && value <= 100) {
                 console.log("C to F:", (value * 9 / 5) + 32);
             } else {
                 console.log("Invalid Celsius Input");
             }
             break;
         case 2:
             if (value >= 32 && value <= 212) {
                 console.log("F to C:", (value - 32) * 5 / 9);
             } else {
                 console.log("Invalid Fahrenheit Input");
             }
             break;
         default:
             console.log("Invalid Choice");
     }
 }
 convertTemperature(parseInt(process.argv[2]), parseFloat(process.argv[3]));
 
 // 2 - PalindromeCheck
 function isPalindrome(num1, num2) {
     let rev1 = parseInt(num1.toString().split('').reverse().join(''));
     let rev2 = parseInt(num2.toString().split('').reverse().join(''));
     console.log(rev1 === num2 && rev2 === num1 ? "Palindrome" : "Not Palindrome");
 }
 isPalindrome(parseInt(process.argv[2]), parseInt(process.argv[3]));
 
 // 3 - PrimePalindrome
 function isPrime(n) {
     if (n <= 1) return false;
     for (let i = 2; i <= Math.sqrt(n); i++) {
         if (n % i === 0) return false;
     }
     return true;
 }
 
 function getPalindrome(n) {
     return parseInt(n.toString().split('').reverse().join(''));
 }
 
 let num = parseInt(process.argv[2]);
 if (isPrime(num)) {
     let palindrome = getPalindrome(num);
     console.log("Number is Prime");
     if (isPrime(palindrome)) {
         console.log("Palindrome is also Prime");
     } else {
         console.log("Palindrome is not Prime");
     }
 } else {
     console.log("Number is not Prime");
 }