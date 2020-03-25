import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


const BackButton = () => {
    return (
        // <a href="/" className="back-button"
        //     aria-label="Go back to previus page">            
        //     <i className="button-icon" aria-hidden="true">
        //     </i>
        // </a>
        <Link className="back-button" to='/'>
            <i className="button-icon" aria-hidden="true"></i>
        </Link>
    )
}

export default BackButton