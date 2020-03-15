import React from 'react'
import './style.css'

const HamburgerMenu = () => {
    return (
        <a className="hamburger-menu" href="to-do" aria-label="Open the menu">
            <i className="hamburger-icon" aria-hidden="true"></i>
        </a>
    )
}

export default HamburgerMenu