console.log("Hello, World!");

// Create a city card
function createCityCard(cityTimeZone) {
  let container = document.querySelector(".clock-container");

  // Prevent empty selection
  if (!cityTimeZone) {
    return;
  }

  // Get city name
  let cityName = cityTimeZone.split("/")[1].replace("_", " ");

  if (cityName == "Kolkata") {
    cityName = "Mumbai";
  }
  // Create unique id
  let cityId = cityName.toLowerCase().replace(" ", "-");

  // Prevent duplicates
  if (document.querySelector(`#${cityId}`)) {
    return;
  }

  // Card HTML
  let cardHTML = `
    <div class="clock-card"
         id="${cityId}"
         data-timezone="${cityTimeZone}">

      <button class="remove-btn">×</button>

      <h2>${cityName}</h2>

      <p class="country"></p>

      <div class="time"></div>

      <p class="date"></p>

      <span class="time-period"></span>
    </div>
  `;

  // Add to page
  container.insertAdjacentHTML("beforeend", cardHTML);
  //   container.innerHTML += cardHTML;

  // Remove button
  let newCard = document.querySelector(`#${cityId}`);
  let removeButton = newCard.querySelector(".remove-btn");
  removeButton.addEventListener("click", function () {
    newCard.remove();
  });
}

// Update all clocks
function updateTime() {
  let cards = document.querySelectorAll(".clock-card");

  cards.forEach((card) => {
    let timezone = card.dataset.timezone;
    let cityTime = moment().tz(timezone);
    let country = timezone.split("/")[0];

    card.querySelector(".country").innerHTML = country;

    card.querySelector(".date").innerHTML =
      cityTime.format("dddd, MMMM D, YYYY");

    card.querySelector(".time").innerHTML = cityTime.format("HH:mm:ss");

    card.querySelector(".time-period").innerHTML = cityTime.format("A");
  });
}

// Add city from dropdown
function updateCity(event) {
  let cityTimeZone = event.target.value;

  createCityCard(cityTimeZone);

  // Reset select
  event.target.value = "";
}

// Select dropdown
let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);

// Default cities
createCityCard("America/Los_Angeles");
createCityCard("Europe/Paris");

// Start clock
updateTime();
setInterval(updateTime, 1000);
