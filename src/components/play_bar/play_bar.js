import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons'
import './play_bar_style.css';

const PlayBar = () => {
  return (
    <div className="play_bar_content">
      <div className="track_data" >
        <div className="track_image">
          <p>1</p>
        </div>
        <div className="track_info">
          <h3>Cancion</h3>
          <p>Artista-Album</p>
        </div>
      </div>
      <div className="play_tools" >
        <FontAwesomeIcon className="previus_track" icon={faStepBackward} />
        <FontAwesomeIcon className="play_track" icon={faPlayCircle} />
        <FontAwesomeIcon className="next_track" icon={faStepForward} />
      </div>
      <div className="play_config" >
        <p>3rd</p>
      </div>
    </div>
  )
}

export default PlayBar
