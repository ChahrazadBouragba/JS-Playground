function addToCart() {
    // console.log("addToCart function called");

    // Hide the button
    document.getElementById("btn").style.display = "none";
  
    // Update the cart status
    const cartStatus = document.getElementById("cart-status");
    cartStatus.style.display = "block";
  }





  
  // randomly select elements from array
  const randomSelect = (anyArray) => {
    const randomNum = Math.floor(Math.random() * anyArray.length)
    console.log(randomNum)
    return fruits[randomNum]
  }
  
  const fruits = ['orange', 'apple', 'banana', 'strawberries']
  console.log(randomSelect(fruits))


  //if else else if 
  const weatherScore = (weather, weather2) => {
    let score;

    if (weather == 'rainy' && weather2 == 'overcast') {
      score = 2
    }
    else if (weather == 'rainy') {
    score = 1
    }
    else if (weather == 'sunny') {
    score = -1
    }
    else {
      score = 0
    }
    return score
  }

  console.log(weatherScore('rainy'))