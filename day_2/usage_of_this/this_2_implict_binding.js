// does the call-site have a context object?
//also reffered to as an owning or containing object

function baz() {
    console.log(this.a);
}
// because "obj" is the "this" for the "foo()" call, this.a = obj.a
var obj = {
//  key:value,
    a: 2,
    foo: baz//baz is the function above
};

obj.foo(); // 2

// notice! the manner(sposób) in which "foo()" is declared and then added as a refference property onto "obj"
// whether "foo()" is initially delcared on obj, or is added as a reference latter(as this example shows)
// in neither case is the FUNCTIONS really "owned" or "contained" by the "obj" object.

// However, the call-site /uses/ the "obj" context to REFERENCE the function, so you could say that the "obj" object
// "owns" or "contains" the FUNCTION REFERENCE at the time the function is called.


