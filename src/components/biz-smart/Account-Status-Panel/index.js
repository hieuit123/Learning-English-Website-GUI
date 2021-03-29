import React, { Component } from 'react'
import ButtonPlayGame from './ButtonPlayGame'
import ExpBar from './Exp-Bar'
import InformationBar from './Infomation-Bar'
import ReviewInfo from './Review-Information'
import MiniStreakBar from './Streak-Bar'

export default class AccountStatusPanel extends Component {
    render() {
        return (
            <div>
                <InformationBar/>
                <ExpBar/>
                <hr className="line-1"></hr>
                <MiniStreakBar/>
                <ReviewInfo/>
                <ButtonPlayGame/>
            </div>
        )
    }
}
