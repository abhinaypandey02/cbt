import React from 'react';
import './styles.scss';
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Form from "../../Form";

export default function CertificationPageInfo({title, description1,description2, logo, logoAltText,slug}: { title: string, description1: string,description2: string, logo: any, logoAltText: string,slug:string }) {
    const compiledImage = getImage(logo.localFile);
    return <div className="pmp-info">
        <div className="heading">
            {title}
        </div>
        <div className="desc">

            <div className="heading-mob">
                {title}
            </div>
            <div className={'wrapper'}>
                <div className="image only-md-down">
                    {compiledImage && <GatsbyImage image={compiledImage} alt={logoAltText}/>}
                </div>
                <div className="text">
                    {description1}
                </div>
                <div className="form-container only-md-up">
                    <div className="heading">
                        <div className="text">
                            Drop Us a Line
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <Form location={slug} mini={true}/>
                    </div>
                </div>
            </div>
            <div className={'wrapper'}>
                <div className="image only-md-up">
                    {compiledImage && <GatsbyImage image={compiledImage} alt={logoAltText}/>}
                </div>
                <div className="text">
                    {description2}
                </div>
                <div className="form-container only-md-down">
                    <div className="heading">
                        <div className="text">
                            Drop Us a Line
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <Form location={slug} mini={true}/>
                    </div>
                </div>
            </div>

        </div>
    </div>
}
