import styled from 'styled-components'

const Container = styled.main`
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 20px;
    border-radius: 10px;
`

const SelectLanquage = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.box};
    box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 20px;
    color: ${({ theme }) => theme.text};
    border-radius: 10px;
    padding: 15px 16px;
    user-select: none;
`

const ExChangeLanquage = styled.span`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    background-color: rgba(0, 187, 255, 0.692);
    border-radius: 5px;
    color: #fff;
    transform: ${props => props.change ? 'rotateY(180deg)' : 'rotate(0)'};
`

const TextAreaBoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media screen and (min-width: 640px) {
        flex-direction: row;
    }
`

export {
    Container,
    ExChangeLanquage,
    SelectLanquage,
    TextAreaBoxContainer,
}