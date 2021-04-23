import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faStepBackward, faStepForward, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import ReactAudioPlayer from 'react-audio-player';
import Slider from '@material-ui/core/Slider';
import './play_bar_style.css';


// Recibe un album y por lo tanto sus tracks
const PlayBar = (props) => {

  const [album, setAlbum] = useState('');
  const [currentTracks, setCurrentTracks] = useState('');
  const [play, changePlay] = useState(false);
  const [number, setNumber] = useState(0);
  const [volume, setVolumen] = useState(30);


  useEffect(() => {
    setAlbum(props.currentAlbum);
    console.log(props.currentAlbum);
    setCurrentTracks(props.currentAlbum.tracks);
    changePlay(false);
    setNumber(0);
  }, [props.currentAlbum, currentTracks]);

  const handleVolumen = (event, newValue) => {
    const songPlayer = document.getElementById('music_player');

    if (songPlayer) {
      setVolumen(newValue);
      songPlayer.volume = newValue / 100;
    }


  };

  const mutearAudio = () => {
    const songPlayer = document.getElementById('music_player');

    if (songPlayer) {
      songPlayer.volume = 0.0;
      setVolumen(0);
    }

  }

  const nextSong = () => {
    // console.log('nextSong');
    if (currentTracks) {
      const lista = Object.values(currentTracks.data);
      // console.log(lista.length);
      if (number === (lista.length - 1)) {
        // console.log('ultima cancion');
      } else {
        changePlay(false);
        setNumber(number + 1);
        // console.log(number);
      }

    }
  }

  const previusSong = () => {
    // console.log('previusSong');
    if (currentTracks) {
      const lista = Object.values(currentTracks.data);
      if (number >= 1 && number < lista.length) {
        setNumber(number - 1);
        changePlay(false);
        // console.log(number);
      }
    }
  }

  const resumeStopTrack = () => {
    const songPlayer = document.getElementById('music_player');
    if (songPlayer) {
      if (play) {
        songPlayer.pause();
      } else {
        songPlayer.play();
      }
    }
  }

  return (
    <div className="play_bar_content">
      <div className="track_data" >
        <div className="track_image">
          {album !== '' ? <img src={props.currentAlbum.cover_small} alt="no imagen" /> : <p>  </p>}
        </div>

        <div className="track_info">
          {album !== '' ? currentTracks ? <p> {currentTracks.data[number].title} </p> : <h3> Sin cancion </h3> : <h3> Sin cancion </h3>}
          {album !== '' ? <p>{props.currentAlbum.title}</p> : <p> Escoga una cancion </p>}
        </div>
      </div>
      <div className="play_tools" >

        <FontAwesomeIcon className="previus_track" icon={faStepBackward} onClick={() => previusSong()} />
        <FontAwesomeIcon className="play_track" icon={faPlayCircle} onClick={() => resumeStopTrack()} />
        <FontAwesomeIcon className="next_track" icon={faStepForward} onClick={() => nextSong()} />

        {currentTracks ? <ReactAudioPlayer id="music_player"
          autoPlay
          src={currentTracks.data[number].preview || ''}
          onPause={() => changePlay(false)}
          onPlay={() => changePlay(true)}
        /> : <p> sin items </p>}

      </div>
      <div className="play_config" >
        <p>Volumen</p>
        <div className="slider">
          <Slider value={volume} onChange={handleVolumen} aria-labelledby="continuous-slider" />
        </div>

        <FontAwesomeIcon
          className={volume === 0 ? "muted" : 'not-muted'}
          icon={faVolumeMute}
          onClick={() => mutearAudio()} />
      </div>
    </div>
  )
}



export default PlayBar
