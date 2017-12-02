foo(); // 1

var foo;

function foo() {
    console.log(1);
}

foo = function() {
    console.log(2);
}
/*read by engine as:

function foo() {
    console.log(1);
}

foo(); //1

foo = function() {
    console.log(2);
};

*/