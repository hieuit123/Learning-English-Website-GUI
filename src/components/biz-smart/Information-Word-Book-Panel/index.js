import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class InformationWordBookPanel extends Component {
    render() {
        return (
            <div className="container">
                <div className="clearfix">
                <label className="t-welcome-user float-right">Xin chào, Hiếu Minh Trần!</label><br></br>
                </div>

                <label className="t-guide-user">Nhấn vào chơi ngay để bắt đầu bài học</label>
                <hr className="line-1"></hr>
                {/* <hr></hr> */}
                <div>
                    <div className="d-flex justify-content-around">
                        <div className="container-word-number">
                            <div className="word-number">35</div>
                        </div>
                        <Link to="/game">
                        <div className="btn-play-game">
                            <i className="fas fa-play"></i>
                            <div id="play-game-btn">CHƠI NGAY</div>
                        </div>
                        </Link>
                    </div>
                    <label className="info-current-wb"> BẠN ĐÃ THÊM ĐƯỢC <strong>35</strong> TỪ VÀO HÔM NAY</label>
                </div>
            </div>
        )
    }
}
