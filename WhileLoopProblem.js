// 1 - PowerOf2While
 let n = parseInt(process.argv[2]);
 let i = 0;
 let value = 1;
 while (i <= n && value <= 256) {
     console.log("2^" + i + " = " + value);
     value *= 2;
     i++;
 }
 
 // 2 - MagicNumber
 let low = 1;
 let high = 100;
 const readline = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout
 });
 function guessNumber() {
     if (low === high) {
         console.log("Magic Number is:", low);
         readline.close();
         return;
     }
     let mid = Math.floor((low + high) / 2);
     readline.question(`Is your number less than or equal to ${mid}? (yes/no): `, (answer) => {
         if (answer.toLowerCase() === "yes") {
             high = mid;
         } else {
             low = mid + 1;
         }
         guessNumber();
     });
 }
 guessNumber();
 
 // 3 - CoinFlipWhile
 let heads = 0;
 let tails = 0;
 while (heads < 11 && tails < 11) {
     let flip = Math.floor(Math.random() * 2);
     if (flip === 0) {
         heads++;
     } else {
         tails++;
     }
 }
 console.log("Heads:", heads, "Tails:", tails);
 
 // 4 - Gambler
 let money = 100;
 let bets = 0;
 let wins = 0;
 while (money > 0 && money < 200) {
     bets++;
     if (Math.floor(Math.random() * 2) === 1) {
         money++;
         wins++;
     } else {
         money--;
     }
 }
 console.log("Total Bets:", bets);
 console.log("Wins:", wins);
 console.log("Money:", money);