import React from 'react'

export default function Book(props) {
    var tempData = [...props.wordbook]
    tempData.shift()
    var title =props.wordbook[0]
    var wordbookPreview = tempData.map((value)=> value+", ")

    return (
        <div className={props.color}>
                <label>{title}</label>
                <hr></hr>
                <p>{wordbookPreview}</p>
            </div>
    )
}
