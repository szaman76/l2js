function CoolModule() {
    var something = "cool";
    var another = [1,2,3];

    function doSomething() {
        console.log(something);
    }

    function doAnother() {
        console.log(another.join(" ! ") );
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    }; // returns an object. datas are hidden and private(vars)
}
var foo = CoolModule(); // return value is assigned to "foo". and then we can acces those property methods on the Api
                        // like foo.doSomething();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3

/* There are two "req" for the module patter to be exercised"
    1. There must be an outer enclosing function, and it must be invoked at least once(each time creates a new modue instance)
    2. The enclosing function must return back at least one inner function, so that this inner function
    has closure over private scope, and can acces and/or modify that private state.
*/