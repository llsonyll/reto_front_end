import React, { useState } from 'react';

import './side_menu_style.css';
import logo from './../../images/foxbel-music.png';

const SideMenu = () => {

  const [state, setState] = useState({
    currentOption: 'Recientes',
    listOptions: {
      Recientes: null,
      Artistas: null,
      Albums: null,
      Canciones: null,
      Estaciones: null,
    }
  });

  const optionsList = Object.keys(state.listOptions);

  return (
    <div className="side_menu">
      <img src={logo} alt="LogoImagen" />
      <h2>Mi Libreria</h2>

      {optionsList.map(option => (
        <p
          key={option}
          className={option === state.currentOption ? 'selected' : ''}
          onClick={() => {
            setState({ ...state, currentOption: option })
          }}>
          {option}
        </p>
      ))}

      <h2>Playlist</h2>
      <p> Metal </p>
      <p> Para bailar </p>
      <p> Rock 90s </p>
      <p> Baladas </p>
    </div>
  )
}

export default SideMenu
