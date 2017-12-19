var person = {
    firstName: "default",
    lastName: "default",
    greet: function() {
        return "hi " + this.firstName;
    }
}

var michal = Object.create(person);

console.log(michal); // {} with person as its proto
console.log(michal.__proto__);// {firstName: "default", lastName: "default", greet: [Function:greet]}
console.log(michal.greet());// hi default


michal.firstName = "michal";
console.log(michal.greet()); // hi michal

//Polyfill:
//  code that adds a feature which the enigne may lack.