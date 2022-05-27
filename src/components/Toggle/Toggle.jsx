import React, { useContext } from 'react'
import { TranslateContext } from '../Context/ContextTranslate';
import { IoMdMoon } from 'react-icons/io'
import { BiSun } from 'react-icons/bi'
import {
    LabelToggle,
    ToggleItem,
    CheckBoxToggle,
    IconToggleBox,
    Icon,
} from './Toggle-css'

function Toggle() {
    const { state, dispath } = useContext(TranslateContext);

    const toggleState = () => {
        dispath({ type: "DARK_MODE" })
    };

    return (
        <LabelToggle htmlFor="toggle">
            <ToggleItem isDark={state.isDark}>
                {/* <span className="hidden">
                    {state.isDark ? "Enable" : "Disable"}
                </span> */}
                <IconToggleBox>
                    <Icon>
                        <BiSun />
                    </Icon>
                    <Icon>
                        <IoMdMoon />
                    </Icon>
                </IconToggleBox>
                <CheckBoxToggle
                    id="toggle"
                    name="toggle"
                    type="checkbox"
                    checked={state.isDark}
                    onChange={toggleState}
                />
            </ToggleItem>
        </LabelToggle>
    );
}

export default Toggle