//! Array Methods (mapping, filtering, reducing | Understanding Array Methods)
//? map : a method
//? filter : a method
//? reduce



//? map
//*loops through the array, and returns an array
[1, 2, 3, 4].map(string => console.log(string))

let resault = [1, 2, 3, 4].map(number => (number * 2))
console.log(resault)
// number is a variable that holds the array

let res = [67, 44, 223, 55].map(numbers => console.log(numbers));

const doubleArray = (numbers) => {
    return numbers.map(number => (number * 2));
}
console.log(doubleArray([6, 4, 95, 32]))




//? filter
//*filter() method is used to create a new array with all elements that pass the test implemented by the provided function.

const evenNumbers = (numbers) => numbers.filter(number => number % 2 === 0);

console.log(evenNumbers([5, 59, 34, 3, 93, 4, 8]))



const filter = (numbers, greaterThan) => {
    let resault = []
    for (const number of numbers) {
        if (number > greaterThan) {
            resault.push(number)
        }
    }
    return resault
} 
console.log(filter([2, 4, 7, 8, 3, 2], 4))

//*filter - loops and return a new array wuth matching conditions
const strawberries = [5, 4, 6, 2, 1, 3]

console.log(strawberries.filter(strawberries => strawberries > 5)) 

//* (and) && both conditions should be true at exact time
// if (userIsAuthenticate == true && userIsPaying == true) {
//     no adds
// } else {
//     show adds
// }
console.log(strawberries.filter(strawberries => strawberries > 2 && strawberries == 1))

//* || (or) one condition to be true at a time
// if (userIsAuthenticate == true || userIsPaying == true) {
//     show Youtube videos
// } else {
//     do not show videos
// }
console.log(strawberries.filter(strawberries => strawberries > 2 || strawberries == 1))

// array of objects
const mermaids = [
    {name: 'Syren', networth: 436},
    {name: 'Pathrenobe', networth: 32},
    {name: 'Maryanne', networth: 3020},
]

let result = mermaids.filter(mermaid => mermaid.networth > 40)
console.log(result)

console.log(['Syren', 'Maryanne'].join())
let names = result.map(mermaid => mermaid.name).join(', ')

// script2.innerHTML = '<h2>ggggggg</h2>'



//? reduce

//* for summing
//* It can be used to sum an array of numbers, find the maximum or minimum value in an array, or transform an array into a different format.

//using reduce to sum and multiply the strawberries array
const sumArray = strawberries.reduce((prev, curr) => prev + curr)
const multiplyArray = strawberries.reduce((prev, curr) => prev * curr)
console.log(sumArray)
console.log(multiplyArray)

// sum all networths
let nt = mermaids.reduce((a, b) => a + b.networth, 0)
console.log(nt)



//! anonymous functions: 

// The function (prev, curr) => prev + curr is an anonymous function because it does not have a name. In JavaScript, you can define functions in two ways: with a function declaration, which gives the function a name, or with a function expression, which can be anonymous or have a name.

// In this case, the function is defined as a parameter to the reduce() method on the strawberries array, and is not assigned a name. This makes it an anonymous function.


// an other example of an anonymous function:

const numbers = [1, 2, 3, 4, 5, 5, 7];
numbers.forEach((num) => console.log(num * 2));
//we have an array of numbers numbers. We are using the forEach() method to loop through each element of the array and apply a callback function to it(the anonymous function passed as an argument is a callback function that is used with the forEach() method.). The callback function is defined as an anonymous function that takes one parameter, num, which is the current element of the array.


//! Document Object Model (DOM)

//* manipulating the HTML
something.innerText = 'night'

let message = 'I hate you'
something.innerText = message;
something.innerHTML = '<p>Morning</p>'
something.innerHTML = `<h4>${message}</h4>`

//* manipulating css
something.style.backgroundColor = 'palevioletred'



//* onclick
// .onclick is a built-in JavaScript property(that holds a function.) that allows you to attach a function to an HTML element that will be executed when the element is clicked.

//using id
let bluevioletDiv = document.getElementById('blueviolet')

// bluevioletDiv.onclick = () => console.log('blueviolet')
// yellowgreen.onclick = () => console.log('yellowgreen')
// gray.onclick = () => console.log('gray')

//* getting HTML class
// Select all elements with the class "colorItem" and store them in the "items" array
const items = document.querySelectorAll('.colorItem')
console.log(items)


//! forEach

// using value
//* Accesses the value attribute of the first item in a NodeList called items.
items.value

//* Iterates through all items in the NodeList called items and logs their value attributes to the console.
items.forEach(item => console.log(item.value))

items.forEach(item => {
    //* Attaches an onclick event listener to each item that, when clicked, logs the value attribute of that item to the console.
    item.onclick = () => console.log(item.value)
})


//!project

// counts how many times I click each botton and desplay it on the dom

//* This code defines a click counter that keeps track of the number of times each color has been clicked. When a color item is clicked, its count is incremented and the count is displayed next to the item. The "clearCount" button resets the count for all colors to zero. The code uses an object to store the counts for each color and loops through the color items using a forEach loop to add an onclick event handler to each one. The code also defines a clearClick function to reset the counts and text of all color items.


// Create an object to store the number of times each color has been clicked
const timesClicked = {'blueviolet': 0, 'yellowgreen': 0, 'gray': 0}

// Loop through each item in the "items" array
items.forEach( item => {
    // Add an "onclick" event handler to the item
    item.onclick = () => {
        // Increment the number of times the item's color has been clicked
        timesClicked[item.value] += 1
        // Update the text of the item to display the number of times it has been clicked
        item.innerText = timesClicked[item.value]
    }
})

// Define a function to clear the count of clicks for all colors
const clearClick = () => {
    // Reset the number of clicks for each color to zero
    timesClicked.blueviolet = 0
    timesClicked.yellowgreen = 0
    timesClicked.gray = 0
    // Reset the text of each item to be empty
    items.forEach(item => item.innerText = '')
}

// Select the "clearCount" button and add an "onclick" event handler to it
const clearButton = document.getElementById('clearCount')
clearButton.onclick = () => clearClick() 
