
function foo() {
    var a = 2;

    function bar() {
        console.log(a); //2
    }
    return bar;
}
var baz = foo();

baz(); // 2 - closure
