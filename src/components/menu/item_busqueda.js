import React from 'react'
import PlayImageSmall from './../play_image_small';

export default function ItemBusqueda(props) {
  const album = props.album;
  // console.log(album);
  return (
    <div className="item__busqueda">
      <div className="item_foto" onClick={() => { album.error ? console.log('vacio') : props.playThisAlbum(album) }}>
        {
          album.artist ? <PlayImageSmall image_url={album.cover_small} /> : <div> No track </div>}

      </div>
      <div className="item_info">
        <h4> {album.title}</h4>
        {
          album.artist ? <p> {album.artist.name} </p> : <p> </p>
        }
      </div>

    </div>
  )
}
