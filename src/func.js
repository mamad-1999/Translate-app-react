const copy = (initialText) => {
    navigator.clipboard.writeText(initialText)
}

const sound = (initialText, initialLang) => {
    let utterance = null
    if (initialText) {
        utterance = new SpeechSynthesisUtterance(initialText);
        utterance.lang = initialLang;
    }

    speechSynthesis.speak(utterance);
}

export { copy, sound }