import React from 'react';

import Buscador from './buscador';
import MainArtist from './main_artist';
import ItemBusqueda from './item_busqueda';
import './menu_style.css';
// const axios = require('axios');



// Make a request for a user with a given ID

// const fetchRandom = () => {
//   axios.get('https://api.deezer.com/artist/27')
//     .then(resp => {
//       // handle success
//       console.log(resp);
//       return resp;
//     })
//     .catch(error => {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       console.log('aea');
//     });
// }

const Menu = () => {
  return (
    <div className="menu">
      <Buscador />
      <MainArtist />
      <h2> Resultados </h2>
      <div className="busqueda__resultados">
        <ItemBusqueda />
        <ItemBusqueda />
        <ItemBusqueda />
        <ItemBusqueda />
        <ItemBusqueda />
        <ItemBusqueda />
        <ItemBusqueda />
        <ItemBusqueda />
      </div>
    </div>
  )
}



export default Menu