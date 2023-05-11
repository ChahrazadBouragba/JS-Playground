console.log('just checking if this linked')

const dogImage = document.getElementById('dogImage')
const reloadButton = document.getElementById('reloadButton')

// DOG API
// https://dog.ceo/api/breeds/image/random

//! API request
//.then - Promises = asynchronous programming


//* stuff you have to wait for
const getnewImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(Response => Response.json())
    .then(json => {
        console.log(json.message)
        dogImage.innerHTML += `<img src='${json.message}'/>` //remove the + to get just one img
    })
}

//* stuff you do not have to wait for
    console.log('json contanins two keys:{message, status}')

// adding eventlistener to the button:
reloadButton.onclick = () => getnewImage()