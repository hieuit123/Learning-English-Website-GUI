import './App.css';
import Home from './pages/Home';
import AccountForm from './pages/Account'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import WordBook from './pages/WordBook';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Game from './pages/Game';

class App extends Component {
  render() {
    let myToken = localStorage.getItem("tokenlve")
    return (
      <div className="App">
        <header className="App-header">
          <div className="main-layout">
            <Router>
              <Switch>
                <Route exact path="/">
                  {!myToken ? <Redirect to="/login" /> : <Home />}
                </Route>

                <Route exact path="/login">
                {!myToken ? <AccountForm/> : <Redirect to="/" />}
                </Route>

                <Route path="/manage">
                  {!myToken ? <Redirect to="/login" /> : <WordBook />}
                </Route>

                <Route path="/game">
                  {!myToken ? <Redirect to="/login" /> : <Game/>}
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
    loginState: state.loginReducer
  }
}
export default connect(mapStateToProps, null)(App)
