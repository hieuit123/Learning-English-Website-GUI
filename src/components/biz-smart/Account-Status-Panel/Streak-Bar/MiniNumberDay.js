import React from 'react'

export default function MiniNumberDay(props) {
    var classStyle = "fas fa-sun"
    var dayStyle = "mini-day-streak"
    if(props.status === "disable") {
        classStyle = "fas fa-sun disable-sun"
        dayStyle = "mini-day-streak disable-sun"
    }

    return (
        <div>
            <i  className= {classStyle} ></i>
            <div className={dayStyle}>{props.day}</div>
        </div>
    )
}
