var c = {greeting: "Hi"};
var d;

d = c;
c.greeting = "Hello" //mutated

console.log(c); // {greeting: "Hello"}
console.log(d);//  {greeting: "Hello"}

function changeGreet(obj) {
    obj.greeting="Hola"; //mutate
}

changeGreet(d);

console.log(c); // {greeting: "Hola"}
console.log(d); // {greeting: "Hola"}

c = {greeting: "howdy"}; // equals operator sets up new memory space (new adress)

console.log(c); // {greeting: "howdy"}
console.log(d); // {greeting: "Hola"}