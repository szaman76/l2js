// Lexical-this

{             // arrow function declaration
    var foo = a => {
        console.log(a);
    };
    foo(2); // 2
}
{
    var obj = {
        id: "awesome",
        cool: function coolFn() {
                console.log(this.id);
        }
    };
    var id = "not awesome";
    obj.cool(); // awesome
    setTimeout(obj.cool,1000); //undefined even tho it should be "not awesome"
}