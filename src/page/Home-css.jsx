import styled from 'styled-components'

const Container = styled.main`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px 16px;
    gap: 20px;
    border-radius: 10px;

    @media screen and (min-width: 640px) {
        padding: 56px 16px;
    }
`

const SelectLanquage = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #0a55dc;
    border-radius: 10px;
    padding: 15px 16px;
`

const ExChangeLanquage = styled.span`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
`

const TextAreaBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media screen and (min-width: 640px) {
        flex-direction: row;
    }
`

const ButtonBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TranslateButton = styled.button`
    width: 100%;
    background: #0a55dc;
    border-radius: 10px;
    padding: 15px 16px;
    outline: none;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
`

export {
    Container,
    ExChangeLanquage,
    SelectLanquage,
    TextAreaBox,
    ButtonBox,
    TranslateButton,
}