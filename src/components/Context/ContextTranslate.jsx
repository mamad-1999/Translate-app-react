import React, { createContext, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    languageFrom: 'en-GB',
    languageTo: 'fa-IR',
    textFrom: '',
    textTo: '',
}

export const TranslateContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "LANGUAGE_FROM":
            state.languageFrom = action.payload
            return {
                ...state
            }
        case "LANGUAGE_To":
            state.languageTo = action.payload
            return {
                ...state
            }
        case "TEXT_FROM":
            state.textFrom = action.payload
            return {
                ...state
            }
        case "TEXT_TO":
            state.textTo = action.payload
            return {
                ...state
            }
        case "TRANSLATE_REQUEST":
            state.textTo = 'در حال ترجمه...'
            if (state.textFrom) {
                fetchData(
                    state.languageFrom,
                    state.languageTo,
                    state.textFrom,
                    action.payload
                )
            } else {
                state.textTo = 'لطفا متن خود را وارد کنید'
            }
            return {
                ...state,
            }
        case "TRANSLATE_SUCCESS":
            state.textTo = action.payload
            return {
                ...state,
            }
        case "CHANGE":
            //save one text and one lang for Exchange
            const textOne = state.textFrom
            const langOne = state.languageFrom
            //Exchange 
            state.languageFrom = state.languageTo
            state.languageTo = langOne
            state.textFrom = state.textTo
            state.textTo = textOne

            return {
                ...state
            }
        default:
            return state
    }
}


function ContextTranslate({ children }) {
    const [state, dispath] = useReducer(reducer, initialState)
    return (
        <TranslateContext.Provider value={{ state, dispath }}>
            {children}
        </TranslateContext.Provider>
    )
}

const fetchData = async (langFrom, langTo, textFrom, dispath) => {
    const url = `https://api.mymemory.translated.net/get?q=${textFrom}&langpair=${langFrom}|${langTo}`
    const textTranslate = await axios.get(url)
        .then(response => {
            return response.data.responseData.translatedText
        }).catch(err => {
            console.log(err);
        })

    if (textTranslate) {
        dispath({ type: "TRANSLATE_SUCCESS", payload: textTranslate })
    }
}

export default ContextTranslate