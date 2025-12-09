//Define input file path
const inputFile = 'input.txt';
const fs = require('fs');

//Create function to loop through the IDs in the input file and sum the invalid ones
const findInvalidIDs = (input) => {
    //Initialize array to hold invalid IDs and sum variable
    let invalidIDs = [];
    let invalidSum = 0;
    //Split input file into an array of the ranges
    const ranges = input.split(",");
    //Loop through each range to find invalid IDs
    for (let i = 0; i < ranges.length; i++) {
        let rangeStart = ranges[i].split("-")[0];
        let rangeEnd = ranges[i].split("-")[1];
        //convert to numbers
        rangeStart = Number(rangeStart);
        rangeEnd = Number(rangeEnd);
        //Loop through each ID in the range
        for (let id = rangeStart; id <= rangeEnd; id++) {
            idStr = id.toString();
            //Check if string is an even number of characters
            if (idStr.length % 2 === 0) {
            //If yes, split in half and compare first half to second half
                let halfLength = idStr.length / 2;
                let firstHalf = idStr.slice(0, halfLength);
                let secondHalf = idStr.slice(halfLength);
            //If first half matches second half, add the value to array of invalid IDs
                if (firstHalf === secondHalf) {
                    invalidIDs.push(id);
                    invalidSum += id;
                };
            };
        };
    };

    //Return the sum of invalid IDs
    return invalidSum;
};

//Read in the file and execute the findInvalidIDs function
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Sum of all invalid IDs: ${findInvalidIDs(data)}`);
});