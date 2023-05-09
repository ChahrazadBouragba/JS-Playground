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
      "<h4 class='title'> POWERSTATS:</h4>",
      "<ul>",
      ...Object.entries(character.powerstats).map(([stat, value]) => `<li class="powerstats" title="powerstats">${stat.toUpperCase()}: ${value}</li>`),
      "</ul>",
  ];
 
  let bioHTML = [
      "<h4 class='title'> biography:</h4>",
      "<ul>",
      ...Object.entries(character.biography).map(([bio, value]) => `<li class="biography" title="biography">${bio.toUpperCase()}: ${value}</li>`),
      "</ul>",
  ];

  let appearHTML = [
      "<h4 class='title'> appearance:</h4>",
      "<ul>",
      ...Object.entries(character.appearance).map(([appear, value]) => `<li class="appearance" title="appearance">${appear.toUpperCase()}: ${value}</li>`),
      "</ul>",
  ];

  let workHTML = [
      "<h4 class='title'> work:</h4>",
      "<ul>",
      ...Object.entries(character.work).map(([work, value]) => `<li class="work" title="work">${work.toUpperCase()}: ${value}</li>`),
      "</ul>",
  ];

  let connectHTML = [
      "<h4 class='title'> connections:</h4>",
      "<ul>",
      ...Object.entries(character.connections).map(([connections, value]) => `<li class="connections" title="connections">${connections.toUpperCase()}: ${value}</li>`),
      "</ul>",
  ];

  // const GetHeroInfoo = getHeroInfo();
  // const queryParams = new URLSearchParams({ userInputValue: GetHeroInfoo });
  // window.location.href = `./hero.html?${queryParams.toString()}`;

  // join the array elements into a single string
  return statsHTML.join("") + bioHTML.join("") + appearHTML.join("") + workHTML.join("") + connectHTML.join("");
  
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
      herroImageElement.innerHTML = `<img src="${specificHero.image.url}" height="200" width="200"/>`;
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
      herroImageElement.innerHTML = `<img src="${json.image.url}" height="200" width="200"/>`;
      heroInfoElement.innerHTML = getHeroInfo(json);
    })
    .catch(error => {
      console.error(error.message);
      heroNameElement.innerText = 'Error';
      herroImageElement.innerHTML = '';
      heroInfoElement.innerText = 'Hero not found';
    });
}
