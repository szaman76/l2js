function foo() {
    console.log(this.a,this.b);
}

var obj = {
    a: 2,
    b: 4
};

foo.apply(obj); //2 4
foo.call(obj);// 2 4