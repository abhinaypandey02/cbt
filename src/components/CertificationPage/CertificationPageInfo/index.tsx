import React from 'react';
import './styles.scss';
import {GatsbyImage, getImage} from "gatsby-plugin-image";

export default function CertificationPageInfo({title, description1,description2, logo, logoAlt}: { title: string, description1: string,description2: string, logo: any, logoAlt: string }) {
    const compiledImage = getImage(logo.localFile);
    return <div className="pmp-info">
        <div className="heading">
            {title}
        </div>
        <div className="desc">
            <div className="image">
                {compiledImage && <GatsbyImage image={compiledImage} alt={logoAlt}/>}
            </div>
            <div className="heading-mob">
                {title}
            </div>
            <div className="text">
                {description1}
            </div>
            <div className="text">
                {description2}
            </div>

        </div>
    </div>
}
