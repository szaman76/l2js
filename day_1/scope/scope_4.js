var foo = true;

if(foo){
    { // <-- wyraźny blok
        let bar = foo * 2; // let cant hoist 
        bar = something(bar);
        console.log(bar);
    }
}
console.log(bar);  // RefferenceError