// 1 - SingleDigit
 let singleDigit = Math.floor(Math.random() * 10);
 console.log("Single Digit:", singleDigit);
 
 // 2 - DiceNumber
 let diceNumber = Math.floor(Math.random() * 6) + 1;
 console.log("Dice Number:", diceNumber);
 
 // 3 - SumOfDice
 let dice1 = Math.floor(Math.random() * 6) + 1;
 let dice2 = Math.floor(Math.random() * 6) + 1;
 let sumDice = dice1 + dice2;
 console.log("Sum of Two Dice Numbers:", sumDice);
 
 // 4 - SumAvgTwoDigit
 let total = 0;
 for (let i = 0; i < 5; i++) {
     let randomTwoDigit = Math.floor(Math.random() * 90) + 10;
     total += randomTwoDigit;
 }
 let average = total / 5;
 console.log("Sum of 5 Two-Digit Numbers:", total);
 console.log("Average:", average);
 
 // 5a - InchesToFeet
 let inches = 42;
 let feet = inches / 12;
 console.log("42 inches in feet:", feet);
 
 // 5b - PlotAreaMeters
 let lengthFeet = 60;
 let widthFeet = 40;
 let lengthMeter = lengthFeet * 0.3048;
 let widthMeter = widthFeet * 0.3048;
 let areaMeters = lengthMeter * widthMeter;
 console.log("Area of Plot in meters:", areaMeters);
 
 // 5c - TotalAreaAcres
 let areaOnePlotMeters = areaMeters;
 let totalAreaMeters = areaOnePlotMeters * 25;
 let totalAreaAcres = totalAreaMeters / 4046.86;
 console.log("Total area of 25 plots in acres:", totalAreaAcres);