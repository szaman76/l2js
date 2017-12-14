var person = {
    firstName: "Michal",
    lastName: "Szymanski",
    getFullName: function() {

        var fullName = this.firstName + " " + this.lastName;
        return fullName;
    }
}

var logName = function(lang1,lang2) {

    console.log("logged: " + this.getFullName());
    console.log('Arguments: ' + lang1 + " " + lang2);
    console.log("-----------------")
}

// bind() creates the copy of the funciton
var logPersonName = logName.bind(person)

logPersonName("en", "esp");

// executes the function. Where the first parameter is what /this/ refers to and rest are function parameters
logName.call(person, "en" , "pl");

//does the same thing as /call/ but it wants the array of parameters
logName.apply(person,["pl","en"]);

//IIFE with .apply method that works too
(function(lang1,lang2) {

    console.log("logged: " + this.getFullName());
    console.log('Arguments: ' + lang1 + " " + lang2);
    console.log("-----------------")
}).apply(person)



// function borrowing
var person2 = {
    firstName: "Bono",
    lastName: "Pies"    
}

console.log(person.getFullName.apply(person2)); // Bono Pies


//function currying

function multiply(a,b) {
    return a*b;
}

var multipleByTwo = multiply.bind(this,2);

/*
    It creats a function that look like this:

    function mulitpeByTwo(b) {
        var a = 2;
        return a*b;
    }
*/

console.log(multipleByTwo(3)); //6























