array_first = [1,2,3,7,2,5];
array_second = [2,4,5,7,2];
console.log(Array.from(new Set(array_first.concat(array_second))));