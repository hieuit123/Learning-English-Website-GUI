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
            content: "",
            randomQuestion: null
        }
    }
    componentDidMount() {
        if (!this.state.randomQuestion) this.setState({ randomQuestion: Math.floor(Math.random() * 3) })
    }
    render() {

        let numberQuestion = this.props.gameManage.currentQuestion
        var gameMode1 = {
            guide: "",
            image: "",
            sentence: "",
            correctAnswer: "",
            answer: [],

        }

        const mappingDataToGame = () => {
            gameMode1 = {
                guide: "Chọn đáp án phù hợp nhất",
                image: this.props.data.Word.W_Avatar,
                sentence: this.props.data.Word.W_Phrase,
                correctAnswer: this.props.data.Word.W_originalWord,
                answer: []
            }
            let answersFromData = this.props.data.fourAnswer.split(";")

            for (let i = 0; i < 4; i++)
                (i === this.state.randomQuestion) ? gameMode1.answer.push(this.props.data.Word.W_originalWord) : gameMode1.answer.push(answersFromData[i])
        }


        const changeAnswer = (answer) => {
            this.setState({
                selectedAnswer: answer
            });
        }
        const continueClick = () => {
            this.props.callGameManageReducer(actions.nextQuestion(numberQuestion + 1))
            if (this.state.answerState === "true") this.props.callGameManageReducer(actions.addCorrectAnswerIDAction(this.props.data.Word.W_Id))
        }
        const checkAnswer = () => {

            if (this.state.selectedAnswer.trim() === gameMode1.correctAnswer) {
                document.getElementById("audio2").play()
                this.setState({
                    answerState: "true",
                    selectedAnswer: ""
                })

            }
            else {
                document.getElementById("audio3").play()
                this.setState({
                    answerState: "false",
                    selectedAnswer: ""
                });
            }
        }
        mappingDataToGame()
        gameMode1.correctAnswer = gameMode1.correctAnswer.trim()
        gameMode1.sentence = gameMode1.sentence.toLocaleLowerCase()
            let sentenceQuestion = gameMode1.sentence.replace(gameMode1.correctAnswer, " _ _ _ _ _ _ ")
            let tmpWord = gameMode1.correctAnswer.toLocaleLowerCase().replace('ing',"")
            console.log(tmpWord+"   " + gameMode1.sentence);
            sentenceQuestion = gameMode1.sentence.replace(tmpWord, " _ _ _ _ _ _ ")
  
        return (
            <div className="gameMode1">
                <img src={gameMode1.image} />
                <div className="gameMode1-sentence">{sentenceQuestion}</div>
                <div className="row answer-row">
                    <Answer content={gameMode1.answer[0]} onClick={() => changeAnswer(gameMode1.answer[0])} />
                    <Answer onClick={() => { changeAnswer(gameMode1.answer[1]) }} content={gameMode1.answer[1]} />
                    <Answer onClick={() => { changeAnswer(gameMode1.answer[2]) }} content={gameMode1.answer[2]} />
                    <Answer onClick={() => { changeAnswer(gameMode1.answer[3]) }} content={gameMode1.answer[3]} />
                    <CheckAnswerPopup
                        checkClick={() => checkAnswer()}
                        continueClick={()=>continueClick()}
                        stateAnswer={this.state.answerState}
                        ownAnswer={this.state.selectedAnswer}
                        correctAnswer={this.state.content} />
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps,)(GameMode1)