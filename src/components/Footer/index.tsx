import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

export default function Footer(){
    return <div className="footer">
    <div className="top">
        <div className="about">
            <div className="image">
                <StaticImage placeholder="blurred" src={'../../images/navIcon.png'} alt={"Logo"}/>
            </div>
            <div className="text">
                We are a one-stop solution for all your needs and offer flexible and customized offers to all individuals depending on their educational qualifications and certification they want to achieve.
            </div>
        </div>
        <div className="certification">
            <div className="heading">Certifications</div>
            <div className="elements">
                <Link to={'/certifications/aws/aws-solutions-architect-associate'} className="element">AWS SAA-C03</Link>
                <Link to={'/certifications/pmi/pass-pmp-certification-exam-dump'} className="element">PMI PMP</Link>
                <Link to={'/certifications/cisco/ccna-200-301'} className="element">CISCO CCNA</Link>
                <Link to={'/certifications/comptia/comptia-security-plus'} className="element">compTIA Security+</Link>
                <Link to={'/certifications/isaca/pass-cism-exam-without-dumps'} className="element">ISACA CISM</Link>
                <Link to={'/rack-rentals'} className="element">CCIE Security v6</Link>
            </div>
        </div>
        <div className="community">
            <div className="heading">Community</div>
            <div className="elements">
                <Link to={'/certifications'} className="element">Our Certifications</Link>
                <Link to={'/rack-rental'} className="element">Rack Rental</Link>
                <Link to={'/contact-us'} className="element">Contact Us</Link>
                <Link to={'/privacy-policy'} className="element">Privacy Policy</Link>
                <Link to={'/terms-and-conditions'} className="element">Terms & Conditions</Link>
                <Link to={'/refund-policy'} className="element">Refund & Cancelletion</Link>
            </div>
        </div>
        <div className="contactSocial">
            <div className="contact">
                <div className="heading">Contact</div>
                <div className="phone">
                    <div className="logo">
                        <StaticImage placeholder="blurred" src={'../../images/phone.png'} alt={"phone logo"}/>

                    </div>
                    <div className="text">
                        +1 (415) 830-6004
                    </div>
                </div>
                <div className="email">
                    <div className="logo">
                        <StaticImage placeholder="blurred" src={'../../images/email.png'} alt={"email logo"}/>

                    </div>
                    <div className="text">
                        info@cbtproxy.com
                    </div>
                </div>
            </div>
            <div className="social">
                <div className="heading">Social Media:
                </div>
                <div className="icons">
                    <a href={'https://www.facebook.com/CBTproxy'} className="icon"><StaticImage placeholder="blurred" src={'../../images/social/fb.png'} alt={"facebook"}/></a>
                    <a href={'https://www.linkedin.com/company/cbtproxy'} className="icon"><StaticImage placeholder="blurred" src={'../../images/social/linkedin.png'} alt={"linkedin"}/></a>
                    <a href={'https://wa.me/14158306004'} className="icon"><StaticImage placeholder="blurred" src={'../../images/social/telegram.png'} alt={"telegram"}/></a>
                    <a href={'https://t.me/cbtproxy'} className="icon"><StaticImage placeholder="blurred" src={'../../images/social/whatsapp.png'} alt={"whatsapp"}/></a>
                </div>
            </div>
        </div>
    </div>
        <div className="bottom">
            <div className="text">
                Copyright © 2022
            </div>
        </div>
    </div>
}
