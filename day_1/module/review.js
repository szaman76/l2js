/*
    CLOSURE is when a function can remember and access its lexical scope even when it's invoked outisde 
    its lexical scope

    Modules require two key characteristics
    1. an outer wrapping function being invoked, to creae the enclosing scope
    2. the return value of the wrapping function must include reference to at least one inner function that then has
    closure over the private inner scope of the wrapper.

*/