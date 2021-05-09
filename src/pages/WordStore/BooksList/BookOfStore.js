import React from 'react'

export default function BookOfStore(props) {
    return (
        <div className="col-3 col-6-sm">
            <div className="book-of-store">
                <span className="name">{props.name}</span>
            </div>
        </div>
    )
}
