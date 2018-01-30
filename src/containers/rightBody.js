import React from 'react';
import classes from '../stylesheets/rightBody.css';
import PostForm from './postForm';

const RBody = () => {
    return (
        <div className={classes.rightBody}>
            <div className={classes.intro}>
                <h2>Dashboard</h2>
                
            </div>
            <PostForm/>
        </div>
    )
}

export default RBody;