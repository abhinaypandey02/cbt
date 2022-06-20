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

export default function CertificationPage({pageContext}:{pageContext:CertificationPageInterface}){
    return <Layout location={pageContext.slug}>
        <div className="pmp">
            <PageHeader heading={pageContext.headerTitle}/>
            <Navigator pathIDs={['home','certifications','pmi','pms']}/>
            <CertificationPageInfo logo={pageContext.logo} logoAlt={pageContext.logoAlt} title={pageContext.aboutTitle} description={pageContext.description}/>
            {/*<Video/>*/}
            <FAQ faqs={pageContext.faqs}/>
            <RelatedCourse courses={pageContext.relatedCourses}/>
            <BlogsContainer/>
        </div>
    </Layout>
}
