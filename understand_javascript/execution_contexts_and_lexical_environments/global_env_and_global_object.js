//global context/scope
var sayHello = "Hello ";

function person(){   // execution context

    var first = "Michal",
      last = "Szymanski";

    function firstName() { //execution context
        return first;
    }

    function lastName() { //execution context
        return last;
    }

    console.log(sayHello + firstName()+ " " + lastName());
}
person();