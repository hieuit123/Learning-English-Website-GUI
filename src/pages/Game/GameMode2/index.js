import React, { Component } from 'react'
import { connect } from 'react-redux'

import CheckAnswerPopup from '../checkAnswerPopup';
import QuestionAnswerContainer from './questionAnswerContainer'
import * as actions from './../../../actions'
import textToSpeech from './../../../utils/spellWord'


class GameMode2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionQueue: null,
            answerQueue: [],
            answerState: "default",
            selectedAnswer: "",
            content: "",
            isDisabledClickQA: false,
            phrase: ""
        }
    }
    componentDidMount() {
        const initData = {
            phrase: this.props.data.Word.W_Phrase,
            phraseMean: "null",
            phraseAnswer: ""
        }
        this.setState({ phrase: this.props.data.Word.W_Phrase });
        let wrongWords = this.props.data.fourAnswer.split(";")
        let arrayPhraseAnswer = initData.phrase.split(" ")
        for (let index in wrongWords) arrayPhraseAnswer.push(wrongWords[index])
        let indexQuestionQueue = 0
        let lengthQueue = arrayPhraseAnswer.length

        function swap(i, j) {
            let tmp = arrayPhraseAnswer[i]
            arrayPhraseAnswer[i] = arrayPhraseAnswer[j]
            arrayPhraseAnswer[j] = tmp
        }

        while (indexQuestionQueue < lengthQueue - 1) {
            swap(indexQuestionQueue, indexQuestionQueue + 1)
            indexQuestionQueue += 2
        }
        indexQuestionQueue = 0
        while (indexQuestionQueue < lengthQueue - 4) {
            swap(indexQuestionQueue, indexQuestionQueue + 2)
            indexQuestionQueue += 3
        }
        let random = Math.floor(Math.random() * 3)
        swap(lengthQueue - 1, random)
        random = Math.floor(Math.random() * 3)
        swap(lengthQueue - 2, random)
        random = Math.floor(Math.random() * 3)
        swap(lengthQueue - 3, random)
        random = Math.floor(Math.random() * 3)
        swap(lengthQueue - 4, random)

        console.log(this.state.questionQueue)

        if (this.state.questionQueue === null) this.setState({ questionQueue: arrayPhraseAnswer })

    }
    render() {

        console.log("current state : " + this.state.questionQueue + this.state.answerQueue);
        const pushQuestion = (index) => {
            let tmpQuestionQueue, tmpAnswerQueue
            tmpQuestionQueue = [...this.state.questionQueue]
            tmpAnswerQueue = [...this.state.answerQueue]
            tmpAnswerQueue.push(tmpQuestionQueue[index])
            tmpQuestionQueue.splice(index, 1)

            this.setState({
                questionQueue: tmpQuestionQueue,
                answerQueue: tmpAnswerQueue
            })
        }
        const pushAnswer = (index) => {
            let tmpQuestionQueue, tmpAnswerQueue
            tmpQuestionQueue = [...this.state.questionQueue]
            tmpAnswerQueue = [...this.state.answerQueue]
            tmpQuestionQueue.push(tmpAnswerQueue[index])
            tmpAnswerQueue.splice(index, 1)

            this.setState({
                questionQueue: tmpQuestionQueue,
                answerQueue: tmpAnswerQueue
            })
        }
        const CustomQA = (props) => {
            return <>
                <div className="clearfix"></div>
                <div className="line-gameMode2"></div>
                <QuestionAnswerContainer
                    wordContent={props.value}
                    onClick={() => props.push()}
                    isAnswer={props.isAnswer}
                    isDisabledClickQA={this.state.isDisabledClickQA}
                />
            </>
        }
        const answer = () => {
            let length = 0;
            let line = 1;
            //break line when this is full
            let answers = this.state.answerQueue.map((value, index) => {
                length += value.length
                let conditionLength
                if (length > 52 * line) {
                    line += 1
                    conditionLength = 52 * line
                }

                if (length != 0 && conditionLength % 52 === 0) {
                    return <CustomQA
                        isDisabledClickQA={this.state.isDisabledClickQA}
                        push={() => pushAnswer(index)}
                        isAnswer={true}
                        value={value}
                        index={index}
                        key={9999999} />
                }
                return <QuestionAnswerContainer
                    key={index}
                    wordContent={value}
                    onClick={() => pushAnswer(index)}
                    isDisabledClickQA={this.state.isDisabledClickQA}
                    isAnswer={true}
                />
            })

            let result = <>
                <div >{answers}
                    <div className="clearfix"></div>
                </div>
            </>
            return result
        }

        const question = () => {
            let length = 0;
            let line = 1;
            //break line when this is full
            let questions = this.state.questionQueue.map((value, index) => {
                length += value.length
                let conditionLength
                if (length > 52 * line) {
                    line += 1
                    conditionLength = 52 * line
                }

                if (length != 0 && conditionLength % 52 === 0) {
                    return <CustomQA
                        isDisabledClickQA={this.state.isDisabledClickQA}
                        push={() => pushQuestion(index)}
                        isAnswer={false}
                        value={value}
                        index={index}
                        key={999999} />
                }
                return <QuestionAnswerContainer
                    wordContent={value}
                    isDisabledClickQA={this.state.isDisabledClickQA}
                    onClick={() => pushQuestion(index)}
                    key={index}
                    isAnswer={false}
                />
            })

            let result = <>
                <div >{questions}
                    <div className="clearfix"></div>
                </div>
            </>
            return result
        }
        
        const continueClick = () => {
            this.props.callGameManageReducer(actions.nextQuestion(numberQuestion + 1))
            if (this.state.answerState === "true") this.props.callGameManageReducer(actions.addCorrectAnswerIDAction(this.props.data.Word.W_Id))
        }
        //Check answer : phrase with input user
        const checkAnswer = () => {
            let userInput = this.state.answerQueue.toString()
            console.log(userInput);
            userInput = userInput.replaceAll(',', " ",)
            if (userInput === this.state.phrase) {
                document.getElementById("audio2").play()
                this.setState({
                    isDisabledClickQA: true,
                    answerState: "true"
                })
            }
            else {
                document.getElementById("audio3").play()
                this.setState({
                    isDisabledClickQA: true,
                    answerState: "false"
                })
            }
        }
        const spellWord = () => {
            textToSpeech(this.state.phrase)
        }
        let numberQuestion = this.props.gameManage.currentQuestion
        return (
            <div className="gameMode2 container">
                <i onClick={() => spellWord()} className="fas fa-volume-up fa-4x iGameMode2"></i>
                <div className="answer-container">
                    {(this.state.answerQueue) ? answer() : ""}
                    <div className="line-gameMode2"></div>
                </div>
                <div className="question-container">
                    {(this.state.questionQueue) ? question() : ""}
                    <div className="line-gameMode2"></div>
                </div>
                <CheckAnswerPopup
                    checkClick={() => checkAnswer()}
                    continueClick={()=>continueClick()}
                    stateAnswer={this.state.answerState}
                    ownAnswer={this.state.selectedAnswer}
                    correctAnswer={this.state.content} />
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        gameManage: state.gameManage
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        callGameManageReducer: (action) => {
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GameMode2)