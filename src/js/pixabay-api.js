'use strict';
const API_KEY = '43854532-e18365a3905b9485abf8e557c';

const BASE_URL = 'https://pixabay.com/api/';

// export default async function getImages(searchWord) {
//   const searchList = new URLSearchParams({
//     key: `${API_KEY}`,
//     q: searchWord,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   });

//   const imagesData = await axios.get(`${BASE_URL}?${searchList}`);
//   return imagesData;
// }

import axios from 'axios';

export default async function getImages(searchWord, page = 1) {
  const searchList = new URLSearchParams({
    key: '43854532-e18365a3905b9485abf8e557c',
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  });

  const imagesData = await axios.get(`${BASE_URL}?${searchList}`);

  return imagesData.data;
}
