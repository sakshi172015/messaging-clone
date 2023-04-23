import React from 'react'
import { useSelector } from 'react-redux'
import colors from './components/colors'
import './App.css'
import SideBar from './components/SideBar'
import ActiveChat from './components/ActiveChat'
import Login from './components/Login'

function App() {
  const user = useSelector(state => state.user)
  if(user._id.length === 0)
    return (
      <Login />
    )
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