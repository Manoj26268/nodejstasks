const express = require("express");
const fs = require("fs");




const app = express();
app.all('/',function(req, res){
    res.send("Hello, world!");
})
app.listen(3000,function(req,res){
    console.log("listening on port 3000");
});



function sumofArray(arr){
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

const array=[1,2,3,4,5,6,7,8,9,10];
console.log(sumofArray(array));


async function countWords(filename) {
    try {
      const data = await fs.promises.readFile(filename, 'utf8');
      const wordCount = data.split(/\s+/).length;
      console.log(`Total word count: ${wordCount}`);
    } catch (err) {
      console.error(`Error reading file: ${err.message}`);
    }
  }
  
  // Call the async function
  const filename = 'data.txt';
  countWords(filename);