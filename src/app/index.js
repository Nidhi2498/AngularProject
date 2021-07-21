//reduce example

const arr = [5, 3, 7, 6, 2, 4]

const output = arr.reduce(function (acc, curr){
    acc = acc + curr;
    return acc;
})

console.log(output)