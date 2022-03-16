import React from 'react';
import './styles.scss';
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";
import Navigator from "../components/Navigator";
import Blogs from "../components/Blogs";
import AboutCBT from "../components/AboutUs/AboutCBT";
import WhyUsAbout from "../components/AboutUs/WhyUs";
import OurStrength from "../components/AboutUs/OurStrength";
import GetInTouch from "../components/GetInTouch";

export default function AboutUs({location}:any) {
    return  <Layout location={location}>
        <div className="about-us">
            <PageHeader heading={"About Us"}/>
            <Navigator pathIDs={['home','aboutUs']}/>

            <AboutCBT/>
            <WhyUsAbout/>
            <OurStrength/>
            <GetInTouch/>
            <Blogs/>
        </div>
    </Layout>
}
