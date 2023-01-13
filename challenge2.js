//1. Given an array of strings, return only the words that begin with the letter "t".
//The goal is to produce a line of stings in the console that all begin with a lower case t.

// to accomplish this task I would build and array, and a for statement i would set up my for statement so it 
//loops through my array checking if the strings meet the requirment set by my if statement. if i wanted to 
//include upper case I could always use a && || with in the if statement

var animals = ["snakes","dog","slug","turtle","rabbit","bird", "tapir", "Tarantula"]

for (var i = 0; i < animals.length; i++) {
 if (animals[i].startsWith("t"))
  console.log(animals[i]);
}



    