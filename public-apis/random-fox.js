const apiUrl = "https://randomfox.ca/floof/";

const imageArea = document.getElementById("fox-image");

const overlayElement = document.getElementById("overlay");

const loadFoxImage = ({ image }) => {
  // replace the entire image element or tag
  // imageArea.innerHTML = "";
  // const imgElement = document.createElement("img");
  // imgElement.src = image;
  // imageArea.appendChild(imgElement);

  // changing only the src of the img element
  const imgElement = document.getElementById("img-element");
  imgElement.src = image;
};

const sleepTime = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved");
    }, 1000);
  });

const getRandomFox = async () => {
  overlayElement.style.display = "flex";
  const response = await fetch(apiUrl);
  const data = await response.json();

  loadFoxImage(data);
  overlayElement.style.display = "none";
};

getRandomFox();
