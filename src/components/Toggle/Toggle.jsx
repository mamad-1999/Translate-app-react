import React, { useContext } from 'react'
import { TranslateContext } from '../Context/ContextTranslate';
import { IoMdMoon } from 'react-icons/io'
import { BiSun } from 'react-icons/bi'
import './Toggle.css'

function Toggle() {
    const { state, dispath } = useContext(TranslateContext);

    const toggleState = () => {
        dispath({ type: "DARK_MODE" })
    };

    return (
        <label className="toggle-wrapper" htmlFor="toggle">
            <div className={`toggle ${state.isDark ? "enabled" : "disabled"}`}>
                <span className="hidden">
                    {state.isDark ? "Enable" : "Disable"}
                </span>
                <div className="icons">
                    <BiSun />
                    <IoMdMoon />
                </div>
                <input
                    id="toggle"
                    name="toggle"
                    type="checkbox"
                    checked={state.isDark}
                    onChange={toggleState}
                />
            </div>
        </label>
    );
}

export default Toggle