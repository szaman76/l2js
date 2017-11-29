const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 200;

var bank_balance = 302.13;
var amount = 0;


//calulate tax
function tax(amt){
    return amt * TAX_RATE;
}

function finalAmount(amt) {
    amt = amt + (amt * TAX_RATE); // new amt with the tax
    return amt;  // return new amt
}

// adds $ to amount and round to two decimalss
function newFormat() {
    return "$" + amount.toFixed(2);
}

while(amount<bank_balance) {  //buys new phone
        amount += PHONE_PRICE;
        // buy accessory?
        if(bank_balance>SPENDING_THRESHOLD){
            amount += ACCESSORY_PRICE;
        }

}

amount += tax(amount); // pay the gov;

console.log(
    "Your purchase is: " + newFormat(amount)
);


//can we afford it?
if(amount > bank_balance){
    console.log(
        "You can't afford it Michał."
    );
}else{
    console.log(
        "Here you are :D"
    );
}
