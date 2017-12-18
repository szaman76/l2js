// Object = everything that is NOT a primitive (number, string, boolean, etc.)
// so Functions, arrays, basic objects- They all have a prototype
// EXCEPT FOR ONE THING        THE BASE OBJECT IN JAVASCRIPT

var a = {};
var b = function(){};
var c = [];
   
console.log(a.__proto__); // Object {} <-- The base object in JavaScript
console.log(b.__proto__); // [Function] <-- prototype of all functions  //in chrome// function Empty() {}
console.log(c.__proto__); // [] <-- empty array
                        /*                         ^                                        */
                        /*                         |                                        */
                        /*        They all have methods we can use:                         */
                        /*          .length, .push, .reverse, .push, etc.                   */
console.log(a.__proto__.__proto__)// null
console.log(b.__proto__.__proto__)// Object {}
console.log(c.__proto__.__proto__)// Object {}