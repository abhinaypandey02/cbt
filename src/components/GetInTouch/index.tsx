import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import Form from "../Form";
import './styles.scss';

export default function GetInTouch({location}:any){
    return <div className="getInTouch">
        <div className="image">
            <StaticImage placeholder="blurred" imgClassName={"innerImg"} className="outerImg" src={"../../images/getInTouch/rocket.png"} alt={"rocket"}/>
        </div>
        <div className="form-container">
            <div className="heading">Get In Touch</div>
            <div className="desc">Drop Us a Line and We will Get in Touch with you ASAP</div>
            <div className="form-wrapper">

                <Form location={location.pathname} mini={false}/>
            </div>
        </div>
    </div>
}
