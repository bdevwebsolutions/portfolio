import React from 'react'
import styled from 'styled-components';
import {FaArrowUp} from 'react-icons/fa';
import {ThemeContext} from '../../context/themeContext';

const ScrollTopButton = () => {

    const [isTop, setIsTop] = React.useState(true);
    const {theme} = React.useContext(ThemeContext)

    React.useEffect(() => {
        document.addEventListener('scroll', () => {
            if(window.pageYOffset > 0){
                setIsTop(false)
            } else {
                setIsTop(true)
            }
        })
    }, [])

    if(isTop){
        return null;
    } else {
        return <Button onClick={() => {window.scrollTo(0, 0)}} theme={theme}><FaArrowUp size={"28px"}/></Button>
    }

}

const Button = styled.button`

    position: fixed;
    bottom: 25px;
    right: 25px;
    color: ${props => props.theme.highlight};
    background-color: rgba(0,0,0,0);
    border: none;
    outline: none;
    :hover{
        outline: none;
        transform: rotate(-10deg);
    }

`

export default ScrollTopButton;