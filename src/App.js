import React, { useEffect, useState } from 'react'


import './app.css';
import Menu from './components/menu/menu';
import SideMenu from './components/side-menu/side_menu';
import PlayBar from './components/play_bar/play_bar';
import { getInitialData } from './API/api_call';

const App = () => {
  const [items, setItems] = useState('');

  const [currentAlbum, setCurrentAlbum] = useState('');

  useEffect(() => {
    getInitialData().then(resp => {
      setItems(resp || '');
    });
  }, []);

  return (
    <div className="App">
      <div className="app_content">
        <SideMenu />
        {items !== '' ? <Menu items={items} changeAlbum={setCurrentAlbum} /> : <div> Cargando </div>}
      </div>
      <div className="play_bar"><PlayBar currentAlbum={currentAlbum} /></div>
    </div>
  )

}

export default App;
