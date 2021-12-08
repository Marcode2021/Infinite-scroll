// Unsplash API
const count = 10;
const apiKey = "VOVZ36Ty6M0jfOWM-5UFCle8Iw5sT-mLBDVzLlLiXfE";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from API
const getPhotos = async function () {
  try {
    const res = await fetch(apiURL);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    // Catch error here
    console.error(err);
  }
};

// Init function
getPhotos();
