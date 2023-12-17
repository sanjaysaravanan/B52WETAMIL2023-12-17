const flagsArea = document.getElementById("flags-area");
const overlayArea = document.getElementById("overlay");

const closeIcon = document.querySelector(".close-icon");

closeIcon.addEventListener("click", () => {
  overlayArea.style.display = "none";
});

// display country element
const countryImage = document.querySelector(".country-card > img");
const countryName = document.querySelector(".country-card > h3");

const appendCountry = (countryData) => {
  const imgElement = document.createElement("img");
  imgElement.src = countryData.flags.png;

  imgElement.addEventListener("click", () => {
    overlayArea.style.display = "flex";
    countryImage.src = countryData.flags.png;
    countryImage.alt = countryData.name.common;
    countryName.innerText = countryData.name.common;
  });

  flagsArea.appendChild(imgElement);
};

const getAllCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    const countries = await response.json();

    countries.forEach((country) => {
      appendCountry(country);
    });
  } catch (err) {
    console.log(err);
  }
};

getAllCountries();
