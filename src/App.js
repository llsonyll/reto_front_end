import React from 'react'

import './app.css';
import Menu from './components/menu/menu';
import SideMenu from './components/side-menu/side_menu';
import PlayBar from './components/play_bar/play_bar';

const App = () => {
  return (
    <div className="App">
      <div className="app_content">
        <SideMenu />
        <Menu />
      </div>
      <div className="play_bar"><PlayBar /></div>

    </div>
  )
}

export default App
