//"use strict";

var person;

persom = {};
console.log(persom);  
console.log(person);

//persom is not defined in strict mode

function logNewPerson(){
    //'use strict';
    var person2;
    persom2 = {};
    console.log(persom2);
    // uses strict only in this function
}
logNewPerson();