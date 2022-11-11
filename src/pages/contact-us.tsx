import BlogsContainer from "../components/BlogsContainer";
import GetInTouch from "../components/GetInTouch";
import Info from "../components/ContactUs/Info";
import Layout from "../components/Layout";
import Navigator from "../components/Navigator";
import PageHeader from "../components/PageHeader";
import React from 'react';
import SEO from "../components/SEO";

export default function ContactUs({location}:{location:any}){
    return <Layout location={location}>
        <SEO title={"Contact CBTProxy Now & Get Your Query Answered | Contact-us"} description={"Contact Us Now To Know More About This. Pass Any CompTIA, AWS, Microsoft Azure, PMI, ISACA, GCP, Cisco, ITIL, EC-Council, Prince2, and Many More Exam From Home Online. Pay After You Pass."} blog={false}/>

        <div className="contact-us">
            <PageHeader location={location} heading={"Contact Us - CBTPROXY"}/>
            <Navigator pathIDs={['home','contactUs']}/>
            <Info/>
            <GetInTouch  location={location}/>
            <BlogsContainer/>
        </div>
    </Layout>
}
