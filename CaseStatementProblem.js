// 1 - DigitToWordCase
 let digit = parseInt(process.argv[2]);
 switch (digit) {
     case 0:
         console.log("Zero");
         break;
     case 1:
         console.log("One");
         break;
     case 2:
         console.log("Two");
         break;
     case 3:
         console.log("Three");
         break;
     case 4:
         console.log("Four");
         break;
     case 5:
         console.log("Five");
         break;
     case 6:
         console.log("Six");
         break;
     case 7:
         console.log("Seven");
         break;
     case 8:
         console.log("Eight");
         break;
     case 9:
         console.log("Nine");
         break;
     default:
         console.log("Invalid Digit");
 }
 
 // 2 - NumberToWeekdayCase
 let num = parseInt(process.argv[2]);
 switch (num) {
     case 1:
         console.log("Sunday");
         break;
     case 2:
         console.log("Monday");
         break;
     case 3:
         console.log("Tuesday");
         break;
     case 4:
         console.log("Wednesday");
         break;
     case 5:
         console.log("Thursday");
         break;
     case 6:
         console.log("Friday");
         break;
     case 7:
         console.log("Saturday");
         break;
     default:
         console.log("Invalid Number");
 }
 
 // 3 - NumberToPlaceCase
 let place = parseInt(process.argv[2]);
 switch (place) {
     case 1:
         console.log("Unit");
         break;
     case 10:
         console.log("Ten");
         break;
     case 100:
         console.log("Hundred");
         break;
     case 1000:
         console.log("Thousand");
         break;
     case 10000:
         console.log("Ten Thousand");
         break;
     default:
         console.log("Invalid Input");
 }
 
 // 4 - LengthConversionCase
 let choice = parseInt(process.argv[2]);
 let value = parseFloat(process.argv[3]);
 switch (choice) {
     case 1:
         console.log("Feet to Inch:", value * 12);
         break;
     case 2:
         console.log("Feet to Meter:", value * 0.3048);
         break;
     case 3:
         console.log("Inch to Feet:", value / 12);
         break;
     case 4:
         console.log("Meter to Feet:", value / 0.3048);
         break;
     default:
         console.log("Invalid Choice");
 }