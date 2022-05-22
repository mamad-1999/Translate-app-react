import React, { createContext, useReducer } from 'react'

const initialState = {
    languageFrom: 'en-GB',
    languageTo: 'fa-IR',
    textFrom: '',
    textTo: '',
}

const reducer = (state, action) => {
    switch (action.type) {

    }
}

export const TranslateContext = createContext()

function ContextTranslate({ children }) {
    const [state, dispath] = useReducer(reducer, initialState)
    return (
        <TranslateContext.Provider value={{ state, dispath }}>
            {children}
        </TranslateContext.Provider>
    )
}

export default ContextTranslate