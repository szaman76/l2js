for(var i = 1; i<=5; i++) {
  (function(){
      var j = i;
    setTimeout( function timer(){
        console.log(j);
    },j*1000);
  })();
}

// must use IIFE to make more scope
// then create new var "j" and use it as a copy of "i"
// can place j as parameter in anonymous function like function(j)
/*
The use of an IIFE inside each iteration created a new scope for each iteration, which gave our timeout function
callbacks the opportunity to close over a new scope for each iteration, one which had a variable with the right 
per-iteration value in it for us to acces.

*/