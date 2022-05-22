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
                    <SelectLang lang={state.languageFrom} />
                    <RiArrowLeftRightLine className='arrow' />
                    <SelectLang lang={state.languageTo} />
                </div>
                <div className="textbox_container">
                    <TextArea holdertext={'متن خود را وارد کنید'} />
                    <TextArea disabled={true} holdertext={'ترجمه...'} />
                </div>
                <div className="btn_box">
                    <button className='translate_btn'>ترجمه کن</button>
                </div>
            </main>
        </div>
    )
}

export default Home