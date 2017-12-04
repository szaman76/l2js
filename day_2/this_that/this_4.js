// Its Scope

function foo() {
    var a = 2;
    this.bar(); // no reason to use "this" we cant use this to print "a" in bar() -- there is no bridge
}

function bar() {
    console.log(this.a);
}

foo();