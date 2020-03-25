import React from 'react'
import './style.css'
import Header from '../../components/Header'
import ContentBox from '../../components/ContentBox'
import { Redirect } from 'react-router-dom'
 
const MainPage = ({content}) => {

    
    const link = {className: 'back-button', to:'/', onClick: null}
    if (content.length === 0) {
        return < Redirect to='/' />
    }
    return (
        <main className="main-page">
            <Header link={link}/>
            <ContentBox content = { content }/>            
        </main>
    )
}

export default MainPage;
