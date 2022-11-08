import AboutCBT from "../components/AboutUs/AboutCBT";
import BlogsContainer from "../components/BlogsContainer";
import GetInTouch from "../components/GetInTouch";
import Layout from "../components/Layout";
import Navigator from "../components/Navigator";
import OurStrength from "../components/AboutUs/OurStrength";
import PageHeader from "../components/PageHeader";
import React from 'react';
import WhyUsAbout from "../components/AboutUs/WhyUs";
import './styles.scss';

export default function AboutUs({location}:any) {
    return  <Layout location={location}>
        <div className="about-us">
            <PageHeader heading={"About Us - CBTPROXY"} location={location}/>
            <Navigator pathIDs={['home','aboutUs']}/>
            <AboutCBT/>
            <WhyUsAbout/>
            <OurStrength/>
            <GetInTouch location={location}/>
            <BlogsContainer/>
        </div>
    </Layout>
}
