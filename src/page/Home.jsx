import React, { useContext } from 'react'
import Header from '../components/Header/Header'
import SelectLang from '../components/SelectLang/SelectLang'
import TextArea from '../components/TextArea/TextArea'
import { RiArrowLeftRightLine } from 'react-icons/ri'
import { TranslateContext } from '../components/Context/ContextTranslate'
import { ThemeContext } from '../components/Context/ContextTheme'
import { GlobalStyle } from "./../index-css";
import {
    Container,
    SelectLanquage,
    ExChangeLanquage,
    TextAreaBoxContainer,
} from './Home-css'
import { lightMode, darkMode } from '../theme'


function Home() {
    const { state, dispath } = useContext(TranslateContext)
    const { stateTheme } = useContext(ThemeContext)

    return (
        <div>
            <GlobalStyle
                theme={stateTheme.themeMode === 'dark' ? darkMode : lightMode} />
            <Header />
            <Container>
                <SelectLanquage theme={stateTheme.themeMode === 'dark' ? darkMode : lightMode}>
                    <SelectLang
                        lang={state.languageFrom}
                        type={"LANGUAGE_FROM"} />
                    <ExChangeLanquage
                        change={state.isChange}
                        onClick={() => dispath({ type: "CHANGE" })}>
                        <RiArrowLeftRightLine />
                    </ExChangeLanquage>
                    <SelectLang
                        lang={state.languageTo}
                        type={"LANGUAGE_To"} />
                </SelectLanquage>
                <TextAreaBoxContainer>
                    <TextArea
                        type={"TEXT_FROM"}
                        lang={state.languageFrom}
                        text={state.textFrom}
                        first={true}
                        holdertext={'متن خود را وارد کنید'}
                    />
                    <TextArea
                        type={"TEXT_TO"}
                        lang={state.languageTo}
                        text={state.textTo}
                        disabled={true}
                        holdertext={'ترجمه...'}
                    />
                </TextAreaBoxContainer>
            </Container>
        </div>
    )
}

export default Home