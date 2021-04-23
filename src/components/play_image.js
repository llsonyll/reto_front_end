import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const PlayImage = (props) => {
  return (
    <div className="play_image">
      <img src={props.image_url} alt="no imagen" />
      <FontAwesomeIcon className="playIcon" icon={faPlay} onClick={props.playThisAlbum} />
    </div>
  )
}

export default PlayImage;
