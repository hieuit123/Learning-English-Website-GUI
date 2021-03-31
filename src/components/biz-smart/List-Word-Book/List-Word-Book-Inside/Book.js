import React from 'react'
import {Redirect} from 'react-router-dom'

export default function Book(props) {
    var tempData = [...props.wordbook]
    tempData.shift()
    var title =props.wordbook[0]
    var wordbookPreview = tempData.map((value)=> value+", ")
    const handleClickItem = (id) => {

    }
    return (
        <div className={props.color} onClick={handleClickItem(props.id)} >
                <label>{title}</label>
                <hr></hr>
                <p>{wordbookPreview}</p>
            </div>
    )
}
