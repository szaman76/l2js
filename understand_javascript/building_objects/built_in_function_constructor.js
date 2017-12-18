// Objects that contain primitives and give them extra abilities.

var a = new Number(3.1415);
console.log(a); //[Number: 3]
console.log(a.toFixed(2))// 3.14

var b = new String("Michal");
console.log(b); //[String: "Michal"]
console.log(b.length); //6

var c = new Date("3/1/2016");
console.log(c); // 2015-02-29T23:00:00.000Z

String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log("John".isLengthGreaterThan(3)); // true

Number.prototype.isPositive = function() {
    return this > 0;
}

var d = 4;
console.log(d.isPositive()); // true