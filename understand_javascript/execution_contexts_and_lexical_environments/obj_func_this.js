var c = {
    name: "The c object",
    log: function() {
        this.name = "Updated c Object";
        console.log(this);

        var setname = function(newname) {
            this.name = newname;
        }
        setname("Updated again! The c Object.");
        console.log(this);
    }
 }
 c.log();
 //{ name: 'Updated c Object', log: [Function: log] }
 //{ name: 'Updated c Object', log: [Function: log] }

            // The setname function didnt change name in c object but did change name in global object;
            console.log(name); // Updated again! The c Object.