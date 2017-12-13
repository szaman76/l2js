function makeGreet(lang) {
    return function(firstName,lastName) {
        if(lang === "en") {
            console.log("Hello " + firstName + " " + lastName);
        }
        if(lang === "es") {
            console.log("Hola " + firstName + " " + lastName);
        }
    }
}

var greetEng = makeGreet("en");
                                // They are different execution content
var greetEsp = makeGreet("es");
                                // so
greetEng("Michal","Szymanski"); // Hello Michal Szymanski   
greetEsp("Bono the","pies");    // Hello Bono the pies
