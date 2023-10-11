// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4e63ec92e0mshc0f3a11dd2b8a08p147ab0jsn9b0c1360b55b',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};


const getWeather = (city) => {
  cityName.innerHTML = city;

  // fetch(url, options)
  // .then(function (response) {
  //   return response.text();
  // })
  // .then(function (result) {
  //   console.log(result);
  // })


  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

      console.log(response)

      // cloud_pct.innerHTML = response.cloud_pct
      temp.innerHTML = response.temp
      temp2.innerHTML = response.temp
      feels_like.innerHTML = response.feels_like
      humidity.innerHTML = response.humidity
      humidity2.innerHTML = response.humidity
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      wind_speed.innerHTML = response.wind_speed
      wind_speed2.innerHTML = response.wind_speed
      wind_degrees.innerHTML = response.wind_degrees
      sunrise.innerHTML = response.sunrise
      sunset.innerHTML = response.sunset

    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
  e.preventDefault(); // Does not reload
  getWeather(city.value);
})

getWeather("Delhi");

// .catch(function (error) {
//   console.error(error);
// });

// const getWeather2 = (city) => {

//   if (city == "Mumbai") {

//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
//       .then(response => response.json())
//       .then((response) => {

//         console.log(response)

//         // cloud_pct.innerHTML = response.cloud_pct
//         mumbai_temp.innerHTML = response.mumbai_temp
//         mumbai_feels_like.innerHTML = response.mumbai_feels_like
//         mumbai_humidity.innerHTML = response.mumbai_humidity
//         mumbai_min_temp.innerHTML = response.mumbai_min_temp
//         mumbai_max_temp.innerHTML = response.mumbai_max_temp
//         mumbai_wind_speed.innerHTML = response.mumbai_wind_speed
//         mumbai_wind_degrees.innerHTML = response.mumbai_wind_degrees
//         mumbai_sunrise.innerHTML = response.mumbai_sunrise
//         mumbai_sunset.innerHTML = response.mumbai_sunset

//       })
//       .catch(err => console.error(err));

//     submit.addEventListener("click", (e) => {
//       getWeather2(city.value);
//     })
//   }

//   if (city == "Bangalore") {

//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
//       .then(response => response.json())
//       .then((response) => {

//         console.log(response)

//         // cloud_pct.innerHTML = response.cloud_pct
//         bangalore_temp.innerHTML = response.bangalore_temp
//         bangalore_feels_like.innerHTML = response.bangalore_feels_like
//         bangalore_humidity.innerHTML = response.bangalore_humidity
//         bangalore_min_temp.innerHTML = response.bangalore_min_temp
//         bangalore_max_temp.innerHTML = response.bangalore_max_temp
//         bangalore_wind_speed.innerHTML = response.bangalore_wind_speed
//         bangalore_wind_degrees.innerHTML = response.bangalore_wind_degrees
//         bangalore_sunrise.innerHTML = response.bangalore_sunrise
//         bangalore_sunset.innerHTML = response.bangalore_sunset

//       })
//       .catch(err => console.error(err));

//     submit.addEventListener("click", (e) => {
//       getWeather2(city.value);
//     })
//   }

//   if (city == "Patna") {

//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
//       .then(response => response.json())
//       .then((response) => {

//         console.log(response)

//         // cloud_pct.innerHTML = response.cloud_pct
//         patna_temp.innerHTML = response.patna_temp
//         patna_feels_like.innerHTML = response.patna_feels_like
//         patna_humidity.innerHTML = response.patna_humidity
//         patna_min_temp.innerHTML = response.patna_min_temp
//         patna_max_temp.innerHTML = response.patna_max_temp
//         patna_wind_speed.innerHTML = response.patna_wind_speed
//         patna_wind_degrees.innerHTML = response.patna_wind_degrees
//         patna_sunrise.innerHTML = response.patna_sunrise
//         patna_sunset.innerHTML = response.patna_sunset

//       })
//       .catch(err => console.error(err));

//     submit.addEventListener("click", (e) => {
//       getWeather2(city.value);
//     })
//   }


// }

// getWeather2("Mumbai");
// getWeather2("Bangalore");
// getWeather2("Patna");

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
  .then(response => response.json())
  .then((response) => {

    console.log(response)

    // cloud_pct.innerHTML = response.cloud_pct
    mumbai_temp.innerHTML = response.temp
    mumbai_feels_like.innerHTML = response.feels_like
    mumbai_humidity.innerHTML = response.humidity
    mumbai_min_temp.innerHTML = response.min_temp
    mumbai_max_temp.innerHTML = response.max_temp
    mumbai_wind_speed.innerHTML = response.wind_speed
    mumbai_wind_degrees.innerHTML = response.wind_degrees
    mumbai_sunrise.innerHTML = response.sunrise
    mumbai_sunset.innerHTML = response.sunset

  })
  .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Patna', options)
  .then(response => response.json())
  .then((response) => {

    console.log(response)

    // cloud_pct.innerHTML = response.cloud_pct
    patna_temp.innerHTML = response.temp
    patna_feels_like.innerHTML = response.feels_like
    patna_humidity.innerHTML = response.humidity
    patna_min_temp.innerHTML = response.min_temp
    patna_max_temp.innerHTML = response.max_temp
    patna_wind_speed.innerHTML = response.wind_speed
    patna_wind_degrees.innerHTML = response.wind_degrees
    patna_sunrise.innerHTML = response.sunrise
    patna_sunset.innerHTML = response.sunset

  })
  .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
  .then(response => response.json())
  .then((response) => {

    console.log(response)

    // cloud_pct.innerHTML = response.cloud_pct
    bangalore_temp.innerHTML = response.temp
    bangalore_feels_like.innerHTML = response.feels_like
    bangalore_humidity.innerHTML = response.humidity
    bangalore_min_temp.innerHTML = response.min_temp
    bangalore_max_temp.innerHTML = response.max_temp
    bangalore_wind_speed.innerHTML = response.wind_speed
    bangalore_wind_degrees.innerHTML = response.wind_degrees
    bangalore_sunrise.innerHTML = response.sunrise
    bangalore_sunset.innerHTML = response.sunset

  })
  .catch(err => console.error(err));