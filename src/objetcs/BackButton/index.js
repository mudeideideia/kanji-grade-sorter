import React from 'react'
import './style.css'


const BackButton = () => {
    return (
        <a href="/" className="back-button"
            aria-label="Go back to previus page">            
            <i className="button-icon" aria-hidden="true">
            </i>
        </a>
    )
}

export default BackButton