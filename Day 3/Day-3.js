//Define input file path and initial variables
const inputFile = 'test.txt';
const fs = require('fs');

let joltageRatings = [];
let totalJoltage = 0;

//Create function to determine highest joltage output
const findHighestJoltage = (input) => {
    //Split input into an array of the different battery banks
    const banks = input.split("\n");
    //Loop through each bank
    for (let i = 0; i < banks.length; i++) {
        //Within the bank, determine which batteries to turn on
        let firstBattery = 0;
        let secondBattery = 0;
        for (let j = 0; j < banks[i].length - 1; j++) {
            if (banks[i][j] > firstBattery) {
                firstBattery = banks[i][j];
                for (j++; j < banks[i].length; j++) {
                    if (banks[i][j] > secondBattery) {
                        secondBattery = banks[i][j];
                    };
                };
            };
        };

        //Combine digits from two highest batteries to form joltage rating
        const bankJoltage = firstBattery * 10 + secondBattery;

        //Add the highest joltage from this bank to the array
        joltageRatings.push(bankJoltage);
        //Add to total joltage
        totalJoltage += bankJoltage;
    };

    console.log(`Joltage Ratings from each bank: ${joltageRatings}`);

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
