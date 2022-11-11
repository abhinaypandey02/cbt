import BlogsContainer from "../components/BlogsContainer";
import ChooseCertification from "../components/Certifications/ChooseCertification";
import GetInTouch from "../components/GetInTouch";
import InfoCertifications from "../components/Certifications/InfoCertifications";
import Layout from "../components/Layout";
import Navigator from "../components/Navigator";
import PageHeader from "../components/PageHeader";
import React from 'react';
import SEO from "../components/SEO";


export default function Certifications({location}:{location:any}){
    return <Layout location={location}>
        <SEO title={"Certifications Proxy Exam Support CBTPROXY Provides | CBTProxy"} description={"We will help you in passing the CISCO, PMI, ISACA, (ISC) ² & many more examinations without wasting your money, time, and other valuable resources."} blog={false}/>

        <div className="certifications">
            <PageHeader heading={"Certifications at CBTPROXY"} location={location}/>
            <Navigator pathIDs={['home','certifications']}/>
            <InfoCertifications/>
            <ChooseCertification/>
            <GetInTouch  location={location}/>
            <BlogsContainer/>
        </div>
    </Layout>


}
