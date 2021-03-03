import React, {useContext} from 'react'
import styled from 'styled-components';
import {ThemeContext} from '../../context/themeContext';

//ALL CONTAINERS FOR PORTFOLIO

// ------------ START OF BC -------------------- //
/*Main Container for complete site

    - Background color
    - Base padding
    - Font family

*/
export const BodyContainer = ({children}) => {

    //THEME
    const {theme} = useContext(ThemeContext)

    return <BC theme={theme}>{children}</BC>

}

const BC = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto+Mono:wght@300;400;500;700&display=swap');

    //CSS-RESET
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    button {
        outline: none;

        :hover{
            outline: none
        }
    }

    //Global styling


    color: ${props => props.theme.text};

    p,span,button,input,sub{
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
    }

    p{
        color: ${props => props.theme.fade};
        font-weight: bold;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Roboto Mono', monospace;
    }

    h1{
        font-size: 42px;
    }

    h2{
        font-size: 34px;
    }
    
    h3{
        font-size: 28px;
    }

    h4{
        font-size: 22px;
    }

    h5{
        font-size: 18px;
    }

    h6{
        font-size: 14px;
    }

    button{
        cursor: pointer;
        font-weight: 500;
    }

    span {
        color: ${props => props.theme.highlight};
        font-weight: bold;
    }

    //Component
    overflow: hidden;

    height: auto;
    min-height: 200vh;
    width: 100%;
    transition-duration: 0.4s;
    background: ${props => props.theme.back};
    padding: 15px;


`
// ------------- END OF BC -------------------- //

// ------------ START OF GLOBALGRID -------------------- //
//Pure style component no functionality
//Displays gridlines over complete app at lowest z-index

export const GlobalGrid = () => {

    const {theme} = useContext(ThemeContext)
    return (
    <GG theme={theme}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </GG>
    )
}

const GG = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 0;
    box-sizing: border-box;
    overflow-y: hidden;
    overflow-x: hidden;
    pointer-events: none;

    top: 0px;
    left: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    div{
        overflow: hidden;
        box-sizing: border-box;
        border-right: 1px dashed ${props => props.theme.backGrid};
    }


    @media only screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr 1fr 1fr;

        div:nth-child(5){
            display: none;
        }
        
    }

    @media only screen and (max-width: 720px){
        grid-template-columns: 1fr 1fr 1fr;

        div:nth-child(4){
            display: none;
        }
    }
`

// ------------- END OF GG -------------------- //

// ------------ START OF NC -------------------- //
//Nav Container 

export const NavContainer = ({children}) => {

    //THEME
    const {theme} = useContext(ThemeContext)

    return <NC theme={theme}>{children}</NC>

}

const NC = styled.nav`

    z-index: 1 !important;

    display: grid !important;
    grid-template-columns: 1fr 0.4fr 60px;
    min-height: 80px;
    height: auto;
    grid-gap: 25px;
    h4{
        margin-bottom: 10px;
        border-bottom: dashed 1px ${props => props.theme.backGrid} !important;
        padding-bottom: 5px;
    }

    ul{
        position: relative;
        width: auto;
        background-color: ${props => props.theme.highlight};
        padding: 15px;
        z-index: 2;
    }
    
    li{
        display: block;
        width: 140px;
        max-height: 85px;
        line-height: 25px;
        span{
            cursor: pointer;
            :hover{
                border-bottom: solid 1px ${props => props.theme.back};
            }
            font-size: 16px;
            color: ${props => props.theme.back};
            letter-spacing: 1px;

        }


    }

    @media only screen and (max-width: 1230px){
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;

        ul{
            min-width: 30%;
            max-width: 40%;
        }

        li{
            height: 30px;
            line-height: 30px;
            display: block;
            text-align: left;
        }
    }

    @media only screen and (max-width: 570px){
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;

        ul{
            min-width: 80%;
            max-width: 100%;
        }

        li{
            display: block;
            text-align: left;
        }
    }

`