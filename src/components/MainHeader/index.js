import React from 'react'
import './style.css'
import HamburgerMenu from '../../objetcs/HamburgerMenu'
import PageTitle from '../../objetcs/PageTitle'
import BackButton from '../../objetcs/BackButton'

const MainHeader = () => {
    return (
        //
        <header className="main-header">
            <BackButton />
            <PageTitle title={"Identificador de Kanjis"}/>
            <HamburgerMenu />
        </header>
    )
}

export default MainHeader;