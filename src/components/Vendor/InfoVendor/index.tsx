import React from 'react';
import './styles.scss';
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";

export default function InfoVendor(props:{title:string,description:string,logo:any}){
    const compiledImage=getImage(props.logo.localFile)
    return <div className="info-pmi">
        <div className="content">
            <div className="heading">
                {props.title}
            </div>
            <div className="desc">
                {props.description}
            </div>

        </div>
        <div className="image">
            {compiledImage&&<GatsbyImage alt={props.title} image={compiledImage}/>}
        </div>
    </div>
}
