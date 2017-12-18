// prototype chain 
//-----------------
var person = {
    firstName: "Default",
    lastName: "Default",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

var michal = {
    firstName: "Michal",// <<=_________________________________________________________
    lastName: "Szymanski"                                                          /*  |   */
}                                                                                  /*  |   */
                                                                                   /*  |   */
// Don't do this EVER! only for demo purpose                                       /*  |   */
                                                                                   /*  |   */ 
michal.__proto__ = person;                                                         /*  |   */                                                          
console.log(michal.getFullName()); // Michal Szymanski                             /*  |   */
console.log(michal.firstName); //Michal --> because prototype chain takes firstName(property) from first object(michal)

var bono = {
    firstName: "Bono"
}

bono.__proto__ = person;
console.log(bono.getFullName()); // Bono Default-> because it didnt find lastName(property) in bono(object)








