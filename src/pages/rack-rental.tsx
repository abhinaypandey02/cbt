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

export default function RackRental({location}:any){
    return <Layout location={location}>
        <div className="rack-rental">
            <PageHeader heading={"Rack Rental"}/>
            <Navigator pathIDs={['home','rackRental']}/>
            <AboutRackRental/>
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
