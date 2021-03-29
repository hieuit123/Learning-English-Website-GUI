import React from 'react';
import * as configUrl from '../../../assets/config/config-url'
import { connect } from 'react-redux'
import { Component } from 'react';
import * as actions from './../../../actions'

const axios = require('axios');

async function login(credentials) {
    return axios.get(`${configUrl.NODE_SERVER_URL}/login`, {
        params: {
            username: credentials.username,
            password: credentials.password
        }
    })
        .then(res => {
            console.log(res);
            return res.data.token
        })
        .catch(function (error) {
            console.log(error);
        })
}


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.setState({
            username:"",
            password:"",
        })
    }

    render() {    
        const handleSubmit = async e => {
            e.preventDefault();
            let username = this.state.username
            let password = this.state.password
            const token = await login({username,password})
            alert(username)
            localStorage.setItem("token",token)
            this.props.onLogin(username, password, token)
            
        }

        return (
            <>
                <form onSubmit={handleSubmit} className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal t-login" style={{ textAlign: 'center' }}> Đăng Nhập</h1>
                    <div className="social-login">
                        <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f" /> Đăng nhập bằng Facebook</span> </button>
                        <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g" /> Đăng nhập bằng Google+</span> </button>
                    </div>
                    <p className="t-or" > HOẶC</p>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Địa chỉ email" onChange={e => this.setState({username:e.target.value})} required />
                    <input type="password" id="inputPassword" className="form-control" placeholder="Mật khẩu" onChange={e => this.setState({password:e.target.value})} required />
                    <button className="btn btn-success btn-block" type="submit"><i className="fas fa-sign-in-alt" /> Đăng nhập</button>
                    <a href="" id="forgot_pswd">Quên mật khẩu?</a>
                    <hr />
                    {/* <p>Don't have an account!</p>  */}
                    <button className="btn btn-primary btn-block" type="button" id="btn-signup"><i className="fas fa-user-plus" /> Đăng ký tài khoản mới</button>
                </form>
            </>
        )
    }   
}

const mapStateToProps = (state) => {
    return {
        loginState: state.loginReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLogin: (username, password,  token) => {
            dispatch(actions.loginAction({username, password}, token))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)