import React, { useContext } from 'react'
import countries from '../../country'
import { TranslateContext } from '../Context/ContextTranslate'
import { Select, Option } from './Select-css'

function SelectLang(props) {
    const { dispath } = useContext(TranslateContext)
    return (
        <>
            <Select
                onChange={e => dispath({ type: props.type, payload: e.target.value })}
                value={props.lang}>
                {Object.entries(countries).map((country, index) => (
                    <Option key={index} value={country[0]}>{country[1]}</Option>
                ))}
            </Select>
        </>
    )
}

export default SelectLang