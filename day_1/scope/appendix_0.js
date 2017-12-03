// Dynamic Scope

//Static Scope
function foo() {
        console.log(a); // 2 // output 3 when in dynamic scope
}
function bar() {
    var a = 3;
    foo();
}
var a = 2;
bar();
