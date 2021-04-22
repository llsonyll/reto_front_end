import React from 'react'
import PlayImageSmall from './../play_image_small';

export default function ItemBusqueda(props) {
  const album = props.album;
  console.log(album);
  if (album) {
    return (
      <div className="item__busqueda">
        <PlayImageSmall image_url={album.cover_small} />
      </div>
    )
  } else {
    return (
      <div className="item__busqueda"> ERROR </div>
    )
  }
}
