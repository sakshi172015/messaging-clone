import React from 'react'
import colors from './components/colors'
import './App.css'
import SideBar from './components/SideBar'
import Chat from './components/Chat'

function App() {
  return (
    <div className='app-container' style={{backgroundColor: colors.background}}>
      <div className='app-inner-container d-flex flex-row'>
        <SideBar />
        <Chat />
      </div>
    </div>
  )
}

export default App