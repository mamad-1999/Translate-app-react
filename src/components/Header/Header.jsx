import React from 'react'
import Translate from './../../images/Translate.svg'
import {
    HeaderNav,
    Nav,
    LogoTitle,
    LogoImage,
} from './Header-css'

function Header() {
    return (
        <HeaderNav>
            <Nav>
                <div>
                    <LogoTitle>ترجمه</LogoTitle>
                </div>
                <div>
                    <LogoImage src={Translate} />
                </div>
            </Nav>
        </HeaderNav>
    )
}

export default Header