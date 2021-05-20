import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class InformationWordBookPanel extends Component {

    render() {
        return (
            <>
                <div className="clearfix">
                <label className="t-welcome-user float-right">Xin chào, {(this.props.accountManage.accountData)?this.props.accountManage.accountData.AC_fullName:""}</label><br></br>
                </div>
                <label className="t-guide-user">Nhấn vào chơi ngay để bắt đầu bài học</label>
                <hr className="line-1"></hr>
                {/* <hr></hr> */}
                <div>
                    <div className="d-flex justify-content-around">
                        <div className="container-word-number">
                            <div className="word-number">{(this.props.accountManage.accountData)?this.props.accountManage.accountData.analyticData.totalWordToday:"0"}</div>
                        </div>
                        <Link to="/game">
                        <div className="btn-play-game">
                            <i className="fas fa-play"></i>
                            <div id="play-game-btn">CHƠI NGAY</div>
                        </div>
                        </Link>
                    </div>
                    <label className="info-current-wb"> BẠN ĐÃ THÊM ĐƯỢC <strong>{(this.props.accountManage.accountData)?this.props.accountManage.accountData.analyticData.totalWordToday:"0"}</strong> TỪ VÀO HÔM NAY</label>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      accountManage: state.accountManage
    }
  }

export default connect(mapStateToProps,null)(InformationWordBookPanel)  
