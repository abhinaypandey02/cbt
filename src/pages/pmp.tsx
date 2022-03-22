import React from 'react';
import './styles.scss';
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Navigator from "../components/Navigator";
import GetInTouch from "../components/GetInTouch";
import BlogsContainer from "../components/BlogsContainer";

export default function PMI({location}:{location:any}){
    return <Layout location={location}>
        <div className="pmi">
            <PageHeader heading={"Project Management Professional (PMP) Proxy Exam"}/>
            <Navigator pathIDs={['home','certification','pmi','pms']}/>
            <GetInTouch/>
            <BlogsContainer/>
        </div>
    </Layout>
}
