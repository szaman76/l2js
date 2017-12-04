/*{
    var obj = {
    count: 0,
    cool: function coolFn() {
        var self = this;

        if(self.count <1) {
            setTimeout( function timer(){
                self.count++;
                console.log("awesome");
            },100);
        }
    }
};
obj.cool(); // awesome
}*/
{
    var obj = {
    count: 0,
    cool: function coolFn() {
        if(this.count <1) {
            setTimeout( () =>{ // arrow function
                this.count++;
                console.log("awesome");
            },100);
        }
    }
};
obj.cool(); // awesome
}