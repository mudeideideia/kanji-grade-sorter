import React from 'react'
import { Link } from 'react-router-dom'

const GoButton = ({link}) => {
    
    return <Link className={link.className} to={link.to}  onClick={link.onClick}>
        <i className="button-icon" aria-hidden="true"></i>
    </Link>
}

export default GoButton