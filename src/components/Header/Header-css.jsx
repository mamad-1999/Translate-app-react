import styled from 'styled-components'

const HeaderNav = styled.header`
    width: 100%;
    background: #0a55dc;
`

const Nav = styled.nav`
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LogoTitle = styled.span`
    font-size: 20px;
`

const LogoImage = styled.img`
    width: 40px;
`

export { HeaderNav, Nav, LogoTitle, LogoImage }