import React from 'react'
import {Link} from 'react-router-dom'

export default function ButtonPlayGame() {
    return (
        <Link to="/game" >
            <div className="btn-mini-play-game">
            <i className="fas fa-play"></i>
            <div>CHƠI NGAY</div>
            </div>
        </Link>
    )
}
