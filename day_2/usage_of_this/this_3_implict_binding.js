function bar() {
    console.log(this.a);
}

var obj2 = {
    a: 42,
    foo: bar
};

var obj1 = {
    a:2,
    obj2: obj2
};

obj1.obj2.foo(); // 42

// only top/last level of an object property reference chain matter to the call-site