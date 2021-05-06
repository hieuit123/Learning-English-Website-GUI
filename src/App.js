import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import React, { Component } from 'react';
import { connect } from 'react-redux'

import Home from './pages/Home';
import AccountForm from './pages/Account'
import WordBook from './pages/WordBook';
import Game from './pages/Game';
import success from './assets/audio/success.wav'
import failed from './assets/audio/wrong.wav'
import * as actions from './actions'
import AccountDetail from './pages/AccountDetail';
import WordStore from './pages/WordStore';
import convertPostData from './utils/convertPostData'
import * as configUrl from './assets/config/config-url'

class App extends Component {

  async componentDidMount() {
    let ssId = localStorage.getItem("tokenlve")
    let accountId = localStorage.getItem("accountIDlve")
    let credentialAccount = {
      AC_Id: accountId,
      S_Value: ssId
    }
    let formBody = convertPostData(credentialAccount)
    if (!this.props.accountManage.accountData) {
      let response = await fetch(`${configUrl.NODE_SERVER_URL}/account/getone`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
      }).then(data => data.json())
      if (response.status === true) {
        this.props.callInitDispatch(actions.initAccountDataAction(response.data[0]))
        return response
      }
      return false;
    }
    if (this.props.gameManage.finalGame) this.props.callInitDispatch(actions.resetGameDataAction())
  }

  componentDidUpdate() {
    if (this.props.gameManage.finalGame) this.props.callInitDispatch(actions.resetGameDataAction())
  }
  render() {
    let myToken = localStorage.getItem("tokenlve")
    return (
      <div className="App">
        <header className="App-header">
          <div className="main-layout">
            <audio id="audio2">
              <source id="sourceAudio" src={success}></source>
            </audio>
            <audio id="audio3">
              <source id="sourceAudioFailed" src={failed}></source>
            </audio>

              <Switch>
                <Route exact path="/" exact>
                  {!myToken ? <Redirect to="/login" /> : <Home />}
                </Route>

                <Route exact path="/login" exact>
                  {!myToken ? <AccountForm /> : <Redirect to="/" />}
                </Route>

                <Route path="/manage" exact>
                  {!myToken ? <Redirect to="/login" /> : <WordBook />}
                </Route>

                <Route path="/game" exact>
                  {this.props.gameManage.finalGame ? <Redirect to="/" /> : null}
                  {!myToken ? <Redirect to="/login" /> : <Game />}
                </Route>
                <Route path="/account">
                  {!myToken ? <Redirect to="/login" /> : <AccountDetail />}
                </Route>
                <Route path="/word-store">
                  <WordStore />
                </Route>
              </Switch>
              {/* <AccountForm/> */}
      
          </div>
        </header>


      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    loginState: state.loginReducer,
    gameManage: state.gameManage,
    accountManage: state.accountManage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    callInitDispatch: (action) => {
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
