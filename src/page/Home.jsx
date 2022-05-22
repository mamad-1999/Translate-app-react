import React, { useContext } from 'react'
import Header from '../components/Header/Header'
import SelectLang from '../components/SelectLang/SelectLang'
import TextArea from '../components/TextArea/TextArea'
import { RiArrowLeftRightLine } from 'react-icons/ri'
import './Home.css'
import { TranslateContext } from '../components/Context/ContextTranslate'

function Home() {
    const { state, dispath } = useContext(TranslateContext)
    return (
        <div>
            {/* <Header /> */}
            <main className='main-section'>
                <div className='select_box'>
                    <SelectLang lang={state.languageFrom} type={"LANGUAGE_FROM"} />
                    <RiArrowLeftRightLine className='arrow' />
                    <SelectLang lang={state.languageTo} type={"LANGUAGE_To"} />
                </div>
                <div className="textbox_container">
                    <TextArea type={"TEXT_FROM"} text={state.textFrom} holdertext={'متن خود را وارد کنید'} />
                    <TextArea type={"TEXT_TO"} text={state.textTo} disabled={true} holdertext={'ترجمه...'} />
                </div>
                <div className="btn_box">
                    <button
                        onClick={() => dispath({ type: "TRANSLATE_REQUEST", payload: dispath })}
                        className='translate_btn'>ترجمه کن
                    </button>
                </div>
            </main>
        </div>
    )
}

export default Home