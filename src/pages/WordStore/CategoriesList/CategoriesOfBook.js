import React from 'react'
import {Link} from 'react-router-dom'

export default function CategoriesOfBook(props) {
    return (
        <Link to="/word-store/4/2" className="col col-lg-4 col-sm-6 col-md-6 col-xl-3">
            <div className="book-of-store">
                <div className="img-book">
                <img src="https://i.pinimg.com/736x/cc/36/e9/cc36e9a3aa2f1fcc29a7c03d40cdfbaf.jpg"/>
                </div>
                
                <div className="name">{props.name}</div>
            </div>
        </Link>
    )
}
