import React from 'react';
import classes from '../stylesheets/header.css'

const Header = (props) => {
    const liImg = {
        margin: "0 4px 0 0"
    }
    return (
        <div className={classes.header}>
            <span className={classes.navbarToggle} onClick={props.navbarToggle}></span>
            <h2>Blog<span> Dashboard</span></h2>
            <div onClick={()=>{props.profileNavClick(classes)}} className={classes.accountInfo}>
                <img alt="" src="https://png.icons8.com/material/50/ffffff/user-male-circle.png" />
                <p>{props.username}</p>
            </div>
            <div className={classes.profile} id="profile-nav">
                    <ul>
                        <li><img alt="" src="https://png.icons8.com/material/50/000000/user-male-circle.png" height="18px" style={liImg}/>Profile</li>
                        <li><img alt="" src="https://png.icons8.com/material/50/000000/shutdown.png" height="18px" style={liImg}/>Logout</li>
                    </ul>
                </div>
        </div>
    );
}

export default Header;