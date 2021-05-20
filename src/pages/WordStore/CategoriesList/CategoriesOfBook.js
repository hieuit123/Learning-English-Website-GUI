import React from 'react'
import {Link} from 'react-router-dom'

export default function CategoriesOfBook(props) {
    return (
        <Link to={props.link} className="col col-lg-4 col-sm-6 col-md-6 col-xl-3">
            <div className="book-of-store">
                <div className="img-book">
                <img src={props.image}/>
                </div>
                
                <div className="name">{props.name}</div>
            </div>
        </Link>
    )
}
