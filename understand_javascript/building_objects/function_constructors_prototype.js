function Person(firstName, lastName) { // when you use function constructor, it already set prototype for you
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    console.log("This function is invoked");
}
/*
    You can later update all objects created with Person(function constructor) with new properties and methods
    by creating them with prototype property. Later all functions that was created with Person can access to the new
    properties or methods with for example, dot notation.
    
    If i had created a 1000 different objects with new Person, I could give them all in one stroke, access to a new method
    later, even after they were created.

    So we should set up properties inside the function consturctor, because they are often different values.
    But methods are sitting on the prototype so we dont have 1000 methods but only 1 in prototype.
*/

Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
}

var michal = new Person("Michal", "Szymanski");
console.log(michal); // Person {firstName: "Michal", lastName: "Szymanski" } 
console.log("--------");


var bono = new Person("Bono", "Pies");
console.log(bono);
console.log("--------");

console.log(michal.getFullName()); // Michal Szymanski
