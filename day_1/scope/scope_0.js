function foo(a) {
    var b = 2;

        // ...
    function bar() {
        // ...
    }
    // ...

    var c = 3;
}

bar(); // fail

console.log(a,b,c); // all 3 variables fail
