function foo(num) {
    console.log("foo: " + num);

    //keep track of how many times 'foo' is called
    this.count++;
    // too literal
}

foo.count = 0;

var i;

for(i = 0;i<10;i++){
    if(i>5) {
        foo(i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

//how many times was "foo" called?
console.log(foo.count); // 0 --WTF?
console.log(count); // global.count variable -- NaN