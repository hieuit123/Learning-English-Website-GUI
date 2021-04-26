import React from 'react'

export default function Answer(props) {
    return (
        <div onClick = {props.onClick} className="mode1-answer">
            {props.content}
        </div>
    )
}
