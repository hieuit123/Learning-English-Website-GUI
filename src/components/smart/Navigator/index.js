import React from 'react'
import { Link } from "react-router-dom"


const handleClick = () => {
    localStorage.removeItem("tokenlve");
    localStorage.setItem("accountIDlve", 'false')
    window.location = "/login";
}

export default function Navigator() {
    let showComponentClass = ""
  let accountIDlve = localStorage.getItem("accountIDlve")
  if(accountIDlve === 'false') showComponentClass = "hide-component"
    return (
        <div className={showComponentClass}>
            <div className="d-flex justify-content-around">
                <div className="zoom-style-hover">
                    <Link to="/">
                        <div className="circle-btn-home"><i className="fas fa-home"></i></div>
                        <label className="lb-btn-navigator">TRANG CHỦ</label>
                    </Link>
                </div>

                <div className="zoom-style-hover">
                    <Link to="/account">
                        <div className="circle-btn-account"><i className="fas fa-user"></i></div>
                        <label className="lb-btn-navigator">TÀI KHOẢN<br></br>CỦA TÔI</label>
                    </Link>
                </div>

                <div className="zoom-style-hover">
                    <Link to="/word-store?wordCategoryId=4">
                        <div className="circle-btn-word-store"><i className="fas fa-store-alt"></i></div>

                        <label className="lb-btn-navigator">CỬA HÀNG<br></br>TỪ VỰNG</label>
                    </Link>
                </div>

                <div className="zoom-style-hover">
                    <Link to="/manage">
                        <div className="circle-btn-manage-wb"><i className="fas fa-atlas"></i></div>
                        <label className="lb-btn-navigator">QUẢN LÝ<br></br>SỔ TỪ</label>
                    </Link>
                </div>
            </div>
            <div onClick={handleClick} className="btn-logout-nav"><i className="fas fa-sign-out-alt"></i>Đăng xuất</div>
        </div>
    )
}