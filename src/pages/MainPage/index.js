import React from 'react'
import './style.css'
import MainHeader from '../../components/MainHeader'
import ContentBox from '../../components/ContentBox'

const MainPage = ({content}) => {

    // console.log(`MainPage:${content}`);
    return (
        <main className="main-page">
            <MainHeader />
            <ContentBox content = { content }/>            
        </main>
    )
}

export default MainPage;
