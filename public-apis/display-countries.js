const flagsArea = document.getElementById("flags-area");
const overlayArea = document.getElementById("overlay");

const closeIcon = document.querySelector(".close-icon");

closeIcon.addEventListener("click", () => {
  overlayArea.style.display = "none";
});

const appendCountry = (countryData) => {
  const imgElement = document.createElement("img");
  imgElement.src = countryData.flags.png;

  imgElement.addEventListener("click", () => {
    overlayArea.style.display = "flex";
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
