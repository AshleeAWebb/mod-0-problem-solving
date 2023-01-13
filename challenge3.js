//1. Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a 
//sentence using string interpolation. For example, if the destination is "New York City", 
//print something like "The next place I want to visit is New York City!" 
// This challenge wants to build a serious of statements that include places to travel in alphabetical order. 
// You would build you array, you would then sort the array and then build for statement that has initilization, 
//condition and final expression that index the whole array then build a code block with the desired sentence and the [i] so as it loops
//it will insert a different place to travel in the order that was already estblished.

var cityTravel = ["Mexico City", "London", "Paris", "New Orleans", "Dubia", "Glasgow"]
var cityTravelSorted = cityTravel.sort();
console.log(cityTravelSorted);
for (var i = 0; i < cityTravelSorted.length; i++) {
 console.log(`The next city I want to visit is ${cityTravelSorted[i]}!`);
}