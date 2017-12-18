//Reflection:
//          An object can look at itself, listing and changing its properites and methods

var person = {
    firstName: "default",
    lastName: "default",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

var michal = {
    firstName: "Michal",
    lastName: "Szymanski"
}

michal.__proto__ = person;

//Reflection  for -> in // Kind of like looking at the length of an array and looping across all ot its items
//    (member) (object)
for(var prop in michal) {
    console.log(prop + ": " + michal[prop]);
}
// firstName: Michal, lastName: Szymanski, getFullName: function () {return this.firstName + " " + this.lastName;}
console.log("--------------")


for(var prop in michal) {
    if(michal.hasOwnProperty(prop)){
        console.log(prop + ": " + michal[prop]);
    }
}
// firstName: Michal, lastName: Szymanski

var ciukes = {
    address: "111 Main St.",
    getFormalFullName: function() {
        return this.lastName + ", " + this.firstName;
    }
}

var jim = {
    getFirstName: function() {
        return firstName;
    }
}

        //use with underscore.js
//_.extend(michal, ciukes, jim); //combines these objects. Takes all properties and methods and adds them directly to michal

//console.log(michal);











