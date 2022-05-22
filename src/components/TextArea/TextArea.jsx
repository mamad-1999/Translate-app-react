import React, { useContext } from 'react'
import './TextArea.css'
import { MdOutlineContentCopy } from 'react-icons/md'
import { AiOutlineSound } from 'react-icons/ai'
import { TranslateContext } from '../Context/ContextTranslate'

function TextArea({ holdertext, type, text, disabled = false }) {
    const { state, dispath } = useContext(TranslateContext)
    return (
        <div className='text_box'>
            <textarea onChange={e => dispath({ type: type, payload: e.target.value })} value={text} disabled={disabled} placeholder={holdertext}></textarea>
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