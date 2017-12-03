function CoolModule(something,another) {

    function doSomething(){
        console.log(something);
    }

    function doAnother() {
        console.log(another);
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}

var foo = CoolModule("cool",[1,2,3]);

foo.doSomething(); // "cool"
foo.doAnother(); // [1,2,3]