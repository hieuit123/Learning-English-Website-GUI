import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from './../../actions'
import axios from 'axios'

class FinalPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberCorrectAnswer: 0,
            numberFailedAnswer: 0
        }
    }
    async componentDidMount() {
        let arrayFailedAnswer = []
        let questionData = this.props.gameManage.questionData
        let arrayCorrectAnswer = this.props.gameManage.arrayCorrectAnswer

        for (let i in questionData) {
            if (!this.props.gameManage.arrayCorrectAnswer) break
            let flagFailed = true
            this.props.gameManage.arrayCorrectAnswer.forEach(idCorrectAnswer => {
                if (questionData[i].Word.W_Id == idCorrectAnswer) {
                    flagFailed = false
                }
            })
            if (flagFailed) arrayFailedAnswer.push(questionData[i].Word.W_Id) // if word not true -> add to array failed array
        }
        let stringCorrectAnswer = (arrayCorrectAnswer !== "") ? arrayCorrectAnswer.toString(): 0
        let stringFailedAnswer = (arrayFailedAnswer !=="") ? arrayFailedAnswer.toString(): 0
        let accountID = localStorage.getItem("accountIDlve")

        console.log(stringCorrectAnswer);
        let result = await axios.get("/word/update/"+stringCorrectAnswer+"/"+stringFailedAnswer+"/"+accountID)
        console.log(result.data.status);
        console.log("ket qua that bai: "+arrayFailedAnswer.toString());
        console.log("ket qua thanh cong: "+arrayCorrectAnswer.toString());


        this.setState({
            numberCorrectAnswer: arrayCorrectAnswer.length,
            numberFailedAnswer: questionData.length - arrayCorrectAnswer.length
        })
    }
    render() {
        const handleEndGame = () => {
            this.props.callGameManageReducer(actions.resetGameDataAction())
        }
        const handleContinueGame = () => {
            this.props.callGameManageReducer(actions.backToQuestionOne())
        }
        return (
            <div className="container">
                <div className="result-game">
                    <i className="fas fa-check-circle fa-6x green"></i>
                    <i className="fas fa-times-circle fa-6x red"></i>
                    <div className="clearfix"></div>
                    <span className="green">{this.state.numberCorrectAnswer}</span> <span className="red">{this.state.numberFailedAnswer}</span>
                    <div className="clearfix"></div>
                </div>
                <div className="added-star"><span> +{this.state.numberCorrectAnswer}</span> <i className="fas fa-star"></i></div>
                <div className="footer-game">
                    <div onClick={() => handleContinueGame()} className="continue-game-btn">TIẾP TỤC</div>
                    <div onClick={() => handleEndGame()} className="end-game-btn">KẾT THÚC</div>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { gameManage: state.gameManage }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        callGameManageReducer: (action) => {
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FinalPanel)