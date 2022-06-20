import BlogsContainer from "../components/BlogsContainer";
import Companies from "../components/Home/Companies";
import Features from "../components/Home/Features";
import Header from "../components/Home/Header";
import HowItWorks from "../components/Home/HowItWorks";
import Layout from "../components/Layout";
import React from "react"
import WhoCanDemand from "../components/Home/WhoCanDemand";
import WhyUs from "../components/Home/WhyUs";
import './styles.scss';
// markup
const IndexPage = ({location}: any) => {
    return (<Layout location={location}>
            <Header/>
            <Companies/>
        <Features/>
        <WhyUs/>
        <HowItWorks/>
        <WhoCanDemand/>
        <BlogsContainer/>
        </Layout>)
}

export default IndexPage
