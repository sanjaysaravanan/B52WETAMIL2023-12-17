const apiUrl =
  "https://api.thecatapi.com/v1/images/search?api_key=live_c660lWljceASEfAcLoQmFchc2cFnBq1CHfmD32XfKMurzBEGa1FseqKxWznfqkhh";

const imageArea = document.getElementById("cat-image");

const overlayElement = document.getElementById("overlay");

const loadCatImage = ({ url }) => {
  // replace the entire image element or tag
  // imageArea.innerHTML = "";
  // const imgElement = document.createElement("img");
  // imgElement.src = image;
  // imageArea.appendChild(imgElement);

  // changing only the src of the img element
  const imgElement = document.getElementById("img-element");
  imgElement.src = url;
};

const sleepTime = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved");
    }, 1000);
  });

const getRandomCat = async () => {
  overlayElement.style.display = "flex";
  const response = await fetch(apiUrl);
  const data = await response.json();

  loadCatImage(data[0]);
  overlayElement.style.display = "none";
};

getRandomCat();
