/*
Functions are the most common unit of scope in JS. Variavles and functions that are declared inside another function
are essentially "hidden" from any of the enclosing "scopes", which is an intentional design principle of good software.

But functions are by no means the only unit of scope. Block-scope refers to the idea that variavles and functions
can belong to an arbitary block (generally, any {..}pair) of code, rather than only to the enclosing function.

In ES6 the let keyword (a cousin to the var keyword) is introduced to allow declarations of variables in any
arbitary block of code, if(..) { let a = 2; } will declare a variable "a" that essentially hijacks the scoope of the
"if"s{ } block and attaches itself there.
*/