var foo = (function CoolModule(id) {
    function change() {
        // modify the pubilc API
        publicAPI.indetify = indetify2; // change obj.id to upper case
    }

    function indetify1() {
        console.log(id);  
    }

    function indetify2() {
        console.log(id.toUpperCase() ); // to upper case
    }
    
    var publicAPI  = {
        change: change,
        indetify: indetify1
    };
    
    return publicAPI
})("foo module");

foo.indetify(); // "for module"  // first time it gives us LowerCase
foo.change();                    // we change LowerCase to UpperCase
foo.indetify(); // "FOR MODULE"  // now we have UpperCase after change

/*
    By keeping an inner referene to public API object inside your module instatnce, you can modify that modole instance
    FROM THE INSIDE, including adding and removing methods, properites and changing their values.
    Na chłopski rozum: mozemy zmienic srodek funkcji change i zmieniac vary na co chcemy

*/