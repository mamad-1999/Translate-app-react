import React from 'react'
import {
    HeaderNav,
    Nav,
    Logo,
} from './Header-css'

function Header() {
    return (
        <HeaderNav>
            <Nav>
                <div>
                    <Logo>ترجمه</Logo>
                </div>
            </Nav>
        </HeaderNav>
    )
}

export default Header