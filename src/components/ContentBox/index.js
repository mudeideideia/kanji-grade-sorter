import React, { useReducer, useEffect} from 'react'
import './style.css'
import SingleKanji from '../../objetcs/SingleKanji'


const ContentBox = ({buttonList, content=[]}) => {

    const kanjiList = content.map( elem => (
            {
                kanji: elem.kanji,
                pos: elem.pos,
                activated: buttonList[elem.grade],
                grade: elem.grade
            }
        )
    )
    console.log(`ContentBox:${content[0]}`);
    


    const SingleActivation = (state, pos) => {
        return state.map( elem => {
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
    }
    const groupActivation = () => {
        return kanjiList.map( elem => (
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
    
    const [state, dispatch] = useReducer(reducer, kanjiList)

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