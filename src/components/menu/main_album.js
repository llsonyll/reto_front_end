import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import PlayImage from './../play_image';

function MainAlbum(props) {
  const album = props.album;
  // const [album, setAlbum] = useState(props.album);
  // console.log(album);

  return (
    <div className="main__album">
      <div className="album_image " onClick={() => props.playThisAlbum(album)}>
        <PlayImage image_url={album.cover_xl || ''} />
      </div>
      <div className="album_info">
        <img src={album.artist.picture_xl} alt="no imagen" />
        <div className="album_info_content">
          <div className="album_info_text">
            <h3> {album.artist.name}</h3>
            <div className="album_title">
              <h5> {album.title} </h5>
              <p> {album.fans} seguidores </p>
            </div>
          </div>
          <div className="album_actions">
            <div className="button play" onClick={() => props.playThisAlbum(album)}> Reproducir </div>
            <div className="button follow"> Seguir </div>
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainAlbum
