import React from 'react';

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
        <audio src="./../../music/10 - Until It Breaks.mp3" controls autoPlay> </audio>
      </div>
      <div className="play_config" >
        <p>3rd</p>
      </div>
    </div>
  )
}

export default PlayBar
