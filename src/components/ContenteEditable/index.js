import React from 'react'
import './style.css'

const ContenteEditable = ({value, onChange}) => {
    // const handleInput = (event) => {
    //     console.log(event);
        
    // }
    return (
        <textarea className="editable-content" value={value} onChange={onChange}></textarea>
    )
}

export default ContenteEditable