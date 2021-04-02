import React, { Component } from 'react'
import * as configUrl from './../../../assets/config/config-url'
import convertPostData from './../../../utils/convertPostData'

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AC_fullName:null,
            AC_Email:null,
            AC_passWord: null,
            rePassWord: null,
        }
    }
    
    render() {
        async function signUp(newUser) {
            let formBody = convertPostData(newUser)
            console.log(newUser);
            let response = await fetch(`${configUrl.NODE_SERVER_URL}/account/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: formBody
            }).then(data => data.json())
            if (response.status === true) {
                return true
            }
            return false;
        }

        const handleSubmit = async e => {
            e.preventDefault();
            let {AC_fullName, AC_Email, AC_passWord, rePassWord} = this.state
            let isSuccess = await signUp({AC_fullName,AC_Email,AC_passWord})
            if(isSuccess) alert("Đăng ký thành công!")
        }
        return (
            <>
                <form onSubmit={handleSubmit} className="form-signup">
                    <div className="social-login">
                        <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f" /> Đăng ký bằng Facebook</span> </button>
                    </div>
                    <div className="social-login">
                        <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g" /> Đăng ký bằng Google+</span> </button>
                    </div>
                    <p className="t-or">HOẶC</p>
                    <input type="text" id="user-name" className="form-control" placeholder="Họ và tên"  onChange={e => this.setState({ AC_fullName: e.target.value })} required/>
                    <input type="email" id="user-email" className="form-control" placeholder="Địa chỉ email"  onChange={e => this.setState({ AC_Email: e.target.value })} required />
                    <input type="password" id="user-pass" className="form-control" placeholder="Mật khẩu"  onChange={e => this.setState({ AC_passWord: e.target.value })} required />
                    <input type="password" id="user-repeatpass" className="form-control" placeholder="Nhập lại mật khẩu"  onChange={e => this.setState({ rePassWord: e.target.value })} required />
                    <button className="btn btn-primary btn-block" type="submit"><i className="fas fa-user-plus" /> Đăng ký</button>
                    <a href="#" id="cancel_signup"><i className="fas fa-angle-left" /> Trở về</a>
                </form>
            </>
        )
    }
}
