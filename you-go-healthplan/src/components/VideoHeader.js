import React from "react";
import classes from '../styling/BackgroundVideo.module.css';
import video from "../images/headerVideo.mp4"

const BackgroundVideo = () => {
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" muted className={classes.Video} >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1 className={classes.videoHeaderTitle}>YouGo HealthPlan</h1>
                    <p className={classes.videoHeaderSubTitle}>FRISKVÅRD SOM ÄR PERSONLIG, HÅLLBAR OCH LÅNGSIKTIG!</p>
                    <p className={classes.videoHeaderText}>Proaktiva hälsoinsatser för medarbetarna utefter nuläget och behov</p>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo