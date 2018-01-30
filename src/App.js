import React, { Component } from 'react'
import classes from './App.css'
import { Route, Redirect, Switch } from 'react-router-dom'
import Dashboard from './containers/dashboard'
import AuthPage from './containers/authPage'


class App extends Component {
  state = {
    logged: false,
    user: null
  }

  onLoggedInHandler = (username) => {
    console.log("user now logged in, redirecting")
    this.setState({ logged: true, user : username })
  }
  onLoggedOutHandle = () => {

  }

  render() {

    const ifLoggedRouter = (
      <div>
        <Route path="/" exact render={() => <Redirect to="/dashboard" />} />
        <Route path="/dashboard" exact render={() => <Dashboard username={this.state.user} />} />
      </div>
    )

    const ifNotLoggedRouter = (
      <div>
        <Switch>
          <Route path="/" exact render={() => <AuthPage onLoggedIn={this.onLoggedInHandler}/>} />
          <Route path="/" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    )


    return (
      <div className={classes.App}>
        {this.state.logged ? ifLoggedRouter : ifNotLoggedRouter}
      </div>
    );
  }
}

export default App;