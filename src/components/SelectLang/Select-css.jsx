import styled from 'styled-components'

const Select = styled.select`
    color: #fff;
    border: none;
    outline: none;
    font-size: 16px;
    background: none;

    &::-webkit-scrollbar{
        width: 8px;
    }

    &::-webkit-scrollbar-thumb{
        background: #999;
        border-radius: 8px;
        border-right: 2px solid #ffffff;
    }
`
const Option = styled.option`
    color: #333;
`

export { Select, Option }