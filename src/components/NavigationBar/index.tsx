import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import './styles.scss';
import {Link} from "gatsby";

const navLinks=[
    {
        name:"Home",
        id:"home",
        route:"/"

    },
    {
        name:"About Us",
        id:"aboutUs",
        route:"/about-us"
    },
    {
        name:"Rack Rental",
        id:"rackRental",
        route:"/rack-rental"
    },
    {
        name:"Certifications",
        id:"certifications",
        route:"/certifications"
    },
    {
        name:"Contact",
        id:"contactUs",
        route:"/contact-us"
    }
]

const PHONE="+1 (415) 830-6004"
const EMAIL="info@cbtproxy.com"
export default function NavigationBar({location}:any){
    return <div className="navbar">
        <div className="icon">
            <StaticImage src={'../../images/navIcon.png'} alt={"Company logo"}/>
        </div>
        <div className="menu">
            {navLinks.map(item=><Link to={item.route} className={"menuItem "+(location.pathname===item.route?"menuItem--active":"")}>
                {item.name}
            </Link>)}
        </div>
        <div className="contact">
            <div className="contactItem">
                <div className="logo">
                    <StaticImage src={'../../images/phone.png'} alt={"phone logo"}/>
                </div>
                <div className="text">{PHONE}</div>
            </div>
            <div className="contactItem">
                <div className="logo">
                    <StaticImage src={'../../images/email.png'} alt={"email logo"}/>
                </div>
                <div className="text">{EMAIL}</div>
            </div>
        </div>
    </div>
}
