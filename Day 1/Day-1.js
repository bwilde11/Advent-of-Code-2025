//Initialize variables
let startingPosition = 50;
let zeroCount = 0;
const minValue = 0;
const maxValue = 99;

//Read instructions from input
const instructionsFile = 'input.txt';

//Setup counter function
const zeroCounter = (instructions) => {
    //Split instructions into an array
    instructions = instructions.split("\n");

    //Loop through each instruction
    for (let i = 0; i < instructions.length; i++) {
        let currentPosition = startingPosition;
        let direction = instructions[i][0];
        let amount = parseInt(instructions[i].slice(1), 10);

        //Handle case where amount is greater than max value + 1
        if (amount > (maxValue + 1)) {
            zeroCount += Math.floor(amount / (maxValue + 1));
            amount = amount % (maxValue + 1);
        };

        //If first character is R, then add to the current position
        if (direction === 'R') {
            currentPosition += amount;
            //Wrap around if above max value
            if (currentPosition > maxValue) {
                currentPosition = currentPosition - (maxValue + 1);
                if (currentPosition !== 0) {
                    zeroCount += 1;
                };
            };
        //If first character is L, then subtract from the current position
        } else if (direction === 'L') {
            currentPosition -= amount;
            //Wrap around if below min value
            if (currentPosition < minValue) {
                currentPosition = (maxValue + 1) + currentPosition;
                if (startingPosition !== 0) {
                    zeroCount += 1;
                };
            };
        };

        //If current position is 0, increase zero count
        if (currentPosition === 0) {
            zeroCount += 1;
        };

        //Set starting position for next iteration
        startingPosition = currentPosition;
    };

    //Return the total count of zeros
    return zeroCount;
};

//Read in the file and execute the counter function
const fs = require('fs');
fs.readFile(instructionsFile, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log(`Total times position 0 was reached: ${zeroCounter(data)}`);
});