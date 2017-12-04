function identify(context) {
    return context.name.toUpperCase();
}

function speak(context) {
    var greeting = "Hello I'm " + identify(context);
    console.log(greeting);
}

var me = {
    name: "Michał"
};

identify(me); // Michał -> MICHAŁ

speak(me); // Hello I'm MICHAŁ