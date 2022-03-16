import React from 'react';
import './styles.scss';
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";
import Navigator from "../components/Navigator";
import Blogs from "../components/Blogs";
import AboutCBT from "../components/AboutUs/aboutCBT";
import WhyUsAbout from "../components/AboutUs/whyUs";

export default function AboutUs({location}:any) {
    return  <Layout location={location}>
        <div className="about-us">
            <PageHeader heading={"About Us"}/>
            <Navigator pathIDs={['home','aboutUs']}/>

            <AboutCBT/>
            <WhyUsAbout/>

            <Blogs/>
        </div>
    </Layout>
}
