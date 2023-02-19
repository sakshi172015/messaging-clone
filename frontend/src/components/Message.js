import React from 'react'
import '../styling/Message.css'
import colors from './colors'

export default function Message() {
    let sent = true
    if(sent)
        return (
            <div className='d-flex flex-row justify-content-end'>
                <div className={'rectangle-element-sent p-2'}>
                    Ill drop by/ljgfdfghjl;';khfdfhjkl;';khfdsdfghjkl;lkhfdsasdfyuiop7ytrsaxcb
                    <span className={'time-stamp'} style={{color: colors.icon}}>12:12:12</span>
                </div>
                <div className={'triangle-element-sent'}></div>
            </div>
        )
    return (
        <div className='d-flex flex-row container-received'>
            <div className={'triangle-element-received'}></div>
            <div className={'rectangle-element-received p-2'}>
                Ill drop by/ljgfdfghjl;';khfdfhjkl;';khfdsdfghjkl;lkhfdsasdfyuiop7ytrsaxcb
                <span className={'time-stamp'} style={{color: colors.icon}}>12:12:12</span>
            </div>
        </div>
    )
}
