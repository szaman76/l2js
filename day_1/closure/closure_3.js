for(let i = 1; i<=5;i++) {
    setTimeout( function timer(){
        console.log(i);
    },i*1000);
}
//let = says that the variable "i" will be declared not just once for the loop, BUT EACH ITERATION.
// and it will helpfully be initialized at each subsquent(kolejny) iteration with the value from the end of the
// previous iteration.

// Block scoping and closure working at the same time