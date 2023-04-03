import React from 'react'
import '../styling/Message.css'
import colors from './colors'
import moment from 'moment'

export default function Message({sent, content, time}) {
    if(sent)
        return (
            <div className='d-flex flex-row justify-content-end'>
                <div className={'rectangle-element-sent p-2'}>
                    {content}
                    <span className={'time-stamp'} style={{color: colors.icon}}>{moment(time).format('h:mm')}</span>
                </div>
                <div className={'triangle-element-sent'}></div>
            </div>
        )
    return (
        <div className='d-flex flex-row container-received'>
            <div className={'triangle-element-received'}></div>
            <div className={'rectangle-element-received p-2'}>
                {content}
                <span className={'time-stamp'} style={{color: colors.icon}}>{moment(time).format('h:mm')}</span>
            </div>
        </div>
    )
}
