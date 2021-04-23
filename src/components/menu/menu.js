import React, { useState } from 'react';

import Buscador from './buscador';
import MainAlbum from './main_album';
import ItemBusqueda from './item_busqueda';
import './menu_style.css';

const Menu = (props) => {
  const [resultsState, setResultsState] = useState({
    results: props.items,
  });

  const [firstAlbum, setFirstAlbum] = useState(resultsState.results[0]);

  // console.log(resultsState.results);

  return (

    <div className="menu">
      <Buscador firstAlbum={setFirstAlbum} searchAlbumsResults={setResultsState} />
      <MainAlbum album={firstAlbum} playThisAlbum={props.changeAlbum} />
      <h2> Resultados </h2>
      <div className="busqueda__resultados">
        {resultsState.results.map((album) => {
          return <ItemBusqueda key={album.id} album={album} playThisAlbum={props.changeAlbum} />
        })}
      </div>
    </div>
  )
}



export default Menu
