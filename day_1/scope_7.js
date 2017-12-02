var foo = true;

if(foo) {
    var a = 2;
    const b = 3; // block-scoped to the containing "if- wiersz 3-ci"

    a = 3; // its ok
    b = 4; // error
}

console.log(a); // 3
console.log(b); // RefferenceError