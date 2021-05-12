import React from 'react'
import {Link} from 'react-router-dom'

export default function ToolBar(props) {
    return (
        <div to={props.backLink} className="toolbar-store">
            {props.backLink ? 
            <Link className="btn-back" to={props.backLink}><i className="fas fa-chevron-circle-left fa-lg"></i></Link>    
            :""
        }
            
            <span>{props.title}</span>
            <div className="clearfix"></div>
        </div>
    )
}
