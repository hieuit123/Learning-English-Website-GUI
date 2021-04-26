import React, { Component } from 'react'
import Navigator from '../../components/smart/Navigator'
import GameMode1 from './GameMode1'
import GameMode2 from './GameMode2'
import Navigation from './navigation'
import { connect } from 'react-redux'
import * as actions from './../../actions'
// get data from state 
class Game extends Component {
    render() {
        if (!this.props.gameManage.questionData) {
            console.log("init data");           
        }
        console.log(this.props.gameManage.currentQuestion + "HEREEEEEEEEEEEEEEEEEE");
        return (
            <div className="container">
                <div className="navigator col-12">
                    <Navigator />
                </div>
                <div className="col-12 container-game">
                    <Navigation />
                    <GameMode2 />
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
        initGameData: () => {
            dispatch(actions.initGameDataAction())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Game)