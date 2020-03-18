import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const StartPage = ({setContent}) => {

    const [typeValue, setTypeValue] = useState('')

    const onChange = (event) => {
        setTypeValue(event.target.value)
    }
    const kanjilist = [
        { kanji:'漢', pos:23, grade:'N5'},
        { kanji:'字', pos:24, grade:'N5'},
        { kanji:'字', pos:25, grade:'N4'},
        { kanji:'字', pos:26, grade:'N2'},
        { kanji:'字', pos:27, grade:'N5'},
        { kanji:'字', pos:28, grade:'N3'},
        { kanji:'字', pos:29, grade:'N2'},
        { kanji:'字', pos:30, grade:'N4'},
        { kanji:'字', pos:31, grade:'N3'},
        { kanji:'字', pos:32, grade:'N3'},
        { kanji:'字', pos:33, grade:'N4'},
        { kanji:'字', pos:34, grade:'N5'},
        { kanji:'字', pos:35, grade:'N4'},
        { kanji:'字', pos:36, grade:'N5'},
        { kanji:'字', pos:37, grade:'N2'},
        { kanji:'字', pos:38, grade:'N3'},
        { kanji:'字', pos:39, grade:'N2'},
        { kanji:'字', pos:40, grade:'N5'},
        { kanji:'字', pos:41, grade:'N4'},
        { kanji:'字', pos:42, grade:'N5'},
        { kanji:'字', pos:43, grade:'N2'},
    ]

    return (
        <>
            <input type='text' value={typeValue} onChange={onChange}/>
            <Link to='/sorter'  onClick={() => setContent(`${typeValue}`)}>Input</Link>
            <Link to='/sorter'  onClick={() => setContent(kanjilist)}>List</Link>
        </>
    )
}

export default StartPage