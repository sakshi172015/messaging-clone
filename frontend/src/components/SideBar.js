import React from 'react'
import colors from './colors'
import '../styling/SideBar.css'
import { MoreVert, Chat, DataUsage, Group, Search, FilterList, ArchiveOutlined } from '@mui/icons-material'
import SideBarChat from './SideBarChat'

export default function SideBar() {
    const i = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  return (
    <div className='side-bar-container' style={{backgroundColor:colors.background}}>
        <div className='side-bar-top-bar d-flex flex-row align-items-center p-3 justify-content-between' style={{backgroundColor: colors.task_bar}}>
            <img src='https://img-getpocket.cdn.mozilla.net/404x202/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2F31b064cd-e914-46c4-9261-f5cf1e300786.jpeg' 
                className='side-bar-profile-pic' />
            <div className='d-flex d-flex align-items-end ml-auto'>
                <div className='p-2'><Group sx={{color: colors.icon, fontSize: 22}} /></div>
                <div className='py-2 px-3'><DataUsage sx={{color: colors.icon, fontSize: 22}} /></div>
                <div className='py-2 px-3'><Chat sx={{color: colors.icon, fontSize: 22}} /></div>
                <div className='p-2'><MoreVert sx={{color: colors.icon, fontSize: 22}} /></div>
            </div>
        </div>
        <div className='d-flex py-2 px-3 search-container' style={{backgroundColor: colors.background}}>
            <div className='d-flex search-sub-container' style={{backgroundColor: colors.task_bar}}>
                <div className='search-box d-flex p-2 align-items-center' style={{backgroundColor: colors.task_bar}}>
                    <Search sx={{color: colors.icon, fontSize: 18}} />
                </div>
                <input
                    className='input-box d-flex'
                    style={{backgroundColor: colors.task_bar, color: colors.icon}} 
                    placeholder={"Search or start a new chat"} 
                />
            </div>
            <div className="d-flex align-items-center justify-content-center" style={{width: "7%"}}>
                <FilterList sx={{color: colors.icon, fontSize: 18}} />
            </div>
        </div>
        <div className='d-flex p-2 flex-column'>
        <div className='archive-sub-container d-flex p-2'>
            <div className='d-flex p-2 align-items-center' style={{width: '15%'}}>
                    <ArchiveOutlined sx={{color: colors.green, fontSize: 20}} />
            </div>
            <span className='archive d-flex align-items-center'>Archived</span>
        </div>
        <div className='chats'>
            {
                i.map((chat) => {
                    return (
                        <SideBarChat />
                    )
                } )
            }
            </div>
        </div>
    </div>
  )
}
