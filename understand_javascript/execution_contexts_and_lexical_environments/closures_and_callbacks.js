function sayHiLater() {
    var greeting = "Hi!";

    setTimeout(function(){ //callback function
        console.log(greeting);
    },3000);
}

sayHiLater(); //logs "Hi!" after 3000ms  (greeting is in closure)

/*
CALLBACK FUNCTION:
    A function you give to another function, to be run when the other function is finished
    So the function you call(invoke) "calls back" by calling the functin you gave it when it finishes
*/

function tellMeWhenDone(callback) {
    var a = 1000; // some work
    var b = 2000; // some work

    callback() //the "callback", it runs the function I give it!
}

tellMeWhenDone(function() {
    console.log("I am done!");
});

tellMeWhenDone(function() {
    console.log("All done...");
});
tellMeWhenDone();