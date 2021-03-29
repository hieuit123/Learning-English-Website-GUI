import React, { Component } from 'react'

export default class SignUpForm extends Component {
    render() {
        return (
            <>
                <form action="/signup/" className="form-signup">
                    <div className="social-login">
                        <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f" /> Đăng ký bằng Facebook</span> </button>
                    </div>
                    <div className="social-login">
                        <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g" /> Đăng ký bằng Google+</span> </button>
                    </div>
                    <p className="t-or">HOẶC</p>
                    <input type="text" id="user-name" className="form-control" placeholder="Họ và tên" required/>
                    <input type="email" id="user-email" className="form-control" placeholder="Địa chỉ email" required/>
                    <input type="password" id="user-pass" className="form-control" placeholder="Mật khẩu" required/>
                    <input type="password" id="user-repeatpass" className="form-control" placeholder="Nhập lại mật khẩu" required/>
                    <button className="btn btn-primary btn-block" type="submit"><i className="fas fa-user-plus" /> Đăng ký</button>
                    <a href="#" id="cancel_signup"><i className="fas fa-angle-left" /> Trở về</a>
                </form>
            </>
        )
    }
}
