import React, { useState } from 'react'
import { gradeSearch } from '../../personal_modules'
import './style.css'
import ContentEditable from '../../components/ContenteEditable'
import Header from '../../components/Header'
import GoButton from '../../objetcs/GoButton'
import Wrapper from '../../objetcs/Wrapper'


const StartPage = ({setContent}) => {

    // const sentences = [
    //     '正しいものは　どれですか。',
    //     '今、高校の　友だちが　東京に　います。',
    // ]

    // const [typeValue, setTypeValue] = useState(sentences[1])
    const [typeValue, setTypeValue] = useState("")

    const onChange = (event) => {
        setTypeValue(event.target.value)
    }
    
    const link = {className: 'go-button', to:'/sorter', onClick: () => setContent(gradeSearch(typeValue))}

    return (
        <div className='start-page'>
            <Header link={link}/>
            <div className="text-wrapper">
                <ContentEditable value={typeValue} onChange={onChange}/>
            </div>
            <Wrapper className="button-wrapper">
                <GoButton link={link} />
            </Wrapper>
        </div>
    )
}

export default StartPage