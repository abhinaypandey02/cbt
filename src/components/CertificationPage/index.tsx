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

export default function CertificationPage({location, pageContext}:{location:any,pageContext:CertificationPageInterface}){
    return <Layout location={location}>
        <div className="pmp">
            <PageHeader heading={pageContext.headerTitle}/>
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
            <CertificationPageInfo logo={pageContext.logo} logoAltText={pageContext.logoAlt} title={pageContext.aboutTitle} description1={pageContext.description1} description2={pageContext.description2} slug={pageContext.slug} image={pageContext.image}/>
            <FAQ faqs={pageContext.faqs}/>
            <RelatedCourse courses={pageContext.relatedCourses}/>
            <GetInTouch location={{pathname:pageContext.slug}} />
            <BlogsContainer/>
        </div>
    </Layout>
}
