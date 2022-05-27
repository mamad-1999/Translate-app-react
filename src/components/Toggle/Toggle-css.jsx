import styled from 'styled-components'

const LabelToggle = styled.label`
    width: 80px;
    display: block;
    direction: ltr;
`

const ToggleItem = styled.div`
    height: 40px;
    width: 80px;
    background: var(--black);
    border-radius: 40px;
    padding: 7px;
    position: relative;
    margin: auto;
    cursor: pointer;

    &::before{
        content: "";
        display: block;
        height: 28px;
        width: 28px;
        border-radius: 30px;
        background: var(--white);
        position: absolute;
        z-index: 2;
        transform: translate(0);
        transition: transform var(--transition);
        transform: ${props => props.isDark ? 'translateX(37px)' : 'translateX(0)'};
    }
`

const CheckBoxToggle = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    top: 0;
    opacity: 0;
`

const IconToggleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 5px;
`

const Icon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 25px;
    z-index: 0;
`

export {
    LabelToggle,
    ToggleItem,
    CheckBoxToggle,
    IconToggleBox,
    Icon,
}