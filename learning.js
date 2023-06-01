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



// slice()
// copies or extracts a given number of elements to a new array
// takes 2 parameters
// 1: index at which to begin extraction
// 2: index at which to end extraction(element at this index wont be included)

let weatherConditions = ["rain", "snow", "wind", "clear"];
let todaysWeather = weatherConditions.slice(1, 3);
console.log(weatherConditions)
console.log(todaysWeather);


let forecast = (arr) => {
    return arr.slice(2, 4);
}
console.log(forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstom"]))



// using spread operator to copy arrays
let thisArray = [true, true, undefined, false, null];
let thisArray2 = [...thisArray];
console.log(thisArray2);



// the function is supposed to return a new array made up of num copies of arr.
let copyMachine = (arr, num) => {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 3));


// we can combine arrays with the spread operator
let thatArray = ['sage', 'parsley', 'thyme', 'sage'];
let thatArray2 = ['basil', 'cilantro', ...thatArray, 'pepper'];
console.log(thatArray2);

let spreadOut = () => {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}
console.log(spreadOut());



// indexOf()
let fruits = ['mango', 'watermelon', 'orange', 'strawberry', 'pineapple'];
console.log(fruits.indexOf('mango'));
console.log(fruits.indexOf('pear'));