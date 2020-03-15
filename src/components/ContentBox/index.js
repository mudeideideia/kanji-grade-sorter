import React, { useReducer, useEffect} from 'react'
import './style.css'
import SingleKanji from '../../objetcs/SingleKanji'


const ContentBox = ({buttonList}) => {

    const content = 
        [
            {kanji: "漢", pos:23, activated: false, grade:"N5"},
            {kanji: "字", pos:24, activated: false, grade:"N5"},
            {kanji: "字", pos:25, activated: false, grade:"N4"},
            {kanji: "字", pos:26, activated: false, grade:"N2"},
            {kanji: "字", pos:27, activated: false, grade:"N5"},
            {kanji: "字", pos:28, activated: false, grade:"N3"},
            {kanji: "字", pos:29, activated: false, grade:"N2"},
            {kanji: "字", pos:30, activated: false, grade:"N4"},
            {kanji: "字", pos:31, activated: false, grade:"N3"},
            {kanji: "字", pos:32, activated: false, grade:"N3"},
            {kanji: "字", pos:33, activated: false, grade:"N4"},
            {kanji: "字", pos:34, activated: false, grade:"N5"},
            {kanji: "字", pos:35, activated: false, grade:"N4"},
            {kanji: "字", pos:36, activated: false, grade:"N5"},
            {kanji: "字", pos:37, activated: false, grade:"N2"},
            {kanji: "字", pos:38, activated: false, grade:"N3"},
            {kanji: "字", pos:39, activated: false, grade:"N2"},
            {kanji: "字", pos:40, activated: false, grade:"N5"},
            {kanji: "字", pos:41, activated: false, grade:"N4"},
            {kanji: "字", pos:42, activated: false, grade:"N5"},
            {kanji: "字", pos:43, activated: false, grade:"N2"}
        ]

    const SingleActivation = (state, pos) => {
        return state.map( elem => {
            if(elem.pos === pos) {
                return {
                    kanji: elem.kanji,
                    pos: pos,
                    activated: elem.activated === false ? true : false,
                    grade: elem.grade
                } 
            }
            return elem
        })
    }
    const groupActivation = () => {
        return content.map( elem => (
            {
                kanji: elem.kanji,
                pos: elem.pos,
                activated: buttonList[elem.grade],
                grade: elem.grade

            }
        ))
        
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'single' :
                return SingleActivation(state, action.pos)
            case 'group' :
                return groupActivation()
            default:
                throw new Error()
        }
    }
    
    const [state, dispatch] = useReducer(reducer, content)

    useEffect(()=> { dispatch({ type: 'group'}) }, [buttonList])


    const handleKanjiClick = (pos) => { dispatch({ type: 'single', pos: pos}) }

    return (
    <div className="content-box">{
        state.map( obj => (
            <SingleKanji 
                key={obj.pos}
                content={obj.kanji}
                activated={obj.activated}
                onClick={() => handleKanjiClick(obj.pos)}/>
        ))
        }
    </div>
    )
}

export default ContentBox