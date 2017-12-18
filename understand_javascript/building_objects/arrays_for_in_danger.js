// Danger

Array.prototype.myCustom = "cool!";


var arr = ["michal", "bono", "dom"];

for(var prop in arr) { // danger you can iterate down to the prototype
    console.log(prop + ": " + arr[prop]);
}
//0: michal
//1: bono
//2: dom
//myCustom: cool!                                                                       
                                                                                        console.log("-----------");
for(var i = 0; i<arr.length;i++){ // this is safe
    console.log(i+ ": "+ arr[i]);
}
//0: michal
//1: bono
//2: dom