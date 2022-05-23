import React, { useContext } from 'react'
import { MdOutlineContentCopy } from 'react-icons/md'
import { AiOutlineSound } from 'react-icons/ai'
import { TranslateContext } from '../Context/ContextTranslate'
import { sound, copy } from '../../func'
import {
    TextareaBox,
    Textarea,
    TextareaIconBox,
    TextareaIcon,
} from './Textarea-css'

function TextArea(props) {
    const { dispath } = useContext(TranslateContext)
    const { holdertext, type, lang, text, disabled = false } = props

    return (
        <TextareaBox>
            <Textarea
                onChange={e => dispath({ type: type, payload: e.target.value })}
                value={text} disabled={disabled}
                placeholder={holdertext}>
            </Textarea>
            <TextareaIconBox>
                <TextareaIcon
                    onClick={() => copy(text)}>
                    <MdOutlineContentCopy />
                </TextareaIcon>
                <TextareaIcon
                    onClick={() => sound(text, lang)}>
                    <AiOutlineSound />
                </TextareaIcon>
            </TextareaIconBox>
        </TextareaBox>
    )
}

export default TextArea