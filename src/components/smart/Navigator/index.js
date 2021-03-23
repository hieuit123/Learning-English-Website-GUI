import React from 'react'

export default function Navigator() {
    return (
            <div className="d-flex justify-content-around">
                <div className="zoom-style-hover">
                    <div className="circle-btn-account"><i className="fas fa-user"></i></div>
                    <label className="lb-btn-navigator">TÀI KHOẢN<br></br>CỦA TÔI</label>
                </div>

                <div className="zoom-style-hover">
                    <div className="circle-btn-news"><i className="fas fa-newspaper"></i></div>
                    <label className="lb-btn-navigator">BÀI VIẾT<br></br>TIẾNG ANH</label>
                </div>

                <div className="zoom-style-hover">
                    <div className="circle-btn-word-store"><i className="fas fa-store-alt"></i></div>

                    <label className="lb-btn-navigator">CỬA HÀNG<br></br>TỪ VỰNG</label>
                </div>

                <div className="zoom-style-hover">
                    <div className="circle-btn-manage-wb"><i className="fas fa-atlas"></i></div>
                    <label className="lb-btn-navigator">QUẢN LÝ<br></br>SỔ TỪ</label>
                </div>

            </div>
    )
}