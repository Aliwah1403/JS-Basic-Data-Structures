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

function quickCheck(arr, elem) {

    if (arr.indexOf(elem) === -1) {
        return false;
    } else {
        return true;
    }
}
console.log(quickCheck(['squash', 'onions', 'mushrooms'], 'mushrooms'));
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


// iterating through arrays
function filteredArray(arr, elem) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));



// complex multi-dimensional arrays
let nestedArray = [
    ['deep'],
    [
        ['deeper'], ['deeper']
    ],
    [
        [
            ['deepest'], ['deepest']
        ],
        [
            [
                ['deepest-est?']
            ]
        ]
    ]
];
console.log(nestedArray[2][1][0][0])



// checking if an object has a property
// we can either use the hasOwnProperty()method
// or use the "in" keyword
// eg
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

console.log(users.hasOwnProperty('Ryan'));
console.log('Alan' in users)

function isEveryoneHere(userObj) {
    return userObj.hasOwnProperty("Alan") &&
        userObj.hasOwnProperty("Jeff") &&
        userObj.hasOwnProperty("Sarah") &&
        userObj.hasOwnProperty("Ryan");
}
console.log(isEveryoneHere(users))



// Iterate Through the Keys of an Object with a for...in Statement
// this allows us to iterate through all the keys in an object
// eg
const fridge = {
    milk: 1,
    eggs: 12
}

for (const food in fridge) {
    console.log(food, fridge[food])
}

const users2 = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}
function countOnline(allUsers) {
    let result = 0
    for (const user in allUsers) {
        if (allUsers[user].online == true) {
            result++;
        }
    }
    return result;
}
console.log(countOnline(users2))



// Generate an array of all object keys with Object.keys()
// this method takes an object as its argument and returns an array of strings representing each property in the object
const users3 = {
    Alan: {
        online: false,
        age: 12
    },
    Jeff: {
        online: true,
        age: 23
    },
    Sarah: {
        online: false,
        age: 33
    }
}
function getArrayOfUsers(obj) {
    return Object.keys(obj);
}
console.log(getArrayOfUsers(users3));



// Modifying an array stored in an object
const mainUser = {
    name: 'John',
    age: 28,
    data: {
        username: 'JohnCoder',
        joinDate: 'March 16 23',
        organization: 'codeCamper',
        friends: [
            'Sam',
            'Kira',
            'Tommy'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
}
function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}
console.log(addFriend(mainUser, 'Pete'))