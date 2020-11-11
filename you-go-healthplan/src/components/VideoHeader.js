import React from "react";
import classes from '../styling/BackgroundVideo.module.css';
import video from "../images/headerVideo.mp4"

const BackgroundVideo = () => {
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1 className={classes.videoHeaderTitle}>YouGo HealthPlan</h1>
                    <p className={classes.videoHeaderSubTitle}>Friska medarbetare, sjukt lönsamt!</p>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo