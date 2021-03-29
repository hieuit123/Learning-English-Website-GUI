import './App.css';
import Home from './pages/Home';
import AccountForm from './pages/Account'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import WordBook from './pages/WordBook';
import React, { Component } from 'react';
import {connect} from 'react-redux'

class App extends Component {
  render() {
    let myToken = localStorage.getItem("token")
    if(!myToken)  return  <AccountForm/>
    
    return (
        <div className="App">
          <header className="App-header">
            <div className="main-layout">
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route exact path="/login">
                  <AccountForm />
                </Route>

                <Route path="/manage">
                  <WordBook />
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
    login: state.loginReducer
  }
}
export default connect(mapStateToProps,null)(App)
