function identify() {
    return this.name.toUpperCase();
};

function speak() {
    var greeting = "Hello I'm " + identify.call(this);
    console.log(greeting);
};

var me = {
    name: "Michał"
};

var you = {
    name: "Bono"
};

identify.call(me); // Michał -> MICHAŁ
identify.call(you); // Bono -> BONO

speak.call(me); // Hello I'm MICHAŁ 
speak.call(you); // Hello I'm BONO
console.log(me); // Michał