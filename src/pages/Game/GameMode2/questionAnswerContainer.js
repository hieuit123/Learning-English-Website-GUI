import React from 'react'

export default function QuestionAnswerContainer(props) {
    return (
        <div onClick={()=>this.props.onClick()} className="qa-container">
            {props.wordContent}            
        </div>
    )
}
