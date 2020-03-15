import React from 'react'
import './style.css'

const KanjiButton = ({text, activated, onClick}) => {
    return (
        <button 
            className={`kanji-button${activated===true? ' -activated': ''}`} 
            onClick={onClick}>{text}
        </button>
    )
}

export default KanjiButton