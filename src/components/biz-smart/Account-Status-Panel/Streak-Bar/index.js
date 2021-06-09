import React from 'react'
import MiniNumberDay from './MiniNumberDay'

export default function MiniStreakBar(props) {
    let streakData = sessionStorage.getItem("streakDataAccount")
    let streakJsonData = JSON.parse(streakData)
    let StreakHtml
    if (streakData) {
        streakJsonData.sort((streak1, streak2)=>{
            return streak2.day - streak1.day;
        });
        StreakHtml = streakJsonData.map((streak, index) => {
            let day;
            let status;
            switch (streak.day) {
                case 0: day = "CN"
                    break
                case 1: day = "T2"
                    break;
                case 2: day = "T3"
                    break;
                case 3: day = "T4"
                    break;
                case 4: day = "T5"
                    break;
                case 5: day = "T6"
                    break;
                case 6: day = "T7"
                    break;
            }
            if (streak.data == 0) status = "disable"
            else status = "visible"
            return <MiniNumberDay key={index} day={day} status={status} />
        })
    }

    return (
        <div className="d-flex justify-content-around mini-streak">
            {(streakData) ? StreakHtml.reverse() : ""}
            <div className="border-left">
                <div className="mini-number-day-streak">{props.streakDay}</div>
                <div className="mini-streak-style-text">STREAK</div>
            </div>

        </div>
    )
}
