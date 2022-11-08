import BlogsContainer from "../components/BlogsContainer";
import GetInTouch from "../components/GetInTouch";
import Info from "../components/ContactUs/Info";
import Layout from "../components/Layout";
import Navigator from "../components/Navigator";
import PageHeader from "../components/PageHeader";
import React from 'react';

export default function ContactUs({location}:{location:any}){
    return <Layout location={location}>
        <div className="contact-us">
            <PageHeader location={location} heading={"Contact Us - CBTPROXY"}/>
            <Navigator pathIDs={['home','contactUs']}/>
            <Info/>
            <GetInTouch  location={location}/>
            <BlogsContainer/>
        </div>
    </Layout>
}
