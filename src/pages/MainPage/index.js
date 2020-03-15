import React, {useState} from 'react'
import './style.css'
import MainHeader from '../../components/MainHeader'
import ContentBox from '../../components/ContentBox'
import KanjiButton from '../../components/kanjiButton'
import Wapper from '../../objetcs/Wrapper'

const MainPage = () => {


    const [buttonList, setButtonList] = useState(
        {
            N5: false,
            N4: false,
            N3: false,
            N2: false,
        }
    )
 

    const handleButtonClick = (grade) => {
        const New = {}
        setButtonList(old => {
            for (const key in old) { New[key] = old[key] }
            New[grade] = old[grade] === true ? false : true
            return New
        })        
    }

    return (
        <main className="main-page">
            <MainHeader />
            <Wapper className="box-wrapper">
                <ContentBox buttonList = {buttonList} />
            </Wapper>
            <Wapper className="button-wrapper">
                { 
                    Object.keys(buttonList).map(grade => {
                        return (
                        <KanjiButton
                            key={grade}
                            text={grade}
                            activated={buttonList[grade]}
                            onClick={() => handleButtonClick(grade)}
                        />
                        )
                    })
                }                       
            </Wapper>
            
        </main>
    )
}

export default MainPage;

// for (key in buttonList) {
