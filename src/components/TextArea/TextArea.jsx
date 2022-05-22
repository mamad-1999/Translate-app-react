import React from 'react'
import './TextArea.css'
import { MdOutlineContentCopy } from 'react-icons/md'
import { AiOutlineSound } from 'react-icons/ai'

function TextArea({ holdertext }) {
    return (
        <div className='text_box'>
            <textarea placeholder={holdertext}></textarea>
            <div className="text_icon_box">
                <span className='icon'>
                    <MdOutlineContentCopy />
                </span>
                <span className='icon'>
                    <AiOutlineSound />
                </span>
            </div>
        </div>
    )
}

export default TextArea