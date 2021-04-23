
const axios = require('axios');

const searchArtist = (artisName) => {
  var search = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: { q: 'eminem' },
    headers: {
      'x-rapidapi-key': '2df2623edemsh9d3a25c657e3df6p1a3376jsn1aa261f1851a',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  axios.request(search).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

const fetchRandom = () => {
  var options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/radio/123',
    headers: {
      'x-rapidapi-key': '2df2623edemsh9d3a25c657e3df6p1a3376jsn1aa261f1851a',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

const getAlbum = async (id) => {
  var options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/album/' + id,
    headers: {
      'x-rapidapi-key': '2df2623edemsh9d3a25c657e3df6p1a3376jsn1aa261f1851a',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };
  return axios.request(options).then(function ({ data }) {
    return data;
  }).catch(function (error) {
    console.error(error);
  });
}

const getInitialData = async () => {
  var initialData = [];
  var albumRamdom = 119606;
  for (let index = 0; index < 10; index++) {
    var newAlbum = await getAlbum(albumRamdom + (index * 12));
    initialData.push(newAlbum);
  }
  return initialData;
}

const getSearchAlbum = async (searchCriteria) => {
  var options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: { q: searchCriteria },
    headers: {
      'x-rapidapi-key': '2df2623edemsh9d3a25c657e3df6p1a3376jsn1aa261f1851a',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  return axios.request(options).then(function ({ data }) {
    return data;
  }).catch(function (error) {
    console.error(error);
  });
}

export { searchArtist, fetchRandom, getInitialData, getSearchAlbum }

