function foo(str, a) {
    eval(str); // changes str to new value 
    console.log(a,b);   // a = a && b = str from eval
}

var b = 2;


foo("var b = 3", 1);  // 1 3

// This does not work in strict mode 


function boo(obj) {
    with(obj) {
        a = 2;
    }
}

var o1 = {
    a:3
};

var o2 = {
    b:3
};

boo(o1);
console.log(o1.a); // 2

boo(o2);
console.log(o2.a); // undefined
console.log(a);  // 2 - leaked global