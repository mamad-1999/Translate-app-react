import React, { useContext } from 'react'
import './TextArea.css'
import { MdOutlineContentCopy } from 'react-icons/md'
import { AiOutlineSound } from 'react-icons/ai'
import { TranslateContext } from '../Context/ContextTranslate'
import { sound, copy } from '../../func'

function TextArea(props) {
    const { dispath } = useContext(TranslateContext)
    const { holdertext, type, lang, text, disabled = false } = props

    return (
        <div className='text_box'>
            <textarea
                onChange={e => dispath({ type: type, payload: e.target.value })}
                value={text} disabled={disabled}
                placeholder={holdertext}>
            </textarea>
            <div className="text_icon_box">
                <span
                    onClick={() => copy(text)}
                    className='icon'>
                    <MdOutlineContentCopy />
                </span>
                <span
                    onClick={() => sound(text, lang)}
                    className='icon'>
                    <AiOutlineSound />
                </span>
            </div>
        </div>
    )
}

export default TextArea