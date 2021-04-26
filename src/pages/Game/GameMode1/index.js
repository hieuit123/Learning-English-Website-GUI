import React, { Component } from 'react'
import CheckAnswerPopup from '../checkAnswerPopup'
import Answer from './answer'
import * as actions from './../../../actions'
import { connect } from 'react-redux'

class GameMode1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answerState: "default",
            selectedAnswer: "",
            content:""
        }
    }

    render() {
        let numberQuestion = 1
        let gameMode1 = {
            title: "Chọn đáp án phù hợp nhất",
            image: "avatar.png",
            sentence: "Can you give me some information",
            correctAnswer: "information",
            answer: {
                a: "information",
                b: "work",
                c: "database",
                d: "application"
            }
        }
        let answer = {
            state: "default",
            ownAnswer: "information"
        }// stored in state
        const changeAnswer = (answer) => {
            this.setState({
                selectedAnswer:answer
            });
        }
        const checkAnswer = () => {
            if (this.state.selectedAnswer === gameMode1.correctAnswer) {
                this.setState({
                    answerState:"true",
                    selectedAnswer:""
                });
            }
            else {
                this.setState({
                    answerState:"false",
                    selectedAnswer:""
                });
            }
        }
        return (
            <div className="gameMode1">
                <img src="https://tse4.mm.bing.net/th?id=OIP.JCj5AZx1KxOrew_DU08OQwHaDk&pid=Api" />
                <div className="gameMode1-sentence">{gameMode1.sentence.replace(gameMode1.correctAnswer, " _ _ _ _ _ _")}</div>
                <div className="row answer-row">
                    <Answer content={gameMode1.answer.a} onClick={() => changeAnswer(gameMode1.answer.a)} />
                    <Answer onClick={() => { changeAnswer(gameMode1.answer.b) }} content={gameMode1.answer.b} />
                    <Answer onClick={() => { changeAnswer(gameMode1.answer.c) }} content={gameMode1.answer.c} />
                    <Answer onClick={() => { changeAnswer(gameMode1.answer.d) }} content={gameMode1.answer.d} />
                    <CheckAnswerPopup
                        checkClick={() => checkAnswer()}
                        continueClick={() => this.props.nextQuestion(numberQuestion + 1)}
                        stateAnswer={this.state.answerState}
                        ownAnswer={this.state.selectedAnswer}
                        correctAnswer={this.state.content} />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        nextQuestion: (number) => {
            dispatch(actions.nextQuestion(number))
        }
    }
}
export default connect(null, mapDispatchToProps)(GameMode1)