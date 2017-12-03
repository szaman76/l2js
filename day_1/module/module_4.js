// MODER MODULES  EXAMPLE
                //IIFE
var myModules = (function Manager(){
    var modules = {};

    function define(name, deps, impl) {
        for(var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    function get(name) {
        return modules[name];
    }
    
    return {
        define: define,
        get: get
    };
})();
// END OF EXAMPLE
myModules.define("bar",[],function(){
    function hello(who) {
            return "Let me introduce: " + who;
    }

    return {
        hello: hello
    };
} );

myModules.define("foo",["bar"], function(bar) {
    var hungry = "hippo";

    function awesome() {
        console.log( bar.hello(hungry).toUpperCase() );
    }
    
    return {
        awesome: awesome
    };
} );

var bar = myModules.get("bar");
var foo = myModules.get("foo");

console.log(
    bar.hello("hippo")
); // Let me introduce: hippo

foo.awesome(); // LET ME INTRODUCE: HIPPO