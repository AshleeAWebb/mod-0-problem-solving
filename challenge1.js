//1. Given an array of strings, return only the strings that have exactly 4 characters.

//the overall goal is to have results show in the console that are words or "strings" with exactly 4 characters.
//step one would be to create an array and ensure that it contains 4 letter strings
//next would be to build a for statement that would loop through the array and an if statement that would inform the loop 
//of what it is looking for ie 4 letter strings
//within the for statement I want to have the index start at 0 to ensure we are checking the entire array, 
//I would also like to have word length to ensure that it will funtion if additonal items are added 
//and would want it to climb ++ so once again it would read the entire array

var food = ["apples", "banana", "beet", "kiwi", "beef", "turkey"]

for (var i = 0; i < food.length;i++){
    if (food[i].length === 4) {
    console.log(food[i]);
    }
    }