import './App.css';
import Home from './pages/Home';
import AccountForm from './pages/Account'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import WordBook from './pages/WordBook';
import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    if(this.props.loginState.token != null) alert(this.props.loginState.token)
    let myToken = localStorage.getItem("token")
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
                {!myToken ? <AccountForm/> : <Home/>}
                </Route>

                <Route path="/manage">
                  {/* {!myToken ? <Redirect to="/login" /> : <WordBook />} */}
                  <WordBook/>
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
