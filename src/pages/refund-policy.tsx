import React from 'react';
import Layout from "../components/Layout";
import './styles.scss'
import SEO from "../components/SEO";
type PROPS_STYLE={
    location:any
}

export default function RefundPolicy(props:PROPS_STYLE){
    return <Layout location={props.location} >
        <SEO title={"Refund Policy"} description={"Refund Policy"} blog={false}/>

        <div  className={'policy-page'}>
            <h1>Refund Policy and Requirements</h1>

            <h3>The following criteria must be met to qualify for a refund:</h3>

            Service must not be used. In the case of proxy exams, a refund will not be provided under any circumstances. If the conditions listed above are not met, we reserve the right not to issue a refund. It’s important to remember that there is often a difference between a service that doesn’t work and a situation where you receive an error message. Error messages could be related to an incorrect setup, configuration, or software, and as a result, the service is not working.

            <h3>Additional Services</h3>

            Please note that additional services, custom work, or technical support are non-refundable as our time cannot be recovered.

            <h3>Subscription</h3>

            All Subscriptions are enabled for auto-renewal based on your subscription length. CBTproxy is not responsible if you do not cancel auto-renewals. All cancellations of the subscriptions are subject to the policy above. If you would like to contact us concerning any matter relating to this refund policy, you may do so via the contact form or send an email to info@cbtproxy.com.


        </div>

    </Layout>
}
