import React from 'react'
import NumberDay from './Number-Day'

export default function StreakBar() {

    let streakData = sessionStorage.getItem("streakDataAccount")
    let streakJsonData = JSON.parse(streakData)
    let StreakHtml
    if (streakData) {
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
            if(streak.data == 0) status = "disable"
            else status = "visible"
            return <NumberDay key={index} NumberDay day={day} status={status} />
        })
    }
    return (
        <div className="d-flex justify-content-around">

            {(streakData) ? StreakHtml.reverse() : ""}
            <div className="border-left">
                <div className="number-day-streak">7</div>
                <div className="streak-style-text">STREAK</div>
            </div>

        </div>
    )
}
