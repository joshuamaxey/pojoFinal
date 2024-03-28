/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

function valuesInObject(obj) {
  let values = []; //first, initialize an empty array to hold the values within the object.

  for (let key in obj) { //next, initialize a for...in loop that will iterate through each key in an object. The for...in loop iterates through the keys in the object instead of by indices, since objects are not ordered and are organized by key/value pairs instead of by indices.
    values.push(obj[key]); //use push method to push the value located at the current key of the object to the values array.
  }
  return values;
}

function valuesInObject(obj) {
  return Object.values(obj);
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
