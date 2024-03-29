import React from 'react';
import classes from "./link.module.css";
import {Urls} from "../../../../utils/urls";

const TwitchLink = (props) => {
    return (
        <svg className={classes.ico} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd">
            <a className={classes.socNetwork} href={Urls().socNetworks.twitch} {...props}>
                <path href={Urls().socNetworks.twitch} d="M10.224 17.806l1.776-1.776h3.343l2.09-2.09v-6.686h-10.03v8.776h2.821v1.776zm3.866-8.149h1.254v3.653h-1.254v-3.653zm-3.344 0h1.254v3.653h-1.254v-3.653zm1.254-9.657c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.687 14.567l-3.657 3.657h-2.716l-1.777 1.776h-1.88v-1.776h-3.344v-9.821l.941-2.403h12.433v8.567z"/>
            </a>
        </svg>
    );
};

export default TwitchLink;