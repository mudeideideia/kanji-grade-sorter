import React from 'react'
import './style.css'
import HamburgerMenu from '../../objetcs/HamburgerMenu'
import PageTitle from '../../objetcs/PageTitle'
import GoButton from '../../objetcs/GoButton'

const Header = ({link}) => {
    
    return (
        //
        <header className="main-header">
            <GoButton link={link} />           
            <PageTitle title={"Identificador de Kanjis"}/>
            <HamburgerMenu />
        </header>
    )
}

export default Header;