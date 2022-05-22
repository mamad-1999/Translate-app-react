import React from 'react'
import './Selectlang.css'
import countries from '../../data'

function SelectLang() {
    return (
        <>
            <select>
                {Object.entries(countries).map((country, index) => (
                <option key={index} selected value={country[0]}>{country[1]}</option>
                ))}
            </select>
        </>
    )
}

export default SelectLang