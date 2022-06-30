const CLIENT_ID = `6tI5A_QwjrSvcr7pIpcotqNBP0Rip8GSyme9LrcsfsE`;
const API_URL = `https://api.unsplash.com/search/photos/?client_id=${CLIENT_ID}&per_page=30&query=`;

const getResponse = (query, setState) => {
  fetch(API_URL + query)
    .then(res => res.json())
    .then(data => setState(data.results));
};

const photosLayout = photosData => {
  return photosData.map(photo => ({
    key: photo.id,
    src: photo.urls.regular,
    alt: photo.alt_description,
    width: photo.width,
    height: photo.height,
  }));
};

function setElementStyle(element, elementStyle, params) {
  return (element.style[elementStyle] = params);
}

export { getResponse, photosLayout, setElementStyle };
