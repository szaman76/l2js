//figuring out what something is

var a = 3;
console.log(typeof a); //number

var b = "Hello";
console.log(typeof b); //string

var c = {};
console.log(typeof c); //object

var d = [];
console.log(typeof d); //object??
console.log(Object.prototype.toString.call(d)); //[object Array]

function Person(name) {
    this.name = name;
}
var e = new Person("Michal");
console.log(typeof e); //object
console.log(e instanceof Person); //true

console.log(typeof undefined);//undefined
console.log(typeof null); // object <- its a bug

var z = function() {};
console.log(typeof z); //function
