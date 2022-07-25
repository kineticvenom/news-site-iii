import {Link} from 'react-router-dom'
import { useState } from 'react'
import {Navbar, Nav} from 'react-bootstrap'

import sections from '../data/sections.json'//data


function AppNav (props){
    const [navItems, setNavItems] = useState(sections)
    
    return(
        <Navbar>
            <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                {
                    navItems.map(((navItem, index) => {
                        return(
                            <Nav.Link key={index} href={`/#/sections/${navItem.value}`} onClick={()=> console.log(navItem.value)}>
                            {navItem.label}
                            </Nav.Link>
                        )
                    }))
                }
            </Nav>
        </Navbar>
    )
}
export default AppNav;