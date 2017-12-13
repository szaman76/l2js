function foo() {
    var arr = [];

    for(var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }
    return arr;
}
var fs = foo();

fs[0](); //3
fs[1]();//3
fs[2]()//3

// use let or IIFE to log  //1 //2 //3