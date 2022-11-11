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
import SEO from "../components/SEO";

export default function AboutUs({location}:any) {
    return  <Layout location={location}>
        <SEO title={"Want To Know More About CBTPROXY? Read Here | About-us"} description={"We ensure first time passing guarantee and liberate the candidate from taking the real exam multiple times. We at CBTproxy drive you to your target certification without any turns and twists."} blog={false}/>

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
