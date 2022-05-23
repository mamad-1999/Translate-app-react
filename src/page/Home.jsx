import React, { useContext } from 'react'
import Header from '../components/Header/Header'
import SelectLang from '../components/SelectLang/SelectLang'
import TextArea from '../components/TextArea/TextArea'
import { RiArrowLeftRightLine } from 'react-icons/ri'
import { TranslateContext } from '../components/Context/ContextTranslate'
import {
    Container,
    SelectLanquage,
    ExChangeLanquage,
    TextAreaBox,
    ButtonBox,
    TranslateButton,
} from './Home-css'

function Home() {
    const { state, dispath } = useContext(TranslateContext)
    return (
        <div>
            <Header />
            <Container>
                <SelectLanquage>
                    <SelectLang
                        lang={state.languageFrom}
                        type={"LANGUAGE_FROM"} />
                    <ExChangeLanquage>
                        <RiArrowLeftRightLine
                            onClick={() => dispath({ type: "CHANGE" })}
                            className='arrow' />
                    </ExChangeLanquage>
                    <SelectLang
                        lang={state.languageTo}
                        type={"LANGUAGE_To"} />
                </SelectLanquage>
                <TextAreaBox>
                    <TextArea
                        type={"TEXT_FROM"}
                        lang={state.languageFrom}
                        text={state.textFrom}
                        holdertext={'متن خود را وارد کنید'}
                    />
                    <TextArea
                        type={"TEXT_TO"}
                        lang={state.languageTo}
                        text={state.textTo}
                        disabled={true}
                        holdertext={'ترجمه...'}
                    />
                </TextAreaBox>
                <ButtonBox>
                    <TranslateButton
                        onClick={() => dispath({ type: "TRANSLATE_REQUEST", payload: dispath })}>ترجمه کن
                    </TranslateButton>
                </ButtonBox>
            </Container>
        </div>
    )
}

export default Home