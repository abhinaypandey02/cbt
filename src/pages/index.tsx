import * as React from "react"
import Layout from "../components/Layout";
import Header from "../components/Home/Header";
import Companies from "../components/Home/Companies";
import Features from "../components/Home/Features";
import WhyUs from "../components/Home/WhyUs";

// markup
const IndexPage = ({location}: any) => {
    return (<Layout location={location}>
            <Header/>
            <Companies/>
        <Features/>
        <WhyUs/>
        </Layout>)
}

export default IndexPage
