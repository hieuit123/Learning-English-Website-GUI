import React, { Component } from 'react'
import ExpBar from './Exp-Bar'
import InformationBar from './Infomation-Bar'
import ReviewInfo from './Review-Information'
import MiniStreakBar from './Streak-Bar'
import {Link} from 'react-router-dom'
export default class AccountStatusPanel extends Component {
    render() {
        return (
            <div>
                <InformationBar />
                <ExpBar />
                <hr className="line-1"></hr>
                <MiniStreakBar />
                <ReviewInfo />
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
