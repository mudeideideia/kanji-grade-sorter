import React, { useState } from 'react'
import './style.css'
import SingleKanji from '../../objetcs/SingleKanji'
import KanjiButton from '../../objetcs/kanjiButton'
import Wapper from '../../objetcs/Wrapper'


const ContentBox = ({content=[]}) => {
    const [buttonList, setButtonList] = useState( 
        {
            N5: false,
            N4: false,
            N3: false,
            N2: false,
            XX: false
        }
    )

    const updateButtonList = (grade) => {        
        setButtonList( state => {
            state[grade] = !state[grade]
            return state
        })
    }

    const [state, setState] = useState(
        content.map( elem => (
            {
                kanji: elem.kanji,
                pos: elem.pos,
                activated: false,
                grade: elem.grade
            }
        ))
    )

    const handleKanjiClick = (pos) => {
        setState(state => (
            state.map( elem => {
                if(elem.pos === pos) {
                    return {
                        kanji: elem.kanji,
                        pos: pos,
                        activated: !elem.activated,
                        grade: elem.grade
                    }
                }
                return elem
            })
        ))
    }

    const handleButtonClick = (grade) => {
        updateButtonList(grade)
        
        setState(state => (
            state.map( elem => {
                if(elem.grade === grade) {
                    return {
                        kanji: elem.kanji,
                        pos: elem.pos,
                        activated: buttonList[grade],
                        grade: grade
                    } 
                }
                return elem
            })
        ))
    }  

    return (
    <div className="content-box">
        <Wapper className="text-wrapper">
            {
            state.map( obj => (
                <SingleKanji 
                key={obj.pos}
                content={obj.kanji}
                activated={obj.activated}
                onClick={() => handleKanjiClick(obj.pos)}/>
                ))
            }
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
    </div>
    )
}

export default ContentBox