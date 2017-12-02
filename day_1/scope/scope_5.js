function process(data) {
    //do something
}

// anything declared inside this block can go away after! (garabage collector)
{
    let someReallyBigData = { .. };

    process(someReallyBigData);

}

var btn = document.getElementById("my_button");

btn.addEventListener("click", function click(evt){
        console.log("button clicked");
}, /*capturingPhase= */false);

for(let i = 0;i<10;i++){
    console.log(i);
}
console.log(i) // RefferenceError