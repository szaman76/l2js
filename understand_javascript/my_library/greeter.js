/*
GREETR

When given a first name, last name, and optional language, it generates formal and informal greetings.

Suport English and Polish.

Reusable library/framework

Easy to type "G$()" structure.

Support jQuery
*/

(function(global,$) {

        var Greetr = function(firstName, lastName, language) {
            return new Greetr.init(firstName,lastName,language);
        }

        var supportedLangs = ["en", "pl"];

        var greetings = {
            en: "Hello",
            pl: "Czesc"
        };

        var formalGreetings = {
            en: "Greetings",
            pl: "Witaj"
        };

        var logMessages = {
            en: "Logged in",
            pl: "Zalogowany"
        };

        Greetr.prototype = {
            
            fullName: function() {
                return this.firstName + " " + this.lastName;
            },

            validate: function() {
              if (supportedLangs.indexOf(this.language) === -1) {
                    throw "Invalid language";
                }
            },

            greeting: function() {
                return greetings[this.language] + " " + this.firstName + "!";
            },

            formalGreeting: function() {
                return formalGreetings[this.language] + " " + this.fullName + ".";
            },

        };

        Greetr.init = function(firstName = "Default",lastName = "Default",language = "en") {
            var self = this;
            self.firstName = firstName;
            self.lastName = lastName;
            self.language = language;
        }

        Greetr.init.prototype = Greetr.prototype;

        global.Greetr = global.G$ = Greetr;

})(window,jQuery);