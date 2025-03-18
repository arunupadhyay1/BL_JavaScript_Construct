// 1 - PowerOf2
 let n = parseInt(process.argv[2]);
 for (let i = 0; i <= n; i++) {
     console.log("2^" + i + " = " + Math.pow(2, i));
 }
 
 // 2 - HarmonicNumber
 let hn = parseInt(process.argv[2]);
 let harmonic = 0;
 for (let i = 1; i <= hn; i++) {
     harmonic += 1 / i;
 }
 console.log("Harmonic Number:", harmonic);
 
 // 3 - PrimeCheck
 let num = parseInt(process.argv[2]);
 let isPrime = true;
 if (num <= 1) {
     isPrime = false;
 } else {
     for (let i = 2; i <= Math.sqrt(num); i++) {
         if (num % i == 0) {
             isPrime = false;
             break;
         }
     }
 }
 console.log(isPrime ? "Prime" : "Not Prime");
 
 // 4 - PrimeRange
 let start = parseInt(process.argv[2]);
 let end = parseInt(process.argv[3]);
 for (let num = start; num <= end; num++) {
     let prime = true;
     if (num <= 1) prime = false;
     else {
         for (let i = 2; i <= Math.sqrt(num); i++) {
             if (num % i == 0) {
                 prime = false;
                 break;
             }
         }
     }
     if (prime) console.log(num);
 }
 
 // 5 - Factorial
 let factNum = parseInt(process.argv[2]);
 let factorial = 1;
 for (let i = 1; i <= factNum; i++) {
     factorial *= i;
 }
 console.log("Factorial:", factorial);
 
 // 6 - PrimeFactors
 let N = parseInt(process.argv[2]);
 for (let i = 2; i * i <= N; i++) {
     while (N % i == 0) {
         console.log(i);
         N = N / i;
     }
 }
 if (N > 1) {
     console.log(N);
 }