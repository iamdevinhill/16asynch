'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderError = function(msg) {
//     countriesContainer.insertAdjacentText('beforeend', msg);
//     countriesContainer.style.opacity = 1;
// }

// const renderCountry = function(data, className = '') {
//     const html = `
//     <article class="country ${className}">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population/ 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//         </article>
// `;
// }

///////////////////////////////////////

// countriesContainer.insertAdjacentHTML('beforeend', html);
// countriesContainer.style.opacity = 1;
// }

// const getCountryAndNeighbor = function(country) {

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();
// console.log(request.responseText);

// request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data)

//     ///////////////////////////////////////////
//     // get neighbor country
//     const [neighbor] = data.borders;

//     if(!neighbor) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function() {
//         const data2 = JSON.parse(this.responseText);
//         renderCountry(data2, 'neighbor')
//     })
// })
// };

// getCountryAndNeighbor('usa');

// const request2 = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request2)



// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(response => response.json())
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbor = data[0].borders[0]

//             if(!neighbor) return;
//             return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//         } )
//         .then(response => response.json())
//         .then(data => renderCountry(data, 'neighbor'))
//         .catch(err => alert(err))
// };

// getCountryData('portugal')

//////////////////////////////////////////////////////////////////////

const whereAmI = function(lat, lng) {
    fetch(`https://geogode.xyz/${lat},${lng}?geoit=json`)
        .then(res => res.json())
        .then(data => {
        console.log(data);
    })
}

whereAmI(52.508, 13.381)
