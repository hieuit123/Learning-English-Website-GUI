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
class App extends Component {
  componentDidMount(){
    if (this.props.gameManage.finalGame) this.props.resetGameData()
  }
  componentDidUpdate(){
    if (this.props.gameManage.finalGame) this.props.resetGameData()
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
            <Router>
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
                {!myToken ? <Redirect to="/login" /> : <AccountDetail/>}
                </Route>

              </Switch>
              {/* <AccountForm/> */}
            </Router>
          </div>
        </header>


      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    loginState: state.loginReducer,
    gameManage: state.gameManage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetGameData: () => {
      dispatch(actions.resetGameDataAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
