import React from 'react';
import classes from '../stylesheets/navbar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={classes.navbar} id="navbar">
            <div className={classes.navImg}></div>
            <div className={classes.time}></div>
            <ul>
                <NavLink to="/dashboard" exact activeClassName={classes.active} ><li><img alt="" src="https://png.icons8.com/ios-glyphs/50/646464/add.png" />Write Post</li></NavLink>
                {/* the edit page isnt created yet */}
                <NavLink to="/dashboard/edit" exact activeClassName={classes.active} ><li><img alt="" src="https://png.icons8.com/android/50/646464/edit.png" />View and Edit</li></NavLink>
            </ul>
        </div>
    );
}

export default NavBar;