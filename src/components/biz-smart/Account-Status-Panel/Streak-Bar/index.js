import React from 'react'
import MiniNumberDay from './MiniNumberDay'

export default function MiniStreakBar() {

var  initStreakStatus = [
        {status:"visible"},
        {status:"visible"},
        {status:"visible"},
        {status:"visible"},
        {status:"visible"},
        {status:"visible"},
        {status:"disable"}
    ]

    return (
        <div className="d-flex justify-content-around mini-streak">
            <MiniNumberDay day="T2" status = {initStreakStatus[0].status} />
            <MiniNumberDay day="T3" status = {initStreakStatus[1].status} />
            <MiniNumberDay day="T4" status = {initStreakStatus[2].status} />
            <MiniNumberDay day="T5" status = {initStreakStatus[3].status} />
            <MiniNumberDay day="T6" status = {initStreakStatus[4].status} />
            <MiniNumberDay day="T7" status = {initStreakStatus[5].status} />
            <MiniNumberDay day="CN" status = {initStreakStatus[6].status} />
            <div className="border-left">
                <div className="mini-number-day-streak">7</div>
                <div className="mini-streak-style-text">STREAK</div>
            </div>

        </div>
    )
}
