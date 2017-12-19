var g = G$("Michal", "Szymanski"); 
console.log(g); // Michal Szymanski en
g.greet().setLang("pl").greet(true); // Hello Michal! // Witaj Michal Szymanski.
g.greet().setLang("es").greet(true); // Hello Michal! // Uncaught Invalid language