import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";
import Form from "../Form";

export default function PageHeader({heading, location, miniForm}:{heading:string, location:string, miniForm?:boolean}){
    return <div className="page-header">
        {/*<StaticImage placeholder="blurred" className="ellipse" src={'../../images/ellipse.png'} alt={'ellipse'}/>*/}
        <h1>{heading} Online From Home & Pay After You Pass</h1>
        {miniForm&&<div className="form-container">
            <div className="heading">
                <div className="text">
                    Drop Us a Line
                </div>
            </div>
            <div className="form-wrapper">
                <Form location={location} mini={true}/>
            </div>
        </div>}
    </div>
}
