//global variable
var allUserData= [];
var generalLastName = "Clinton"

//generic logStuff function that prints to console
function logStuff(userData) {
    if(typeof userData === "string") {
        console.log(userData);
    }
    else if(typeof userData === "object") {
        for(var item in userData) {
            console.log(item + ": " + userData[item]);
        }
    }
}

//A function that takes two parameters, the last one a callback function
/*
function getInput(option,callback) {
    allUserData.push(option);
        if(typeof callback === "function") {
        //callit since we have confirmed it is callable
        callback option);
    }
}
*/
function getInput(option,callback) {
    allUserData.push(option);
    //Make sure the callback is a function
    if(typeof callback === "function") {
        //callit since we have confirmed it is callable
        callback(generalLastName, option);
            //Pass the global varialble generalLastName to the callback function
    }
}

//When we call the getInput function, we pass logStuff as a parameter.
// So logStuff will be the function that will called back(or executed) inside the getInput function
getInput({name:"Michał",speciality:"JavaScript"},logStuff);
//name: Michał
//speciality: JavaScript
getInput("Bono",logStuff);
// Bono