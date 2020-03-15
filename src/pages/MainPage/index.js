import React, {useState} from 'react'
import './style.css'
import MainHeader from '../../components/MainHeader'
import ContentBox from '../../components/ContentBox'
import KanjiButton from '../../components/kanjiButton'
import Wapper from '../../objetcs/Wrapper'
import SingleKanji from '../../objetcs/SingleKanji'

const MainPage = () => {
    const [content, setContent] = useState(
        [
            {kanji: "漢", pos:23, activated:false, grade:"A"},
            {kanji: "字", pos:24, activated:false, grade:"A"},
            {kanji: "字", pos:25, activated:false, grade:"B"},
            {kanji: "字", pos:26, activated:false, grade:"D"},
            {kanji: "字", pos:27, activated:false, grade:"A"},
            {kanji: "字", pos:28, activated:false, grade:"C"},
            {kanji: "字", pos:29, activated:false, grade:"D"},
            {kanji: "字", pos:30, activated:false, grade:"B"},
            {kanji: "字", pos:31, activated:false, grade:"C"},
            {kanji: "字", pos:32, activated:false, grade:"C"},
            {kanji: "字", pos:33, activated:false, grade:"B"},
            {kanji: "字", pos:34, activated:false, grade:"A"},
            {kanji: "字", pos:35, activated:false, grade:"E"},
            {kanji: "字", pos:36, activated:false, grade:"A"},
            {kanji: "字", pos:37, activated:false, grade:"D"},
            {kanji: "字", pos:38, activated:false, grade:"C"},
            {kanji: "字", pos:39, activated:false, grade:"E"},
            {kanji: "字", pos:40, activated:false, grade:"A"},
            {kanji: "字", pos:41, activated:false, grade:"B"},
            {kanji: "字", pos:42, activated:false, grade:"A"},
            {kanji: "字", pos:43, activated:false, grade:"D"}
        ]
    )

    const [buttonList, setButtonList] = useState(
        [
            {grade: "A", activated: false},
            {grade: "B", activated: false},
            {grade: "D", activated: false},
            {grade: "C", activated: false},
            {grade: "E", activated: false}
        ]
    )

    const handleKanjiClick = (obj) => {
        setContent(old => old.map( elem => {
            if (elem.pos === obj.pos) {
                return { 
                    kanji: obj.kanji, 
                    pos: obj.pos, 
                    activated:obj.activated === true ? false : true,
                    grade: elem.grade
                }
            } else {
                return elem
            }
        }))
    }
    const handleButtonClick = (grade) => {
        setButtonList(old => old.map( btn => {            
            if(btn.grade === grade){
                const activated = btn.activated === true ? false : true
                setContent(old => old.map( elem => {            
                    if (elem.grade === grade) {
                        return { 
                            kanji: elem.kanji, 
                            pos: elem.pos, 
                            activated: activated,
                            grade: elem.grade
                        }
                    } else {
                        return elem
                    }
                }))
                return {
                    grade: btn.grade,
                    activated: activated
                }
            }
            return btn
        }))
    }

    return (
        <main className="main-page">
            <MainHeader />
            <Wapper className="box-wrapper">
                <ContentBox>
                    {content.map(obj => (
                        <SingleKanji
                            key={obj.pos}
                            content={obj.kanji}
                            activated={obj.activated}
                            onClick={() => handleKanjiClick(obj)}
                        />))
                    }
                </ContentBox>
            </Wapper>
            <Wapper className="button-wrapper">
                    {buttonList.map(btn => (
                        <KanjiButton
                            key={btn.grade}
                            text={btn.grade}
                            activated={btn.activated}
                            onClick={() => handleButtonClick(btn.grade)}/>
                    ))}
            </Wapper>
            
        </main>
    )
}

export default MainPage;