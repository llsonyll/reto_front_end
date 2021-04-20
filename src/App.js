import React from 'react'

import './app.css';
import Menu from './components/menu/menu';
import SideMenu from './components/side-menu/side_menu';

const App = () => {
  return (
    <div className="App">
      <SideMenu />
      <Menu />
    </div>
  )
}

export default App
