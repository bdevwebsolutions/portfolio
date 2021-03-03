import React from 'react'
import { NavContainer } from '../../styles/components/containers'

//Components
import Toggle from './themeButton';

/* Navigation

    - Title
    - Subtitle
    - Menuitems
    - Theme Toggle

*/

const Nav = () => {

    return (
    <NavContainer>
        <div>
            <h3>BJARNE VERDONCK</h3>
            <h4>Fullstack Webdeveloper</h4>
        </div>
        <div>
            <ul>
                <li><span>OVER</span></li>
                <li><span>TECHNOLOGIEËN</span></li>
                <li><span>PROJECTEN</span></li>
                <li><span>CONTACT</span></li>
            </ul>
        </div>
        <div>
            <Toggle/>
        </div>
    </NavContainer>
    )
}

export default Nav;