

// Accessing the input elements and the result element from the DOM
const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const result = document.getElementById('result')
const rangeElement = document.getElementById('range');

const weight = Number(weightInput.value);
const height = Number(heightInput.value);
console.log(weight)
console.log(height)




//? BMI = weight (kg) / height (m)²
//* Function to calculate BMI given weight (kg) and height (cm)
const calculateBmi = () => {
    // Get the weight and height inputs from the DOM & convert it into a number
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);
    // console.log(weight)
    // console.log(height)

    //* guard clause
    // if input is 1 or less simply return
    if (weight <= 1 && height <= 1) {
        console.log(weight, `weight is 1 or less than 1 so I'm gonna stop`)
        console.log(height, `height is 1 or less than 1 so I'm gonna stop`)
        // alert('Enter a valid number')
        throw 'Enter a valid number'
        return
    }

    // Convert height from centimeters to meters
    const heightm = height / 100; 
    
    // Calculate the BMI and round it to 1 decimal place
    const bmi = weight / (heightm * heightm);
    const roundeBmi = bmi.toFixed(1);

    // Set the text of the result element to the calculated BMI only happen when the user has entered all the required inputs
    if (height && weight) {
      result.innerText = roundeBmi;
    }




// const imageWeight = document.getElementById('sticker');
// imageWeight.style.opacity = 0;


    if (bmi < 18.5) {
        // const img1 = document.createElement('img')
        // img1.src="img/save.png"
        // imageContainer.appendChild(img1)
        rangeElement.innerText = '(Underweight)'; 
      } else if (bmi < 25) {
        rangeElement.innerText = '(Normal weight)';
      } else if (bmi < 30) {
        rangeElement.innerText = '(Overweight)';
      } else {
        rangeElement.innerText = '(Obesity)';
      }
};










const reloadButton = document.getElementById('reloadButton')
const reload = () => {
    weightInput.value = '';
    heightInput.value = '';
    result.innerText = '00.0';
    rangeElement.innerText = '___';
}
reloadButton.onclick = reload;










// Add event listeners to the input fields to trigger the calculateBmi function on input changes
weightInput.addEventListener('input', calculateBmi);
heightInput.addEventListener('input', calculateBmi);
// 'input': This is the name of the event that we are listening for. we are listening for the input event, which is fired whenever the value of the weightInput element changes.








