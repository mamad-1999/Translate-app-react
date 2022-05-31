import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ContextTheme'
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
    const { stateTheme, dispathTheme } = useContext(ThemeContext);

    const toggleState = () => {
        dispathTheme({ type: "DARK_MODE" })
    };

    return (
        <LabelToggle>
            <ToggleItem isDark={stateTheme.isDark}>
                <IconToggleBox>
                    <Icon>
                        <BiSun />
                    </Icon>
                    <Icon>
                        <IoMdMoon />
                    </Icon>
                </IconToggleBox>
                <CheckBoxToggle
                    checked={stateTheme.isDark}
                    onChange={toggleState}
                />
            </ToggleItem>
        </LabelToggle>
    );
}

export default Toggle