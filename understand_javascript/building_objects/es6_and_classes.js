// new concept of creating objects and set the prototype

// Classes:
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        return "hi " + this.firstName;
    }
}

var michal = new Person("michal","szymanski");
console.log(michal.greet()); // hi michal

// syntactic sugar:
//  A different way to Type something that doesnt change how it works under the hood