import React from 'react'

import './side_menu_style.css';

const SideMenu = () => {
  return (
    <div className="side_menu">
      <img src="./../../../images/foxbel-music.png" alt="LogoImagen" />
      <h2>Mi Libreria</h2>
      <a href="/"> Recientes </a>
      <a href="/"> Artistas </a>
      <a href="/"> Albums </a>
      <a href="/"> Canciones </a>
      <a href="/"> Estaciones </a>
      <h2>Playlist</h2>
      <a href="/"> Metal </a>
      <a href="/"> Para bailar </a>
      <a href="/"> Rock 90s </a>
      <a href="/"> Baladas </a>
    </div>
  )
}

export default SideMenu
