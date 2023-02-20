import React from 'react'
import colors from './components/colors'
import './App.css'
import SideBar from './components/SideBar'
import ActiveChat from './components/ActiveChat'

function App() {
  return (
    <div className='app-container' style={{backgroundColor: colors.background}}>
      <div className='app-inner-container d-flex flex-row'>
        <SideBar />
        <ActiveChat />
      </div>
    </div>
  )
}

export default App