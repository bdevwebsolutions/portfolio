import React, {useContext} from 'react'
import {lightMode, darkMode} from '../../styles/theme/theme.ts';
import {ThemeContext} from '../../context/themeContext';
import styled from 'styled-components';
import {FaSun, FaMoon} from 'react-icons/fa';

const Toggle = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    return <ToggleButton theme={theme} onClick={() => {
        theme === lightMode ? setTheme(darkMode) : setTheme(lightMode)
    }}>{theme === lightMode ? <FaMoon size={"20px"}/> : <FaSun size={"20px"}/>}</ToggleButton>
}

const ToggleButton = styled.button`
    display: block;
    width: auto;
    height: auto;
    border-radius: 50px;
    background: rgba(0,0,0,0);
    color: ${props => props.theme.highlight};
    padding-top: 5px;
    outline: none;
    border: none;
    transition-duration: 0.4s;
    margin: 42px auto 0px auto;

    :active{
        outline: none;
    }

    :hover{
        transform: rotate(360deg);
    }

    @media only screen and (max-width: 1230px){
        position: fixed;
        right: 15px;
        top: -15px;
    }

`

export default Toggle;