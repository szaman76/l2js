// One of the most common frustrations that "this" binding creates is when an "implicitly bound" function loses
// that binding, which usually means it falls back to the "default binding" or either the global object or "undefined"
// depending on "strict mode"

//Consider:

function foo() {
    console.log(this.a)
}

var obj = {
    a: 2,
    foo: foo
};
var bar = obj.foo; // function reference
// Even though bar appears to be a reference to obj.foo, in fact, it's really just another reference to foo itself.
// Moreover, the call-site is what matters, and the call-site is bar(), which is a plain, un-decorated call and thus
// the "default binding" applies


var a = "oops, global"; // "a" also property on global object

bar(); // undefined as said above. If not "strict mode" then it would be "oops, global"
       // "oops, global" if we ommit var declaration on "a"
