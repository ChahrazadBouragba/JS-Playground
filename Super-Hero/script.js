console.log('HIIIIIIIIIIIII')

// https://superheroapi.com/api/access-token/character-id

//* API info

//! API call for getting a random Hero
const getRandomSupperHero = (id, name) => {
    const SUPERHERO_TOKEN = '189446270644344'
    const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`
    
    const herroImage = document.querySelector('.herroImage')
    // id: base_url/id
    // json.image.url
    fetch(`${BASE_URL}/${id}`)
    .then(Response => Response.json())
    .then(json => {
        console.log(json)
        if (!json) {
            throw new Error(`Hero with name ${name} not found`);
        }
        heroName.innerText = `${json.name}`;
       herroImage.innerHTML = `<img src="${json.image.url}" height=200 width=200/>`
       //* get heroe info
       heroInfo.innerHTML = getHeroInfo(json);
    })

    .catch(error => {
        console.error(error.message);
        heroName.innerText = 'Error';
        herroImage.innerHTML = '';
        heroInfo.innerText = 'Hero not found';
    });
    
}

//! random Hero Button
const randomHeroButton = document.querySelector('.randomHeroButton')

const randomHero = () => {
    const numberOfHerros = 731
    return Math.floor(Math.random() * numberOfHerros) + 1 // +1 to insure we do not get 0 and get 731 not less
}

randomHeroButton.onclick = () => {
    const randomId = randomHero();
    const queryParams = new URLSearchParams({ heroId: randomId });
    window.location.href = `./hero.html?${queryParams.toString()}`;
    
  };


//! Search for specific hero
//* input
 const userInput = document.getElementById('userInput')
 const heroName = document.querySelector('.heroName')
 const heroInfo = document.querySelector('.heroInfo')


 //? id: base_url/id
 //* json.image.url

 //? name: base_url/search/(name)
 //* json.result[0].image.url

 //? Add an event listener to the input element to log its value whenever it changes
// userInput.addEventListener('input', () => {
//     console.log(userInput.value);
//   });


//! Get heros info
//* represents a list of each powerstat and its value as a list
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

//* OR
/** const getHeroInfo = (character) => {
    // initialize an empty string to store the HTML
    let statsHTML = "<h4 class='title'> POWERSTATS:</h4><ul>"; 
    // loop through each property of the powerstats object
    for (stat in character.powerstats) {
        statsHTML += `<li class="powerstats" title="powerstats">${stat.toUpperCase()}: ${character.powerstats[stat]}</li>`;
    }
    
    // initialize an empty string to store the HTML
    let bioHTML = "<h4 class='title'> biography:</h4><ul>"; 
    // loop through each property of the biography object
    for (bio in character.biography) {
        bioHTML += `<li class="biography" title="biography">${bio.toUpperCase()}: ${character.biography[bio]}</li>`;
    }

    // concatenate both the statsHTML and bioHTML strings and return them
    return statsHTML + "</ul>" + bioHTML + "</ul>";
} **/

//! specific hero search function 
const SearchHero = (name) => {

    const SUPERHERO_TOKEN = '189446270644344'
    const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`
    
    const herroImage = document.querySelector('.herroImage')
    console.log(userInput.value) // debug
    fetch(`${BASE_URL}/search/${name}`)
    .then(Response => Response.json())
    .then(json => {
        console.log(json);
        // get the first img that matches the name user wants
        const specificHero = json.results[0];
        if (!specificHero) {
            throw new Error(`Hero with name ${name} not found`);
        }
        
        // console.log(specificHero.powerstats); // debug
        // heroName.innerText = `${specificHero.name}`;
        // herroImage.innerHTML = `<img src="${specificHero.image.url}" height=200 width=200/>`;
        // //* get heroe info
        // heroInfo.innerHTML = getHeroInfo(specificHero);
    })


      // Redirect to results page with query parameter
    //   const queryParams = new URLSearchParams({ heroName: specificHero.name });
    //   window.location.href = `../hero/hero.html?${queryParams.toString()}`;
    // })

    //     console.log(specificHero.powerstats); // debug
    //     heroName.innerText = `${specificHero.name}`;
    //     herroImage.innerHTML = `<img src="${specificHero.image.url}" height=200 width=200/>`;
    //     //* get heroe info
    //     heroInfo.innerHTML = getHeroInfo(specificHero);
    // })

    
    

    .catch(error => {
        console.error(error.message);
        heroName.innerText = 'Error';
        herroImage.innerHTML = '';
        heroInfo.innerText = 'Hero not found';
    });
}

 



 //! Search Button
 const searchButton = document.querySelector('.searchButton')

 searchButton.onclick = (event) => {
    event.preventDefault(); // Prevent form submission
  
    const userInputValue = userInput.value;
    const queryParams = new URLSearchParams({ heroName: userInputValue });
    window.location.href = `./hero.html?${queryParams.toString()}`;
  };


