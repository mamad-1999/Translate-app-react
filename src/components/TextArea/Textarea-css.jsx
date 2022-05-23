import styled from 'styled-components'

const TextareaBox = styled.div`
    width: 100%;
    background: #0a55dc;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

const Textarea = styled.textarea`
    width: 100%;
    min-height: 200px;
    background: none;
    resize: none;
    border: none;
    outline: none;
    color: #fff;
    padding: 20px;
    font-size: 20px;

    &::placeholder{
        color: #eee;
        opacity: .7;
    }
`

const TextareaIconBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 10px 15px;
    gap: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
`

const TextareaIcon = styled.span`
     width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 25px;
    background-color: rgba(0, 187, 255, 0.692);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover{
        opacity: .8;
    }
`

export {
    TextareaBox,
    Textarea,
    TextareaIconBox,
    TextareaIcon,
}