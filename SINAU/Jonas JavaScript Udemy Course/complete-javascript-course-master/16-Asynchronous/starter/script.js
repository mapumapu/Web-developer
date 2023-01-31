'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/////////////////////////////////////////////
// AJAX Call: XMLHttpRequest (Old ways)
/////////////////////////////////////////////

/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
        <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M People</p>
            <p class="country__row"><span>🗣️</span>${Object.values(
              data.languages
            )}</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>`;
        
        // console.log(Object.values(data.currencies));
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
      });
    };
    
    getCountryData('indonesia');
    */

/////////////////////////////////////////////
// Callback Hell
/////////////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
     <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )}M People</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
    <p class="country__row"><span>💰</span>${
      Object.values(data.currencies)[0].name
    }</p>
    </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

/*
const getCountryAndNeighbourData = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country 2
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2[0]);

      renderCountry(data2[0], 'neighbour');
    });
  });
};

// getCountryAndNeighbourData('indonesia');
getCountryAndNeighbourData('indonesia');

// Callback hell
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

/////////////////////////////////////////////
// Promises and the Fetch API
/////////////////////////////////////////////
// Consuming Promises
/////////////////////////////////////////////
// Chaining Promises
/////////////////////////////////////////////
// Handling Rejected Promises
/////////////////////////////////////////////
// Throwing Errors Manually
/////////////////////////////////////////////

/*
const request = fetch(`https://restcountries.com/v3.1/name/indonesia`);
*/
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

/*
const getJSON = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(err);
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('indonesia');
});
*/

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then()
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(error => {
//       console.error(error);
//       renderError(`Something went wrong ${error}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

/////////////////////////////////////////////
// The Event Loop in Practice
/////////////////////////////////////////////

/*
// 1
console.log(`Test start`);
// 4
setTimeout(() => console.log('0 sec timer'), 0);
// 3
Promise.resolve('Resolved promise 1').then(response => console.log(response));

Promise.resolve('Resolved promise 2').then(response => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(response);
});
// 2
console.log(`Test end`);
*/

/////////////////////////////////////////////
// Build a Simple Promise
/////////////////////////////////////////////

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening...');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN!');
    } else {
      reject(new Error('You LOSE!'));
    }
  }, 2000);
});

lotteryPromise
  .then(response => console.log(response))
  .catch(error => console.error(error));

// Promisifying setTimeout (Real world example)
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));

*/

// Same as this but above is better
/*
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

// Promise.resolve('123').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

/////////////////////////////////////////////
// Promisifying the Geolocation API
/////////////////////////////////////////////

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   error => reject(error)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(position => console.log(position));

const whereAmI = function () {
  getPosition()
    .then(position => {
      const { latitude, longitude } = position.coords;

      return fetch(
        `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=227040645600541812098x37491`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(error => console.error(`Something went wrong ${error.message}`));
};

btn.addEventListener('click', whereAmI);
*/

/////////////////////////////////////////////
// Consuming Promises with Async/Await (Modern ways)
/////////////////////////////////////////////
/////////////////////////////////////////////
// Error Handling With try...catch
/////////////////////////////////////////////
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  // Geolocation
  try {
    const position = await getPosition();
    const { latitude, longitude } = position.coords;

    // Reverse geocoding
    const responseGeo = await fetch(
      `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=227040645600541812098x37491`
    );
    if (!responseGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await responseGeo.json();

    // Contry Data
    const responseCountry = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!responseCountry.ok) throw new Error('Problem getting country');

    const dataCountry = await responseCountry.json();
    renderCountry(dataCountry[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (error) {
    console.error(error.message);
    renderError(error.message);

    // Reject promise returned from async function
    throw error;
  }
};
*/

// simple simulation try catch
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (error) {
//   alert(error.message);
// }

/////////////////////////////////////////////
// Returning Values from Async Functions
/////////////////////////////////////////////

/*
console.log('1. Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2. ${city}`))
//   .catch(error => console.log(`2. ${error.message}`))
//   .finally(() => console.log('3. Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2. ${city}`);
  } catch (error) {
    console.error(`2. ${error.message}`);
  }
  console.log('3. Finished getting location');
})();
*/

/////////////////////////////////////////////
// Running Promises in Parallel
/////////////////////////////////////////////

/*
const getJSON = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);

    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // will loaded
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    // will loaded in same time
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital).map(d => d[0]));
  } catch (error) {
    console.error(error.message);
  }
};
get3Countries('indonesia', 'thailand', 'malaysia');
*/

/////////////////////////////////////////////
// Other Promise Combinators: race, allSettled and any
/////////////////////////////////////////////
