import React, { useState } from 'react';

import Buscador from './buscador';
import MainAlbum from './main_album';
import ItemBusqueda from './item_busqueda';
import './menu_style.css';

const Menu = (props) => {
  const [resultsState, setResultsState] = useState({
    results: props.items,
  });

  console.log(resultsState.results);

  const firstAlbum = resultsState.results[0];

  return (

    <div className="menu">
      <Buscador onSearch={setResultsState} />
      <MainAlbum album={firstAlbum} />
      <h2> Resultados </h2>
      <div className="busqueda__resultados">
        {resultsState.results.map((album) => {
          return <ItemBusqueda key={album.id} album={album} />
        })}
      </div>
    </div>
  )
}



export default Menu
