// Working with Arrays

// push() and unshift()
// push() adds elements to the end of the array
// unshift() adds elements to the beginning of the array
let mixedNumbers = (arr) => {
    arr.push(7, 'VIII', 9);
    arr.unshift('I', 2, 'three');
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));



// pop() and shift()
// pop() removes elements from the end
// shift() removes elements from the start
let popShift = (arr) => {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [popped, shifted];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));



// splice()
// first parameter indicates from which index we should start removing things 
// second parameter indicates how many elements we want to remove
// third parameter contains element(s) to add/replace on the array
// there can be any number of elements added as long as they are comma separated

// splice() returns a new array containing the elements that were removed
let splice = (arr) => {
    arr.splice(1, 2); //will start at index 1 and it will also delete index 1 and the next index 2
    return arr;
}
console.log(splice(['challenge', 'is', 'not', 'complete']));


const arrNum = [2, 4, 5, 1, 7, 5, 2, 1];
arrNum.splice(1, 4);
console.log(arrNum);


const spliceNum = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
spliceNum.splice(startIndex, amountToDelete, 13, 14);
console.log(spliceNum);



let htmlColorNames = (arr) => {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    return arr;
}
console.log(htmlColorNames(['Red', 'Green', 'Yellow', 'Blue']));