//default catch-all
//1. var a = 2; is synonymous with global-object properties of the same name
//2. when foo() is called, this.a resolves to our global variable "a"
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
