function sumOfArray(arr){
    let sum = 0;
    for( let a of arr){
        sum += a;
    }
    let sumOfSquare = Math.sqrt(sum);
    return sumOfSquare;
}

console.log(sumOfArray([13, 7, 5]));