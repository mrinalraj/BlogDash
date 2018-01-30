import React, { Component } from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import RBody from './rightBody'
import classes from '../App.css'


class DashBoard extends Component {

    isOpen = true;

    profileNavToggleHandler = (classObj) => {
        let target = document.querySelector("#profile-nav");
        target.classList.toggle(classes.shown);
    }

    navbarToggleHandler = () => {
        let target = document.querySelector("#navbar");
        if (this.isOpen) {
            target.style.display = "block";
            this.isOpen = false;
        }
        else {
            target.style.display = "none";
            this.isOpen = true;
        }
    }

    render() {
        return (
            <div className="dashboard">
                <Header
                    profileNavClick={this.profileNavToggleHandler}
                    navbarToggle={this.navbarToggleHandler}
                    username = {this.props.username}
                />
                <div className={classes.body}>
                    <Navbar />
                    <RBody />
                </div>
            </div>
        )
    }
}

export default DashBoard