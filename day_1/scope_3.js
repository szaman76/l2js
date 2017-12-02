setTimeout( function /*anonymous function expression */(){
    console.log("i waited 1 second");
},1000);

setTimeout( function timeoutHandler(){ // <- named function expression
    console.log("i also have waited 1 second");
},1000);
