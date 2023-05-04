

// Get the span element by its ID
const counter = document.getElementById('reaction-count')
console.log(counter)

// Update its content with the initial count ('')
counter.innerHTML = '0';

//* Select all elements with the class "reaction" and store them in the "reactions" array
const reactions = document.querySelectorAll('.reaction')
console.log(reactions)

// create a variable totalClicks to keep track of the total number of clicks across all reactions.
let totalClicks = 0;

// Define an object to store the number of times each reaction has been clicked
const timesClicked = {
    love: 0,
    wow: 0,
    neutral: 0,
    angry: 0,
    shy: 0,
    sad: 0,
};

// Initialize the timesClicked object with zero counts for each reaction
// reactions.forEach(reaction => timesClicked[reaction.getAttribute('data-reaction')] = 0);

// Set up click event handlers for each reaction button
reactions.forEach(reaction => {
    reaction.onclick = () => {
        timesClicked[reaction.getAttribute('data-reaction')] += 1 // increase the number of times each reaction is clicked.
        totalClicks += 1
        counter.innerText = totalClicks //update the counter span element with the number of times each reaction was clicked.
    }
})

// define a fuction to clear the count of clicks for all reactions
const clearCount = () => {
    // reset the number of clicks to zero
    totalClicks = 0;
    // reset the text of counter to zero
    counter.innerText = 0;
}

// select the Reset button and add an "onclick" event handler to it
const resetButton = document.getElementById('resetButton');
resetButton.onclick = clearCount;











// //* Select all elements with the class "reaction" and store them in the "reactions" array
// const reactions =  document.querySelectorAll(".reaction");
// console.log(reactions);
// // const reactionsArray = Array.from(reactions);
// // console.log(reactionsArray);

// //* Iterates through all items in the NodeList reactions and logs their value attributes to the console.
// reactions.forEach(reaction => console.log(reaction.getAttribute('data-reaction')));

// //* Attaches an onclick event listener to each item that, when clicked, logs the value attribute of that item to the console.
// reactions.forEach(reaction => {
//     reaction.onclick = () => console.log(reaction.getAttribute('data-reaction'))
// })

// //* Create an object to store the number of times each reaction has been clicked
// const timesClicked = {
//     'love': 0,
//     'wow': 0,
//     'sad': 0,
//     'shy': 0,
//     'angry': 0,
//     'neutral': 0,
// }

// // Loop through each icon in the "reactions" array
// // Add an "onclick" event handler to the icon
// // Increment the number of times the icons has been clicked
// // Update the text of the icon to display the number of times it has been clicked
// reactions.forEach(reaction => {
//     reaction.onclick = () => timesClicked[reaction.getAttribute('data-reaction')]
// })