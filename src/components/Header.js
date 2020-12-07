import React from 'react'
import { useState } from 'react'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
        console.log(isMenuOpen)
    }
    return (
        <header className='header'>
            <div className='head-container'>
                <img src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' alt='logo' className='site-title' />
                <ul className='nav-container'>
                    <li className='nav-item'>Services</li>
                    <li className='nav-item'>Portfolio</li>
                    <li className='nav-item'>About</li>
                    <li className='nav-item'>Team</li>
                    <li className='nav-item'>Contact</li>
                </ul>
                <button onClick={toggleMenu} className='menu-button'> menu
                    <div className='burger'>
                        <div className='burger-bars'></div>
                        <div className='burger-bars'></div>
                        <div className='burger-bars'></div>
                    </div>
                </button>
            </div>
            <div className={`menu-items ${isMenuOpen ? null : 'menu-items-hide'}`}>
                <li className='new-menu-item'>Services</li>
                <li className='new-menu-item'>Portfolio</li>
                <li className='new-menu-item'>About</li>
                <li className='new-menu-item'>Team</li>
                <li className='new-menu-item'>Contact</li>
            </div>
        </header>
    )
}

export default Header