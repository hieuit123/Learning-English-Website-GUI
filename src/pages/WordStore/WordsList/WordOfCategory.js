import React from 'react'

export default function WordOfCategory(props) {
    return (
        <div className="col-2 col-6-sm">
        <div className="category-of-book">
        <span>{props.originalWord}</span>
        </div>

    </div>
    )
}
