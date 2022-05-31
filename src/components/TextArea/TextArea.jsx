import React, { useContext, useState } from 'react'
import { MdOutlineContentCopy } from 'react-icons/md'
import { AiOutlineSound } from 'react-icons/ai'
import { TranslateContext } from '../Context/ContextTranslate'
import { ThemeContext } from '../Context/ContextTheme'
import { sound, copy } from '../../func'
import {
    TextareaBox,
    Textarea,
    TextareaFooter,
    TextareaIconBox,
    TextareaIcon,
    TranslateButton,
    CopyText,
} from './Textarea-css'
import { lightMode, darkMode } from '../../theme'

function TextArea(props) {
    const [isCopy, setIsCopy] = useState(false)
    const { state, dispath } = useContext(TranslateContext)
    const { stateTheme } = useContext(ThemeContext)
    const { holdertext, type, lang, text, first = false, disabled = false } = props

    const copyHandler = () => {
        setIsCopy(true)
        copy(text)

        setTimeout(() => {
            setIsCopy(false)
        }, 3000);
    }

    return (
        <TextareaBox theme={stateTheme.themeMode === 'dark' ? darkMode : lightMode}>
            <Textarea
                onChange={e => dispath({ type: type, payload: e.target.value })}
                value={text} disabled={disabled}
                placeholder={holdertext}>
            </Textarea>
            <TextareaFooter first={first}>
                {first &&
                    <TranslateButton
                        onClick={() => dispath({ type: "TRANSLATE_REQUEST", payload: dispath })}>ترجمه کن
                    </TranslateButton>}
                <TextareaIconBox>
                    {isCopy && <CopyText>کپی شد</CopyText>}
                    <TextareaIcon
                        onClick={copyHandler}>
                        <MdOutlineContentCopy />
                    </TextareaIcon>
                    <TextareaIcon
                        onClick={() => sound(text, lang)}>
                        <AiOutlineSound />
                    </TextareaIcon>
                </TextareaIconBox>
            </TextareaFooter>
        </TextareaBox>
    )
}

export default TextArea