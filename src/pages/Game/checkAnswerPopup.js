import React from 'react'

export default function CheckAnswerPopup(props) {
    let classTitle = ""
    let classButton = "check-popup-btn default"
    let titleContent = ""
    let titleButton = "KIỂM TRA"
    let correctAnswer=""
    let classIcon = ""
    let classOwnAnswer="own-answer"
    let classParentSection ="check-popup-answer"
    switch (props.stateAnswer) {
        case 'true':
            classParentSection = "check-popup-answer green"
            classTitle = "check-popup-title green"
            classButton = "check-popup-btn green"
            titleContent = "CHÍNH XÁC"
            titleButton = "TIẾP TỤC"
            classIcon = "fas fa-check-circle fa-md true"
            classOwnAnswer = "hide-component"
            break
        case 'false':
            classParentSection = "check-popup-answer red"
            classTitle = "check-popup-title red"
            classButton = "check-popup-btn red"
            titleContent = "KHÔNG CHÍNH XÁC"
            titleButton = "TIẾP TỤC"
            correctAnswer = props.correctAnswer
            classIcon = "fas fa-times-circle fa-md false"
            classOwnAnswer= "hide-component"
            break
        default:
    }
    const checkAnswerInside = ()=>{
        if(props.stateAnswer === "default") props.checkClick()
        else props.continueClick()
    }
    return (
        <div className={classParentSection} >
            <i className={classIcon}></i>
            <div className={classTitle}>{titleContent}</div>
            <div onClick={checkAnswerInside} className={classButton}>{titleButton}</div>
            <div className={classOwnAnswer}>{props.ownAnswer}</div>
            <div className="clearfix"></div>
            <div className = "correct-answer" >{props.correctAnswer}</div>
   
        </div>

    )
}
