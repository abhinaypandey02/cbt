import BlogsContainer from "../components/BlogsContainer";
import AboutRackRental from "../components/RackRental/AboutRackRental";

import HowToUse from "../components/RackRental/HowToUse";
import Layout from "../components/Layout";
import Navigator from "../components/Navigator";
import PageHeader from "../components/PageHeader";
import Pricing from "../components/RackRental/Pricing";
import React from 'react';
import SimplifiedScheduling from "../components/RackRental/SimplifiedScheduling";
import Topology from "../components/RackRental/Topology";
import Video from "../components/RackRental/Video";
import WhyChoose from "../components/RackRental/WhyChoose";
import './styles.scss';
import SEO from "../components/SEO";

export default function RackRental({location}:any){
    return <Layout location={location}>
        <SEO title={"CCIE Security V6 Rack Rental | All Set In 1 Minute | 6.6$/Hour | CBTProxy"} description={"CBTPROXY is offering most updated CCIE Security v6 Racks Online with Licensed devices and fast Reset and Ready to use. 6.6$ Per Hour"} blog={false}/>

        <div className="rack-rental">
            <PageHeader location={location} heading={"CCIE Security Rack Rental - CBTPROXY"}/>
            <Navigator pathIDs={['home','rackRental']}/>
            <AboutRackRental location={location}/>
            <HowToUse/>
            <Video/>
            <Pricing/>
            <SimplifiedScheduling/>
            <Topology/>
            <WhyChoose/>
            <BlogsContainer/>
        </div>
    </Layout>
}
