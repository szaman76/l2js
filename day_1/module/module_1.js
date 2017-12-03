var foo = (function CoolModule() {
    var something = "cool";
    var another = [1,2,3];

    function doSomething() {
        console.log(something);
    }

    function doAnother() {
        console.log(another);
    }
    
    return {
        doSomething: doSomething,
        doAnother: doAnother,
        doThis: function(){console.log("hehehe")},
    };
})();

foo.doAnother(); // [1,2,3]
foo.doSomething(); // "cool"
foo.doThis(); // hehehe
