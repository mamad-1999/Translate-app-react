import React, { useContext } from 'react'
import './Selectlang.css'
import countries from '../../data'
import { TranslateContext } from '../Context/ContextTranslate'

function SelectLang(props) {
    const { state, dispath } = useContext(TranslateContext)
    return (
        <>
            <select
                onChange={e => dispath({ type: props.type, payload: e.target.value })}
                value={props.lang}>
                {Object.entries(countries).map((country, index) => (
                    <option key={index} value={country[0]}>{country[1]}</option>
                ))}
            </select>
        </>
    )
}

export default SelectLang