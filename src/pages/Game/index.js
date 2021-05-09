import React, { Component } from 'react'
import GameMode1 from './GameMode1'
import GameMode2 from './GameMode2'
import Navigation from './navigation'
import { connect } from 'react-redux'
import * as actions from './../../actions'
import axios from 'axios'
import FinalPanel from './finalPanel'
// get data from state 
class Game extends Component {
    render() {
        let accountID = localStorage.getItem("accountIDlve")
        const getGameData = async () => {
            if (!this.props.gameManage.questionData && accountID) {
                let gameData = await axios.get("/word/getTenWordByIdCatalogStored/" + accountID)
                if (gameData.data.status) {
                    this.props.initGameData(gameData.data.data[0])
                }
            }
        }
        getGameData()
        //func show game with number question condition
        var maxLength;
        if (this.props.gameManage.questionData){
            let tmp_gameData = this.props.gameManage.questionData
            maxLength = tmp_gameData.length
        }

        const GameQuestion = () => {
            if (this.props.gameManage.questionData) {
                let currentQuestion = this.props.gameManage.currentQuestion
                let gameData = this.props.gameManage.questionData
                maxLength = gameData.length
                console.log(maxLength+"is value");
                if (currentQuestion <= gameData.length) {// make sure the current question not bigger than the max number question
                    let questionDataToShow = gameData[currentQuestion-1]
                 
                    switch (currentQuestion%2) {
                        case 1:
                            return <GameMode1 data = {questionDataToShow}/>
                        case 0:
                            return <GameMode2 data = {questionDataToShow}/>
                        default:
                            
                    }
                }
                else{
                    return <FinalPanel/>
                    //show component final game, and ask user , do you continue game or exit(go to home)
                }
            }
            return null
        }
  
        console.log(this.props.gameManage.currentQuestion + "HEREEEEEEEEEEEEEEEEE E " + this.maxLength);
        return (
            <div>
                <div className="col-12 container-game">
                {(this.props.gameManage.currentQuestion <= maxLength)? <Navigation numberQuestion = {this.props.gameManage.currentQuestion} /> :null}
                    <GameQuestion/>
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
        initGameData: (data) => {
            dispatch(actions.initGameDataAction(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game)