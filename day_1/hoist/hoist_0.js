{
    a = 2;
    var a;
    console.log(a); //2 because it goes like --> var a --> a = 2 --> log
}
{
    console.log(b); // undefined  bc it goes like --> var b --> log --> b = 1;
    var b = 1;
}
{
    var c = 3;
    console.log(c); // 3

}
{
    foo()

    function foo() {
        console.log(a); // undefined

        var a = 2;
    };
}
/*
{
    foo();//typeError
    bar();//RefferenceError
    var foo = function bar()
    {
        console.log("penguin");
    };
}
*/

