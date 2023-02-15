import React from 'react'
import colors from './colors'
import '../styling/SideBar.css'
import MoreVert from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import GroupIcon from '@mui/icons-material/Group';
import {MoreVert, Chat, DataUsage, Group, SearchOutlined } from '@mui/icons-material'

export default function SideBar() {
  return (
    <div className='side-bar-container' style={{backgroundColor:colors.background}}>
        <div className='side-bar-top-bar d-flex flex-row align-items-center p-3 justify-content-between' style={{backgroundColor: colors.task_bar}}>
            <img src='https://img-getpocket.cdn.mozilla.net/404x202/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2F31b064cd-e914-46c4-9261-f5cf1e300786.jpeg' 
                className='side-bar-profile-pic' />
            <div className='d-flex d-flex align-items-end ml-auto'>
                <div className='p-3'><Group sx={{color: colors.icon, fontSize: 22}} /></div>
                <div className='p-3'><DataUsage sx={{color: colors.icon, fontSize: 22}} /></div>
                <div className='p-3'><Chat sx={{color: colors.icon, fontSize: 22}} /></div>
                <div className='p-3'><MoreVert sx={{color: colors.icon, fontSize: 22}} /></div>
            </div>
        </div>
        <div className="sidebar-search">
                <div className="sidebar-search-container">
                    <SearchOutlined />
                    <input placeholder="Search or start chat" />
                </div>
            </div>
    </div>
  )
}
