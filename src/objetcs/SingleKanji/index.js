import  React from 'react'
import './style.css'

const SingleKanji = ({content, activated, onClick}) => {
    return (
        <ruby className={`single-kanji${activated===true? " -activated" : ''}`} onClick={onClick}>{content}</ruby>
    )
}

export default SingleKanji

