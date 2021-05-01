import React, { Component } from 'react';
import {connect} from 'react-redux'

import * as actions from './../../actions'



class FinalPanel extends Component {
    render() {
      const handleEndGame = ()=>{
          this.props.callGameManageReducer(actions.resetGameDataAction())
      }
      const handleContinueGame = ()=>{
          this.props.callGameManageReducer(actions.backToQuestionOne())
      }
        return (
            <div className="container">
                <div className="result-game">
                <i className="fas fa-check-circle fa-6x green"></i>
                <i className="fas fa-times-circle fa-6x red"></i>
                <div className="clearfix"></div>
                    <span className="green">6</span> <span className="red">4</span>
                    <div className="clearfix"></div>
                </div>
                <div className = "added-star"><span> +6</span> <i className="fas fa-star"></i></div> 
                <div className="footer-game">
                    <div onClick={()=>handleContinueGame()} className="continue-game-btn">TIẾP TỤC</div>
                    <div onClick={()=>handleEndGame()} className = "end-game-btn">KẾT THÚC</div>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        callGameManageReducer: (action) => {
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(FinalPanel)