function greet(whatToSay) {
    return function(name) {
        console.log(whatToSay + " " + name);
    }
}

greet("HI")("Michał"); // HI Michał
var sayHi = greet("Hi");
sayHi("Bono"); // Hi Bono

/*
    It does not matter when we invoke a function.
    We do not have to worry if its outer env are still running

    Js will make sure that whatever function is running that it will have access to the
    variables that its supposed to have access to.

    That its scope is intact(nienaruszony)

*/