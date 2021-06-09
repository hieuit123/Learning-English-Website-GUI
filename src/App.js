import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

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
import Navigator from './components/smart/Navigator';
import Dictionary from './pages/Dictionary';

class App extends Component {

  async componentDidMount() {
    console.log(process.env.REACT_APP_URL_SERVER);
    let ssId = localStorage.getItem("tokenlve")
    let accountId = localStorage.getItem("accountIDlve")
    let credentialAccount = {
      AC_Id: accountId,
      S_Value: ssId
    }
    let formBody = convertPostData(credentialAccount)
    if (!this.props.accountManage.wordbookData) {// init word book

      let result = await axios.get("/wordbook/getallbyidaccount/" + accountId)
      let finalResult = result.data
      console.log(finalResult);
      if (finalResult.status) this.props.callInitDispatch(actions.initWordbookDataAction(finalResult.data))
    }

    if (!this.props.accountManage.accountData) { //init account
      let response = await fetch(`${configUrl.NODE_SERVER_URL}/account/getone`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
      }).then(data => data.json())
      let analyticResult = await axios.get("http://localhost:5000/word/getAnalyticWordByIdAccount/" + accountId)

      if (response.status === true) {
        let initDataAccount = response.data[0]
        let analyticData = analyticResult.data.data
        if (analyticResult.data.status) initDataAccount = { ...initDataAccount, analyticData }
        this.props.callInitDispatch(actions.initAccountDataAction(initDataAccount))
        return response
      }
      return false;
    }
  }

  componentDidUpdate() {
    if (this.props.gameManage.finalGame) this.props.callInitDispatch(actions.resetGameDataAction())
  }
  render() {
    //load streak of account
    let streakData = null
      initStreakData()
      streakData = sessionStorage.getItem("streakDataAccount")
    async function initStreakData (){
      let accountId = localStorage.getItem("accountIDlve")
      let streakResult = await axios.get("/account/getstreakbyidaccount/" + accountId)
      if(streakResult.data.status) sessionStorage.setItem("streakDataAccount", JSON.stringify(streakResult.data.data))
    }
    let showComponentClass = "row container-main-content"
    let myToken = localStorage.getItem("tokenlve")
    if (!myToken) showComponentClass = ""

    return (
      <div className="App">
        <header className="App-header">
          <div className="main-layout">
            <div className="container">
              <audio id="audio2">
                <source id="sourceAudio" src={success}></source>
              </audio>
              <audio id="audio3">
                <source id="sourceAudioFailed" src={failed}></source>
              </audio>
              <div className="row">
                <div className="navigator col-12">
                  <Navigator />
                </div>
              </div>
              <div className={showComponentClass}>
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

                  <Route path="/dictionary/:word">
                    <Dictionary/>
                  </Route>
                </Switch>
              </div>
              {/* <AccountForm/> */}
            </div>
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
    accountManage: state.accountManage,
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
