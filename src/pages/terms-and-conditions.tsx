import React from 'react';
import Layout from "../components/Layout";
import './styles.scss'
import SEO from "../components/SEO";
type PROPS_STYLE={
    location:any
}

export default function TermsAndConditions(props:PROPS_STYLE){
    return <Layout location={props.location}>
        <SEO title={"Terms And Conditions"} description={"Terms And Conditions"} blog={false}/>

        <div  className={'policy-page'}>
            <h1>Agreement Between User and CBTproxy.com</h1>
            The CBTproxy.com website is comprised of various web pages operated by CBTproxy. CBTproxy is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein. Your use of CBTproxy.com constitutes your agreement to all such terms. Please read these terms carefully, and keep a copy of them for reference.

            <h3>Use of Terms and Conditions</h3>

            Please read these Terms and Conditions of use carefully before purchasing the CBTproxy’s online training materials.You agree to be bound by these terms and conditions by using the online training materials. We reserve the right to withdraw all or part of the training materials at any time.
            <br/><br/>
            Although we use reasonable endeavors to ensure that our services for the Training Materials are available 24 hours a day, seven days a week, we cannot promise that access to the training materials will be uninterrupted or error-free. Sometimes, access to the training materials may be interrupted for a short period.
            <br/><br/>
            You accept that you will not have a claim for a refund in respect of such a period of unavailability. You also acknowledge that we cannot be held responsible for any delay or disruptions inherent in the operation of the Internet and the World Wide Web, including viruses.
            <br/><br/>
            Any right to access the training materials is personal to you, and you may not transfer your rights to access the training materials to another.

            <h3>You Understand and Accept</h3>

            This is an ONLINE training and study material product, and you are responsible for ensuring a constant internet connection to gain access. We offer 24/7 access to online training materials delivered over VNC. The duration of access may vary for different exam-training materials.
            <br/><br/>
            We do not share downloadable copies of our online training materials. You may NOT keep any offline copy of our training materials, but you may access and view them via VNC.
            <br/><br/>
            You may not terminate/cancel these services after receiving access credential details on your PayPal email account ID. We do not have a return policy and offer no refunds. Once a purchase is made for one exam training material, you may not switch over to the online training materials of another exam.
            <br/><br/>
            This service has a limited support duration; after you’ve made the purchase, we advise that you complete your study and appear for the exam within our limited support period.


            <h3>Disclaimer</h3>

            This material is not sponsored by, endorsed by, or affiliated with Cisco Systems, Inc, Huawei Technologies Co. Ltd., PMI, ISACA, AWS, GCP, Microsoft, ISC2, EC-Council & Peoplecert Cisco Certified Internetworking Engineer, the Cisco Systems logo and the CCIE™ logo are trademarks or registered trademarks of Cisco Systems, Inc. in the United States and certain other countries. Huawei Certified Internetwork Expert, the Huawei logo, and the HCIE™ logo are trademarks or registered trademarks of Huawei Technologies Co., Ltd . in China and certain other countries. All other trademarks are trademarks of their respective owners.

            <h3>Termination/Access Restriction</h3>

            CBT reserves the right, in its sole discretion, to terminate your access to the site and the related services or any portion thereof at any time without notice. To the maximum extent permitted by law, this agreement is governed by the laws of the State of California. You hereby consent to the exclusive jurisdiction and venue of courts in California in all disputes arising out of or relating to the use of the site. Use of the site is unauthorized in any jurisdiction that does not give effect to all provisions of these terms, including, without limitation, this section.
            <br/><br/>
            You agree that no joint venture, partnership, employment, or agency relationship exists between you and CBT due to this agreement or use of the site. CBT’s performance of this agreement is subject to existing laws and legal processes, and nothing contained in this agreement is in derogation of CBT’s right to comply with governmental, court, and law enforcement requests or requirements relating to your use of the site or information provided to or gathered by CBT concerning such use. Suppose any part of this agreement is determined to be invalid or unenforceable according to applicable law, including, but not limited to. In that case, the warranty disclaimers and liability limitations set forth above, the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision, and the remainder of the agreement shall continue in effect.
            <br/><br/>
            Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and CBT concerning the site. It supersedes all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between the user and CBT to the site. A printed version of this agreement and any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish of the parties that this agreement and all related documents be written in English.

            <h3>CCIE Lab Rental Service – Legal Disclaimer</h3>

            CBT is a fair technology lab rental provider. We do not endorse or promote any CCIE lab topologies, workbooks, or vendors. All our CCIE lab topologies are loosely adapted from workbook vendors, CCIE study communities, and customer requests. CBT is not responsible for any similarities of offered topology with real labs. CBT does not provide any initial or final configuration for any CCIE practice lab. We intend to offer CCIE practice labs with information openly available online and in CCIE study groups. CBT holds no responsibility for any topology changes, workbook changes, or changes to Cisco’s CCIE program.


            <h3>Changes to Terms</h3>

            CBT reserves the right, in its sole discretion, to change the terms under which CBTproxy.com is offered. The most current version of the terms will supersede all previous versions. CBT encourages you to review the terms and periodically stay informed of our updates.
            <br/><br/>
            CBT welcomes your questions or comments regarding the terms at info@CBTproxy.com.
        </div>

    </Layout>
}
