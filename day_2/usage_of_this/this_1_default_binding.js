//default catch-all

function foo() {

    console.log(this.a);
}

a = 2;

foo(); // 2

function bar() {
    console.log(this.b);
}

var b = 1;

bar();// undefined because "use strict";
//TypeError: "this" is "undefined"
