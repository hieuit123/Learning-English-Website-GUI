import React from 'react'
import {Link} from 'react-router-dom'
export default function BookOfStore(props) {
    return (
        <Link to="word-store/4" className="col-3 col-6-sm">
            <div className="book-of-store">
                <div className="img-book">
                <img src="https://salt.tikicdn.com/ts/tmp/bd/ab/45/181e661b2c3315fd9f3b9231ca0cd819.jpg"/>
                </div>
                
                <div className="name">{props.name}</div>
            </div>
        </Link>
    )
}
