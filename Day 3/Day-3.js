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
        //Convert bank string into array of battery power levels
        let batteries = banks[i].split("").map(Number);
        //Set number of batteries to turn on
        const numOfBatteries = 12;

        //Initialize variables for looping
        let startingIndex = 0;
        let endingIndex = batteries.length - numOfBatteries + 1;
        let highestValues = [];

        while (endingIndex < batteries.length + 1) {
            let highestValue = 0;
            let highestValueIndex = 0;

            for (let j = startingIndex; j < endingIndex; j++) {
                if (batteries[j] > highestValue) {
                    highestValue = batteries[j];
                    highestValueIndex = j;
                };
            };

            highestValues.push(highestValue);
            startingIndex = highestValueIndex + 1;
            endingIndex++;
        };        

        //Take individual numbers from highestValues array and concatenate them into a single number
        joltageRatings.push(parseInt(highestValues.join("")));
        totalJoltage += joltageRatings[i];
        
    };

    console.log(`Joltage Ratings: ${joltageRatings}`);

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
