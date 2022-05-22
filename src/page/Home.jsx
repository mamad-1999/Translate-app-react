import React from 'react'
import Header from '../components/Header/Header'
import SelectLang from '../components/SelectLang/SelectLang'
import TextArea from '../components/TextArea/TextArea'
import { RiArrowLeftRightLine } from 'react-icons/ri'
import './Home.css'

function Home() {
    return (
        <div>
            <Header />
            <main className='main-section'>
                <div className='select_box'>
                    <SelectLang />
                    <RiArrowLeftRightLine className='arrow' />
                    <SelectLang />
                </div>
                <div className="textbox_container">
                    <TextArea holdertext={'متن خود را وارد کنید'} />
                    <TextArea holdertext={'ترجمه...'} />
                </div>
            </main>
        </div>
    )
}

export default Home