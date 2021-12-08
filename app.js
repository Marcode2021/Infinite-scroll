const imageContainer = document.querySelector(".image-container");
const loader = document.querySelector(".loader");

let photosArray = [];

// Unsplash API
const count = 5;
const apiKey = "TqShWxmGAp13DoKufVUl2__paZ2kwsGrSy65TySRnmA";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Check if all images were loaded

// Create Elements for Link & photos, add to DOM
const displayPhotos = function () {
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to unsplash
    const item = `<a href="${photo.links.html} target="_blank"
        ><img
          src="${photo.links.download}"
          alt="image"
        />
      </a>`;
    //Event listener, check when each is finished loading

    imageContainer.insertAdjacentHTML("beforeend", item);
  });
};

// Get photos from API
const getPhotos = async function () {
  try {
    const res = await fetch(apiURL);
    photosArray = await res.json();
    displayPhotos();
  } catch (err) {
    // Catch error here
    console.error(err);
  }
};

// Check to see if scrolling near bottom of page, Load more photos
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    getPhotos();
    console.log(window.scrollY);
  }
});

// Init function
getPhotos();
