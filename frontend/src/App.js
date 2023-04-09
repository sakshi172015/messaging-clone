import React, {useSelector} from 'react'
import colors from './components/colors'
import './App.css'
import SideBar from './components/SideBar'
import ActiveChat from './components/ActiveChat'
import Login from './components/Login'

function App() {
  // const user = useSelector(state => state.user)
  // console.log({user})
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