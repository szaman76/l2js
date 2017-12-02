function foo() {
    function bar(a) {
    /*  use var or j = 3  */  i = 3; // changing the "i" in for loop 
        console.log(a +i)
    }

    for(var i = 0; i<10;i++){
        bar(i*2); // ifinite loop mehh
    }
}
foo();