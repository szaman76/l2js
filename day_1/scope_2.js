var a = 2;

(function iife(){

    var a = 3;
    console.log(a); // console 3

})();

console.log(a); // console 2

