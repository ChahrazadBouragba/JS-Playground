


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


    const stickerContainer = document.getElementById('sticker-container');
const result = document.getElementById('result');
const rangeElement = document.getElementById('range');

stickerContainer.addEventListener('click', () => {
    try {
        const weight = Number(weightInput.value);
        const height = Number(heightInput.value);
      
       // perform BMI calculation and display result
        if (height && weight) {
            const heightm = height / 100; 
            const bmi = weight / (heightm * heightm);
            const roundedBmi = bmi.toFixed(1);
            result.innerText = roundedBmi;
            
            // show range and image based on BMI
            if (bmi < 18.5) {
                rangeElement.innerText = '(Underweight)';
                stickerContainer.innerHTML = '<img id="sticker" class="sticker" src="img/underweight.png">';
            } else if (bmi < 25) {
                rangeElement.innerText = '(Normal weight)';
                stickerContainer.innerHTML = '<img id="sticker" class="sticker" src="img/normalweight.png" style="margin-left: 2.2rem">';
            } else if (bmi < 30) {
                rangeElement.innerText = '(Overweight)';
                stickerContainer.innerHTML = '<img id="sticker" class="sticker" src="img/overweight.png">';
            } else {
                rangeElement.innerText = '(Obesity)';
                stickerContainer.innerHTML = '<img id="sticker" class="sticker" src="img/obesity.png" style="margin-right: 2.5rem">';
            }
        } else {
            throw 'Enter a valid number';
        }
    } catch (error) {
        alert(error);
    }
});
  const reloadButton = document.getElementById('reloadButton');
  const reload = () => {
      weightInput.value = '';
      heightInput.value = '';
      result.innerText = '00.0';
      rangeElement.innerText = '___';
      stickerContainer.innerHTML = '<img id="sticker" class="sticker" src="img/weight.png">';
  };
reloadButton.addEventListener('click', reload);

};

// Add event listeners to the input fields to trigger the calculateBmi function on input changes
weightInput.addEventListener('input', calculateBmi);
heightInput.addEventListener('input', calculateBmi);
// 'input': This is the name of the event that we are listening for. we are listening for the input event, which is fired whenever the value of the weightInput element changes.









