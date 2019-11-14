import React, { Component } from 'react';
import classes from '../stylesheets/authPage.css'
import { Redirect } from 'react-router-dom';

class AuthPage extends Component {

    state = {
        logged: false
    }

    loginUrl = ""

    loginSubmitHandle = (e) => {
        e.preventDefault();
        //TODO apply login api, for now just
        if (this.state.username !== undefined && this.state.password !== undefined) {
            // axios.post(this.loginUrl, this.state).then(response => {
            //     if (response.data.status === 'success') {

            //     }
            // })
            // .catch(err => {

            // })
            this.props.onLoggedIn(this.state.username)
            this.setState({ logged: true })
        }
        else {
            console.log("something missing")
        }
    }

    render() {
        if (this.state.logged) {
            return (
                <Redirect to="/dashboard" username={this.state.username} />
            )
        }
        else {
            return (
                <div className={classes.login}>
                    <div className={classes.loginBlock}>
                        <div className={classes.formBox}>
                            <h3>Login to dashboard</h3>
                            <form method="post" onSubmit={(e) => { this.loginSubmitHandle(e) }} name="loginForm">
                                <input type="text" placeholder="Email / Username" onChange={event => { this.setState({ username: event.target.value }) }} required />
                                <input type="Password" placeholder="Password" onChange={event => { this.setState({ password: event.target.value }) }} required />
                                <button className={classes.loginBtn}>LOG IN</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default AuthPage;
