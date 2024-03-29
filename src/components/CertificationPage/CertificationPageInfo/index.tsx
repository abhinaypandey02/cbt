import React from 'react';
import './styles.scss';
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Form from "../../Form";

export default function CertificationPageInfo({description1,description2, logo, logoAltText,slug}: { description1: string,description2: string, logo: any, logoAltText: string,slug:string }) {
    const compiledLogo = getImage(logo?.localFile);
    return <div className="pmp-info">
        <div className="form-container only-md-down">
            <div className="heading">
                <div className="text">
                    Drop Us a Line
                </div>
            </div>
            <div className="form-wrapper">
                <Form location={'/certification'+slug} mini={true}/>
            </div>
        </div>
        <div className="desc">
            <div className={'wrapper'}>

                <div className="text">
                    {description1}
                    <br/>
                    <br/>
                    {description2}
                </div>
                <div className="image ">
                    {compiledLogo && <GatsbyImage image={compiledLogo} alt={logoAltText}/>}
                </div>
            </div>

        </div>

    </div>
}
