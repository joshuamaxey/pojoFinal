/***********************************************************************
Write a function `setKeyInObject(obj, string, value)` that takes in three 
parameters. The first parameter is an object, the second parameter will be a 
string and the third parameter will be a value. Your job is to return the object
adding the second parameter as a key using the third parameter as its value.

Examples:

let obj = {}
setKeyInObject(obj, "apple", "yum"); // => {apple: "yum"}

let obj1 = {str: "hello"}
setKeyInObject(obj1, "num", 3); // => {str: "hello", num: 3}
***********************************************************************/

function setKeyInObject(obj, string, value) {
  obj[string] = value; // Add a new key-value pair to the object using the provided string as key and value as value                      
  return obj;          // Return the modified object
}

let obj = {};          //Create an empty object
console.log(setKeyInObject(obj,"apple", "yum")); // Call the function setKeyInObject with the empty object, "apple", and "yum" as parameters and log the result

let obj1 = {str: "hello"};  //Create an object with a key "str" and value "hello"
console.log(setKeyInObject(obj1,"num",3));  // Call the function with the object obj1, "num" and 3 as paramenters
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = setKeyInObject;
