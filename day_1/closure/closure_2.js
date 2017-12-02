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