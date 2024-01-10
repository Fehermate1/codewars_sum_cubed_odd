function sumCubedOddNumbers(arr) 
{
    let sum = 0;
    for (let value of arr) 
    {
        if (typeof value !== 'number' || typeof value === 'boolean') { return undefined; }
        if (value % 2 !== 0) { sum += Math.pow(value, 3); }
    }
    return sum;
}
let arr = [1, 2, 3, 4, 5];
console.log(sumCubedOddNumbers(arr)); //Érték: 153