import BlogsContainer from "../BlogsContainer";
import GetInTouch from "../GetInTouch";
import InfoVendor from "./InfoVendor";
import Layout from "../Layout";
import Navigator from "../Navigator";
import PageHeader from "../PageHeader";
import React from 'react';
import TypesVendor from "./Types";
import '../../pages/styles.scss'
export default function Index({location,pageContext}:{location:any,pageContext:any}){
    return <Layout location={location}>
        <div className="vendor">
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
                name:pageContext.headerTitle,
                    route:location.pathname,
                    id:pageContext.slug
                }
            ]}/>
            <InfoVendor logo={pageContext.logo} title={pageContext.pageTitle} description={pageContext.pageDescription}/>
            <TypesVendor certifications={pageContext.certifications.map((c:any)=>({
                ...c,
                route:location.pathname+c.certification_page.slug
            }))}/>
            <GetInTouch  location={location}/>
            <BlogsContainer/>
        </div>
    </Layout>
}
