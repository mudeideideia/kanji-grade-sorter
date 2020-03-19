import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { gradeSearch } from '../../personal_modules'
import './style.css'


const StartPage = ({setContent}) => {

    const sentences = [
        '正しいものは　どれですか。',
        '今、高校の　友だちが　東京に　います。',
    ]

   

    const [typeValue, setTypeValue] = useState(sentences[1])

    const onChange = (event) => {
        setTypeValue(event.target.value)
    }
    

    return (
        <div className='data-entrance'>
            <input type='text' value={typeValue} onChange={onChange}/>
            <Link to='/sorter'  onClick={() => setContent(gradeSearch(typeValue))}>
                Input
            </Link>
        </div>
    )
}

export default StartPage