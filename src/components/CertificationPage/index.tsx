import BlogsContainer from "../BlogsContainer";
import CertificationPageInfo from "./CertificationPageInfo";
import FAQ from "./FAQ";
import Layout from "../Layout";
import Navigator from "../Navigator";
import PageHeader from "../PageHeader";
import React from 'react';
import RelatedCourse from "./RelatedCourse";
import {CertificationPageInterface} from "../../interfaces/CertificationPageInterface";
import '../../pages/styles.scss';
import GetInTouch from "../GetInTouch";
import HowItWorks from "../Home/HowItWorks";
import WhyUs from "../Home/WhyUs";
import Comparison from "./Comparison";
import {Blog} from "../../interfaces/Blog";

export default function CertificationPage({location, pageContext}:{location:any,pageContext:CertificationPageInterface}){
    return <Layout location={location}>
        <div className="pmp">
            <PageHeader miniForm={true} location={'/certification'+pageContext.slug} heading={pageContext.headerTitle+" Online From Home & Pay After You Pass"}/>
            <Navigator pathData={[
                {
                    name:"Home",
                    route:"/",
                    id:"home"
                },{
                    name:"Certifications",
                    route:"/certification",
                    id:"certification"
                },{
                    name:pageContext.vendorTitle,
                    route:pageContext.vendorRoute,
                    id:pageContext.vendorTitle
                },{
                    name:pageContext.headerTitle,
                    route:location.pathname,
                    id:pageContext.headerTitle
                }
            ]}/>
            <CertificationPageInfo logo={pageContext.logo} logoAltText={pageContext.logoAlt} description1={pageContext.description1} description2={pageContext.description2} slug={pageContext.slug}/>
            <HowItWorks/>

            <FAQ faqs={pageContext.faqs}/>
            <Comparison/>
            <RelatedCourse vendorRoute={pageContext.vendorRoute} courses={pageContext.related_courses}/>
            <WhyUs/>
            <GetInTouch location={{pathname:pageContext.slug}} />
            <BlogsContainer blogs={pageContext.blogs}/>
        </div>
    </Layout>
}
