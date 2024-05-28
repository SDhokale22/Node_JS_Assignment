//Write a function that takes an array of integers and returns a new array with only the unique values.

let Arr = [
    'a', 'p', 'p', 'k', 's', 
    'f', 'a', 'r', 'g', 'e', 
    'e', 'm', 's'
];

let outputArray = [];

function removewithfilter(arr) {
    let outputArray = arr.filter(function (v, i, self) {
        return i == self.indexOf(v);
    });

    return outputArray;
}

console.log(removewithfilter(Arr));

//Output

[
    'a', 'p', 'k',
    's', 'f', 'r',
    'g', 'e', 'm'
]