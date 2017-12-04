function foo(num) {
    console.log("foo: " + num);

    // keep track of how many times "foo" is called
    //Note: "this" IS actually "foo" now, based on
    //how "foo" is called (see below)
    this.count++;
}

foo.count = 0;

var i;

for(i=0; i<10;i++) {
    if(i>5){
        //using "call(..), we ensure the "this"
        //poits at the function object ("foo") itself
        foo.call(foo,i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

//how many times was "foo" called
console.log(foo.count); //4 