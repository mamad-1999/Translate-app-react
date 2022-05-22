import React from 'react'
import Header from '../components/Header/Header'
import TextArea from '../components/TextArea/TextArea'
import './Home.css'

function Home() {
    return (
        <div>
            <Header />
            <main className='main-section'>
                <div className="textbox_container">
                    <TextArea holdertext={'متن خود را وارد کنید'} />
                    <TextArea holdertext={'ترجمه...'} />
                </div>
            </main>
        </div>
    )
}

export default Home