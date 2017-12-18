//function constructors, 'new' and the history of JS

//function constructor: A normal function that is used to construct objects.
//The "this" variable points a new empty object, and that object is returned from the function automatically.

function Person() {   // a function constructor = function made to create an object
    console.log(this); // Person {}
    this.firstName = "Michal";
    this.lastName = "Szymanski";
    console.log("this function is invoked.");
}

var michal = new Person();
console.log("------------------");
console.log(michal); // Person {firstName: "Michal", lastName: "Szymanski" }

function osoba(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;
}
console.log("----------------------");
var mihu = new osoba("Michal", "szymanski"); // osoba {imie: "Michal", nazwisko: "szymanski" }
console.log(mihu);
console.log("----------------");
var bono = new osoba("bono","pies");
console.log(bono); // osoba {imie: "bono", nazwisko: "pies" }

// new is actually an operator// empty object is created var a = {};
//                           //   and then invokes the function