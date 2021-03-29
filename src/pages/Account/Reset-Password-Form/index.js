import React, { Component } from 'react'

export default class ResetPasswordForm extends Component {
    render() {
        return (
            <>
                <form action="/reset/password/" className="form-reset">
                    <input type="email" id="resetEmail" className="form-control" placeholder="Địa chỉ email" required/>
                    <button className="btn btn-primary btn-block" type="submit">Đặt lại Mật Khẩu</button>
                    <a href="#" id="cancel_reset"><i className="fas fa-angle-left" /> Trở về</a>
                </form>
            </>
        )
    }
}
