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
import SEO from "../components/SEO";
// markup
const IndexPage = ({location}: any) => {
    return (<Layout location={location}>
        <SEO title={"Pass IT Certifications With 100% Guarantee & Pay After Pass | Home | CBTPROXY"} description={"We will help you in passing the Cisco, PMI, ISACA, CompTIA & many more examinations without wasting your money, time, and other valuable resources."} blog={false}/>

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
