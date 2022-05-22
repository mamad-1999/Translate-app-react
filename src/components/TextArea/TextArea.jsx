import React from 'react'
import './TextArea.css'

function TextArea({ holdertext }) {
    return (
        <div className='text_box'>
            <textarea placeholder={holdertext}></textarea>
        </div>
    )
}

export default TextArea