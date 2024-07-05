let inputSearch = document.getElementById("input-search");
let btnSearch = document.getElementById("btn-search");
let dayOne = document.getElementById("day-one");
let dayTwo = document.getElementById("day-two");
let dayThree = document.getElementById("day-three");
let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

getCurrentWeather();

function getCityFromInput() {
  let city = inputSearch.value;
  getCurrentWeather(city);
}

async function getCurrentWeather(city = "Alexandria") {
  try {
    let response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=85b97471fed14581b77150541240307&q=${city}&days=3`
    );
    let data = await response.json();
    displayDayOne(data);
  } catch (error) {
    console.log(error);
  }
}

function displayDayOne(data) {
  let weatherDetails = data;
  let date = new Date(weatherDetails.location.localtime);
  let dayName = daysOfWeek[date.getDay()];
  let month = monthsOfYear[date.getMonth()];
  let dayNum = date.getDate();

  let weatherDayOne = `
                    <div
                    class="rounded-5 d-flex justify-content-between p-2 head-col"
                  >
                    <span>${dayName}</span>
                    <span><span>${dayNum}</span> ${month}</span>
                  </div>
                  <div class="p-3">
                    <span class="text-color fs-4">${weatherDetails.location.name}</span>
                    <p class="temperature">${weatherDetails.current.temp_c}°C</p>
                    <div>
                      <img src="${weatherDetails.current.condition.icon}" alt="icon" />
                    </div>
                    <span class="weather-condition">${weatherDetails.current.condition.text}</span>
                    <div class="d-flex">
                      <div class="me-3">
                        <img
                          src="images/icon-umberella-2x.png"
                          class="image-icon"
                          alt="umberella"
                        />
                        <span>20%</span>
                      </div>
                      <div class="me-3">
                        <img
                          src="images/icon-wind-2x.png"
                          class="image-icon"
                          alt="wind"
                        />
                        <span>18km/h</span>
                      </div>
                      <div class="me-3">
                        <img
                          src="images/icon-compass-2x.png"
                          class="image-icon"
                          alt="compass"
                        />
                        <span>East</span>
                      </div>
                    </div>
                  </div>

  
  `;
  dayOne.innerHTML = weatherDayOne;
  displayDayTwo(dayNum, weatherDetails);
}

function displayDayTwo(dayNum, weatherDetails) {
  let dayNumFuntwo = (dayNum += 1);
  let dayNumFunthree = (dayNum += 1);
  let weatherDetailsFuntwo = weatherDetails;
  let forecastDayTwoArr = weatherDetailsFuntwo.forecast.forecastday;
  let tomorrow;
  for (let i = 0; i < forecastDayTwoArr.length; i++) {
    let dateDayTwo = new Date(forecastDayTwoArr[i].date);
    let num = dateDayTwo.getDate();
    if (num == dayNumFuntwo) {
      tomorrow = forecastDayTwoArr[i];
    } else if (num == dayNumFunthree) {
      displayDayThree(forecastDayTwoArr[i]);
    }
  }
  let dayNameTwo = new Date(tomorrow.date);
  let WeatherTheSecondDay = `
                    <p class="head-col-2 p-2 m-0 rounded-5">${
                      daysOfWeek[dayNameTwo.getDay()]
                    }</p>
                    <div
                      class="d-flex justify-content-center align-items-center h-100"
                    >
                      <div>
                        <div>
                          <img src="${tomorrow.day.condition.icon}" alt="" />
                        </div>
                        <p class="fs-3 fw-bold m-0">${
                          tomorrow.day.avgtemp_c
                        }°C</p>
                        <p class="fs-6 text-color">${
                          tomorrow.day.maxtemp_c
                        }o</p>
                        <span class="weather-condition">${
                          tomorrow.day.condition.text
                        }</span>
                      </div>
                    </div>

  `;
  dayTwo.innerHTML = WeatherTheSecondDay;
}

function displayDayThree(theThirdDay) {
  let weatherDetailsFunthree = theThirdDay;
  let dayNameThree = new Date(weatherDetailsFunthree.date);

  let WeatherTheThridDay = `
                    <p class="head-col p-2 m-0 rounded-5">${
                      daysOfWeek[dayNameThree.getDay()]
                    }</p>
                  <div
                    class="d-flex justify-content-center align-items-center h-100"
                  >
                    <div>
                      <div>
                        <img src="${
                          weatherDetailsFunthree.day.condition.icon
                        }" alt="" />
                      </div>
                      <p class="fs-3 fw-bold m-0">${
                        weatherDetailsFunthree.day.avgtemp_c
                      }°C</p>
                      <p class="fs-6 text-color">${
                        weatherDetailsFunthree.day.maxtemp_c
                      }o</p>
                      <span class="weather-condition">${
                        weatherDetailsFunthree.day.condition.text
                      }</span>
                    </div>
  `;
  dayThree.innerHTML = WeatherTheThridDay;
}

btnSearch.addEventListener("click", getCityFromInput);
