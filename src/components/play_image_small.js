import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const PlayImageSmall = (props) => {
  return (
    <div className="play_image_small">
      <img src={props.image_url} alt="no imagen" />
      <FontAwesomeIcon className="playIcon" icon={faPlay} onClick={() => console.log('click')} />
    </div>
  )
}

export default PlayImageSmall;
