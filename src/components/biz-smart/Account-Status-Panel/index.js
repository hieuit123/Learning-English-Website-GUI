import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import ExpBar from './Exp-Bar'
import InformationBar from './Infomation-Bar'
import ReviewInfo from './Review-Information'
import MiniStreakBar from './Streak-Bar'

class AccountStatusPanel extends Component {
    render() {
        // 0 - 200 đồng , 200 - 500 bạc, 400-800 vàng, 800 - 1200 kim cương , 1200 ++
        let fullName = ""
        let streak = 0
        if(this.props.accountManage.accountData) { 
            fullName = this.props.accountManage.accountData.AC_fullName
            streak = this.props.accountManage.accountData.AC_Streak
    }
    const gameLevel = {
            bronze:200,
            sliver:500,
            gold:800,
            diamond:1500
        }
        let currentLevel
        let nextLevel
        let nextExpOfLevel
        let currentExp = 200
        if( currentExp <= gameLevel.bronze ) {
            currentLevel = "Đồng";
            nextLevel="Bạc";
            nextExpOfLevel = gameLevel.sliver
        }
        if( currentExp > gameLevel.bronze && currentExp <= gameLevel.sliver) {
            currentLevel = "Bạc"
            nextLevel="Vàng" 
            nextExpOfLevel = gameLevel.gold}
        if( currentExp > gameLevel.sliver && currentExp <= gameLevel.gold ) {
            currentLevel = "Vàng"
            nextLevel="KIM CƯƠNG" 
            nextExpOfLevel = gameLevel.diamond
        }
        if( currentExp >= gameLevel.diamond) {
            currentLevel = "KIM CƯƠNG"
            nextLevel="Pro" 
            nextExpOfLevel = currentExp}
            
        return (
            <div>
                <InformationBar name = {fullName} level = {nextLevel}/>
                <ExpBar currentExp = {currentExp} nextLevelExp = {nextExpOfLevel} nextLevel={nextLevel} currentLevel={currentLevel} />
                <hr className="line-1"></hr>
                <MiniStreakBar streakDay = {streak} />
                <ReviewInfo reviewWords  = "14" />
                <Link to="/game" >
                    <div className="btn-mini-play-game">
                        <i className="fas fa-play"></i>
                        <div>CHƠI NGAY</div>
                    </div>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      accountManage: state.accountManage
    }
  }

export default connect(mapStateToProps)(AccountStatusPanel)


