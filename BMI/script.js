

// Accessing the input elements and the result element from the DOM
const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const result = document.getElementById('result')

const weight = Number(weightInput.value);
const height = Number(heightInput.value);
console.log(weight)
console.log(height)
//? BMI = weight (kg) / height (m)²
//* Function to calculate BMI given weight (kg) and height (cm)
const calculateBmi = () => {
    // Get the weight and height inputs from the DOM & convert it into a number
    // const weight = Number(weightInput.value);
    // const height = Number(heightInput.value);
    // console.log(weight)
    // console.log(height)

    // Convert height from centimeters to meters
    const heightm = height / 100; 
    
    // Calculate the BMI and round it to 1 decimal place
    const bmi = weight / (heightm * heightm);
    const roundeBmi = bmi.toFixed(1);
    
    // Set the text of the result element to the calculated BMI
    result.textContent = roundeBmi;
};

// Add event listeners to the input fields to trigger the calculateBmi function on input changes
weightInput.addEventListener('input', calculateBmi);
heightInput.addEventListener('input', calculateBmi);








// const weight = 70; // kg
// const height = 170; // cm
// console.log(calculateBmi(weight, height));

// Calculate the BMI
// const bmi = calculateBmi();

// update the BMI on DOM & show it to user