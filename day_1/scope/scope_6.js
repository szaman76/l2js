{
    let j;
    for(j = 0; j<10; j++){
        let i = j; // re-bound for each iteration(i++)
        console.log(i); // 0 1 2 3 4 5 6 7 8 9
    }
} 

{
    var foo = true, baz = 10;
    
    if(foo) {
        var bar = 3;

        if(baz > bar) {
            console.log(baz); // 10
        }
    }
}
{
    var foo = true, baz = 10;
    
    if(foo) {
        var bar = 3;
    }
        if(baz > bar) {
            console.log(baz); // 10
        
    }
}
{
    var foo = true, baz = 10;
    if(foo){
        let bar = 3;

        if(baz>bar){
            console.log(baz); // 10
        }
    }
}