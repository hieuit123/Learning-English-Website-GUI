import React from 'react'
import NumberDay from './Number-Day'

export default function StreakBar() {

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
        <div className="d-flex justify-content-around">
            <NumberDay day="T2" status = {initStreakStatus[0].status} />
            <NumberDay day="T3" status = {initStreakStatus[1].status} />
            <NumberDay day="T4" status = {initStreakStatus[2].status} />
            <NumberDay day="T5" status = {initStreakStatus[3].status} />
            <NumberDay day="T6" status = {initStreakStatus[4].status} />
            <NumberDay day="T7" status = {initStreakStatus[5].status} />
            <NumberDay day="CN" status = {initStreakStatus[6].status} />
            <div className="border-left">
                <div className="number-day-streak">7</div>
                <div className="streak-style-text">STREAK</div>
            </div>

        </div>
    )
}
