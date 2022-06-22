import BlogsContainer from "../components/BlogsContainer";
import ChooseCertification from "../components/Certifications/ChooseCertification";
import GetInTouch from "../components/GetInTouch";
import InfoCertifications from "../components/Certifications/InfoCertifications";
import Layout from "../components/Layout";
import Navigator from "../components/Navigator";
import PageHeader from "../components/PageHeader";
import React from 'react';


export default function Certifications({location}:{location:any}){
    return <Layout location={location}>
        <div className="certifications">
            <PageHeader heading={"Certifications"}/>
            <Navigator pathIDs={['home','certifications']}/>
            <InfoCertifications/>
            <ChooseCertification/>
            <GetInTouch  location={location}/>
            <BlogsContainer/>
        </div>
    </Layout>


}
