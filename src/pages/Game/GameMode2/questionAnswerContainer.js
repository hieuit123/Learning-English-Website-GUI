import React from 'react'

export default function QuestionAnswerContainer(props) {
    return (
        <button onClick={()=>props.onClick()}
        disabled = {props.isDisabledClickQA} 
        className={(props.isAnswer) ? "qa-container active": "qa-container"}>
        {props.wordContent}            
        </button>
    )
}
