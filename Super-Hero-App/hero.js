
//! TOGGLE BUTTON

const toggleSwitch = document.querySelector('#toggle');
const body = document.querySelector('body');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});





//! LOADING SMOTHLY

// window.addEventListener('load', function() {
//   const images = document.querySelectorAll('body');
//   images.forEach(function(img) {
//     img.setAttribute('src', img.getAttribute('data-src'));
//     img.onload = function() {
//       img.removeAttribute('data-src');
//     };
//   });
// });














const SUPERHERO_TOKEN = '189446270644344'
    const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`
    

    const heroNameElement = document.querySelector('.heroNameElemente')
    const herroImageElement = document.querySelector('.herroImageElement')
    const heroInfoElement = document.querySelector('.heroInfoElement')

// Retrieve the query parameter
const queryParams = new URLSearchParams(window.location.search);
const heroName = queryParams.get('heroName');
const heroId = queryParams.get('heroId');




const getHeroInfo = (character) => {

  // create an array to store the HTML
  let statsHTML = [
      //* using the spread operator (...) and Object.entries() to map over the properties of each object and convert them to an array of HTML list items.
      "<div class='row1'>",
      "<h4 class='title'> Powerstats</h4>",
      ...Object.entries(character.powerstats).map(([stat, value]) => `<li class="powerstats" title="powerstats">${stat.toUpperCase()}: ${value}</li>`),
      "</div>",
  ];

  let appearHTML = [
    "<div class='row2'>",
      "<h4 class='title'> Appearance</h4>",
      ...Object.entries(character.appearance).map(([appear, value]) => `<li class="appearance" title="appearance">${appear.toUpperCase()}: ${value}</li>`),
      "</div>",
  ];
 
  let bioHTML = [
    "<div class='row1'>",
      "<h4 class='title'> Biography</h4>",
      ...Object.entries(character.biography).map(([bio, value]) => `<li class="biography" title="biography">${bio.toUpperCase()}: ${value}</li>`),
      "</div>",
  ];

  let workHTML = [
    "<div class='row2'>",
      "<h4 class='title'> Work</h4>",
      ...Object.entries(character.work).map(([work, value]) => `<li class="work" title="work">${work.toUpperCase()}: ${value}</li>`),
      "</div>",
  ];

  let connectHTML = [
    "<div class='row2'>",
      "<h4 class='title'> Connections</h4>",
      ...Object.entries(character.connections).map(([connections, value]) => `<li class="connections" title="connections">${connections.toUpperCase()}: ${value}</li>`),
      "</div>",
  ];

  // const GetHeroInfoo = getHeroInfo();
  // const queryParams = new URLSearchParams({ userInputValue: GetHeroInfoo });
  // window.location.href = `./hero.html?${queryParams.toString()}`;

  // join the array elements into a single string
  return statsHTML.join("") + appearHTML.join("") + bioHTML.join("") + workHTML.join("");
  
}



if (heroName) {
  // Perform API call based on hero name
  fetch(`${BASE_URL}/search/${heroName}`)
    .then(response => response.json())
    .then(json => {
      const specificHero = json.results[0];
      if (!specificHero) {
        throw new Error(`Hero with name ${heroName} not found`);
      }

      // Display hero information
      heroNameElement.innerText = specificHero.name;
      herroImageElement.innerHTML = `<img class='heroImg' src="${specificHero.image.url}"/>`;
      heroInfoElement.innerHTML = getHeroInfo(specificHero);
    })
    .catch(error => {
      console.error(error.message);
      heroNameElement.innerText = 'Error';
      herroImageElement.innerHTML = '';
      heroInfoElement.innerText = 'Hero not found';
    });
} else if (heroId) {
  // Perform API call based on hero ID
  fetch(`${BASE_URL}/${heroId}`)
    .then(Response => Response.json())
    .then(json => {
      if (!json) {
        throw new Error(`Hero with ID ${heroId} not found`);
      }

      // Display hero information
      heroNameElement.innerText = json.name;
      herroImageElement.innerHTML = `<img class='heroImg' src="${json.image.url}"/>`;
      heroInfoElement.innerHTML = getHeroInfo(json);
    })
    .catch(error => {
      console.error(error.message);
      heroNameElement.innerText = 'Error';
      herroImageElement.innerHTML = '';
      heroInfoElement.innerText = 'Hero not found';
    });
}
