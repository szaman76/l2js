var people = [
    {
        firstName: "Michal",
        lastName: "Szymanski",
        addresses:  [
            "krakow",
            "malopolska"
        ]
    },
    {
        firstName: "Bono",
        lastName: "Pies",
        addresses: [
            "polska",
            "europa"
        ],
        greet: function() {
            return "hello!";
        }
    }
];
console.log(people[0].firstName); // Michal