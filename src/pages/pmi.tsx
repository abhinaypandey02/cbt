import BlogsContainer from "../components/BlogsContainer";
import GetInTouch from "../components/GetInTouch";
import InfoPMI from "../components/PMI/InfoPMI";
import Layout from "../components/Layout";
import Navigator from "../components/Navigator";
import PageHeader from "../components/PageHeader";
import React from 'react';
import TypesPMI from "../components/PMI/Types";
import './styles.scss'
export default function PMI({location}:{location:any}){
    return <Layout location={location}>
        <div className="pmi">
            <PageHeader heading={"Project Management Institute (PMI) Certifications"}/>
            <Navigator pathIDs={['home','certifications','pmi']}/>
            <InfoPMI/>
            <TypesPMI/>
            <GetInTouch  location={location}/>
            <BlogsContainer/>
        </div>
    </Layout>
}
