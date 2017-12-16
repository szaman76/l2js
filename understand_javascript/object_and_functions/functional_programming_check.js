var arr = [1,2,3];

function map(arr, fn) {
    var newArr = [];

    for(var i = 0; i<arr.length;i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
};

var check = function(limit) {
    return function(limit, item) {
        return item > limit;
    }.bind(this, limit);
};

var arr2 = map(arr,check(2));
console.log(arr2);