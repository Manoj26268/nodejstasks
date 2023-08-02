const express = require("express");
const fs = require("fs");


/*
    Task 1: Basic Node.js Server
    Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests. You can use any library or framework of your choice.
*/

const app = express();
app.all('*', function (req, res) {
    res.send("Hello, world!");
})
app.listen(3000, function (req, res) {
    console.log("listening on port 3000");
});


/*
    Task 2: Data Manipulation
    Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.
*/

function sumofArray(arr) {
    // using for loop
    // let sum = 0;
    // for(let i = 0; i < arr.length; i++){
    //     sum += arr[i];
    // }
    // return sum;   

    // using for of loop
    // let sum = 0;
    // for (const num of arr) {
    //     sum += num;
    // }
    // return sum;

    // using for each
    // let sum = 0;
    // arr.forEach((num) => {
    //     sum += num;
    // });
    // return sum;

    // using reduce
    return arr.reduce((acc, curr) => acc + curr, 0);


}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumofArray(array));



/*
    Task 3: Asynchronous File Handling
    Create a Node.js script that reads a text file named "data.txt" and counts the number of words in it. The script should print the total word count to the console.
*/

async function countWords(filename) {
    try {
        const data = await fs.promises.readFile(filename, 'utf8');
        const wordCount = data.split(/\s+/).length;
        console.log(`Total word count: ${wordCount}`);
    } catch (err) {
        console.error(`Error reading file: ${err.message}`);
    }
}

const filename = 'data.txt';
countWords(filename);
