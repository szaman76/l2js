/*
GREETR

When given a first name, last name, and optional language, it generates formal and informal greetings.

Suport English and Polish.

Reusable library/framework

Easy to type "G$()" structure.

Support jQuery
*/

(function(global,$) {

        // "new" an object
        var Greetr = function(firstName, lastName, language) {
            return new Greetr.init(firstName,lastName,language);
        }

        // hidden within the scope of the IIFE and never directly accessible
        var supportedLangs = ["en", "pl"];
        
        //informal greetings
        var greetings = {
            en: "Hello",
            pl: "Czesc"
        };
        
        //formal greetings
        var formalGreetings = {
            en: "Greetings",
            pl: "Witaj"
        };

        //logger messages
        var logMessages = {
            en: "Logged in",
            pl: "Zalogowany"
        };

        //prototype hold methods (to save memory space)
        Greetr.prototype = {
            
            //"this" refers to the calling object at execution time
            fullName: function() {
                return this.firstName + " " + this.lastName;
            },

            validate: function() {
                //check that is a valid language
                //references the externally inaccessible "supportedLangs" within the closure
              if (supportedLangs.indexOf(this.language) === -1) {
                    throw "Invalid language";
                }
            },

            //retrieve messages from object by reffering to properites using [] syntax
            greeting: function() {
                return greetings[this.language] + " " + this.firstName + "!";
            },

            formalGreeting: function() {
                return formalGreetings[this.language] + " " + this.fullName() + ".";
            },

            greet:function(formal) {
                var msg;
                // if undefined or null it will be coerced to 'false'
            if(formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if(console) {
                console.log(msg);
            }

            //'this' refers to the calling object at execution time
            //makes the method chainable
            return this;
            },

            log: function() {
                if(console) {
                    console.log(logMessages[this.language]+ ": " + this.fullName());
                }

                //make chainable
                return this;
            },
            
            setLang: function(lang) {

                //set the language
                this.language = lang;

                //validate
                this.validate();
                
                //make chainable
                return this;
            },

            HTMLGreeting: function(selector,formal) {
                if(!$) {
                    throw "jQuery not loaded";
                }
                if(!selector) {
                    throw "Missing jQuery seletor";
                }

                //determine the message
                var msg;
                if(formal) {
                    msg = this.formalGreeting();
                }
                else {
                    msg = this.greeting();
                }

                //inject the message in the chosen place in the DOM
                $(selector).html(msg);

                //make chainable
                return this;
            }

        };


        //the actual object is created here, allowing us to "new" an object without calling "new"
        Greetr.init = function(firstName = "Default",lastName = "Default",language = "en") {
            var self = this;
            self.firstName = firstName;
            self.lastName = lastName;
            self.language = language;

            self.validate();
        }

        //trick borrowed from jQuery so we dont have to use the "new" keyword
        Greetr.init.prototype = Greetr.prototype;

        //attach our Greetr to the global object, and provide a shorthand "$G" for ease our poor fingers
        global.Greetr = global.G$ = Greetr;

})(window,jQuery);