// Basic input, output node.js exercise

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input file: ', (inputFile) => {
    rl.question('Output file: ', (outputFile) => {
        rl.close();

        fs.readFile(inputFile, 'utf8', (inputErr, inputData) => {
            if (inputErr) {
                console.error(inputErr);
                return;
            }
            else {
                fs.writeFile(outputFile, inputData.toUpperCase(), (outputErr) => {
                    if (outputErr) {
                        console.error(outputErr);
                    }
                    else {
                    console.log(`Wrote the file ${outputFile}`);
                    }
                });
            }
        });              
    }); 
});



