import { connect } from 'react-redux'
import React, { Component } from 'react';

import * as actions from './../../../actions'
import * as configUrl from './../../../assets/config/config-url'
import convertPostData from './../../../utils/convertPostData'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.setState({
            username: "",
            password: "",
        })
    }

    render() {
        async function login(credentials) {
            let formBody = convertPostData(credentials)

            let response = await fetch(`${configUrl.NODE_SERVER_URL}/account/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: formBody
            }).then(data => data.json())
            if(response.status === true) {
                return response   
            }
            return false;
        }

        const handleSubmit = async e => {
            e.preventDefault();
            let username = this.state.username
            let password = this.state.password
            let responseData = await login({ username, password })
            if(responseData) {
                this.props.onLogin(username, responseData.data.S_Value, responseData.AC_Id)
                window.location.reload();
            }else{
                alert("Đăng nhập không thành công!")
            }        
        }

        return (
            <>
                <form onSubmit={handleSubmit} className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal t-login" style={{ textAlign: 'center' }}> Đăng Nhập</h1>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Địa chỉ email"  onChange={e => this.setState({ username: e.target.value })}  required />
                    <input type="password" id="inputPassword" className="form-control" placeholder="Mật khẩu" onChange={e => this.setState({ password: e.target.value })} required />
                    <button className="btn btn-success btn-block" type="submit"><i className="fas fa-sign-in-alt" /> Đăng nhập</button>
                    <a href="/home" id="forgot_pswd">Quên mật khẩu?</a>
                    <hr />
                    {/* <p>Don't have an account!</p>  */}
                    <button className="btn btn-primary btn-block" type="button" id="btn-signup"><i className="fas fa-user-plus" /> Đăng ký tài khoản mới</button>
                </form>
            </>
        )
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLogin: (username, token, accountID) => {
            dispatch(actions.loginAction({ username, token, accountID }))
        }
    }
}
export default connect(null, mapDispatchToProps)(LoginForm)