console.log("Hello, World!");

function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesCountryElement = losAngelesElement.querySelector(".country");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTimeperiodElement =
    losAngelesElement.querySelector(".time-period");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesCountryElement.innerHTML = "USA";
  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, MMMM D, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format("HH:mm:ss");
  losAngelesTimeperiodElement.innerHTML = losAngelesTime.format("A");

  // Paris
  let parisElement = document.querySelector("#paris");
  let parisCountryElement = parisElement.querySelector(".country");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTimeperiodElement = parisElement.querySelector(".time-period");
  let parisTime = moment().tz("Europe/Paris");

  parisCountryElement.innerHTML = "France";
  parisDateElement.innerHTML = parisTime.format("dddd, MMMM D, YYYY");
  parisTimeElement.innerHTML = parisTime.format("HH:mm:ss");
  parisTimeperiodElement.innerHTML = parisTime.format("A");
}

updateTime();
setInterval(updateTime, 1000);
