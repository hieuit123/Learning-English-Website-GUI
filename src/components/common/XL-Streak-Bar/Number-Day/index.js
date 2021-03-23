import React from 'react'

export default function NumberDay(props) {
    var classStyle = "fas fa-sun"
    var dayStyle = "day-streak"
    if(props.status == "disable") {
        classStyle = "fas fa-sun disable-sun"
        dayStyle = "day-streak disable-sun"
    }

    return (
        <div>
            <i  className= {classStyle} ></i>
            <div className={dayStyle}>{props.day}</div>
        </div>
    )
}
