//Define input file path and initial variables
const inputFile = 'input.txt';
const fs = require('fs');

let joltageRatings = [];
let totalJoltage = 0;

//Create function to determine highest joltage output
const findHighestJoltage = (input) => {
    //Split input into an array of the different battery banks
    const banks = input.split("\n");
    //Loop through each bank
    for (let i = 0; i < banks.length; i++) {
        //Convert bank string into array of battery power levels
        let batteries = banks[i].split("").map(Number);
        //Set number of batteries to turn on
        const numOfBatteries = 12;

        //first pass: loop through (batteries.length - n - 1) to find highest value
        //each subsequent pass: start loop from index of last highest value + 1 to batteries.length - n
        //repeat until n highest values have been found
        

        /*
        //Identify the battery with the highest power level from the first battery to the second to last battery
        //This is the firstBattery
        for (let j = 0; j < batteries.length - 1; j++) {
            if (batteries[j] > firstBattery) {
                firstBattery = batteries[j];
                firstBatteryIndex = j;
            };
        };
        //Identify the battery with the highest power level from the battery after the firstBattery to the last battery
        //This is the secondBattery
        for (let j = firstBatteryIndex + 1; j < batteries.length; j++) {
            if (batteries[j] > secondBattery) {
                secondBattery = batteries[j];
            };
        };

        //Combine digits from two highest batteries to form joltage rating
        const bankJoltage = firstBattery * 10 + secondBattery;

        //Add the highest joltage from this bank to the array
        joltageRatings.push(bankJoltage);
        //Add to total joltage
        totalJoltage += bankJoltage;
        */
    };

    return totalJoltage;
};

//Read in the file and execute the findHighestJoltage function
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(`Highest Joltage: ${findHighestJoltage(data)}`);
});
