import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

const ELEMENTS=[
    {
        logo:<StaticImage src={'../../../images/WhyUs/1.png'} alt={"Payment after Passing"}/>,
        heading:"Payment after Passing",
        content:"We have complete confidence that we can guide you to get your dream certificate on the first attempt only. Then also, if you fail, we will pay the full fee in your next shot."
    },{
        logo:<StaticImage src={'../../../images/WhyUs/2.png'} alt={"24*7 Support"}/>,
        heading:"24*7 Support",
        content:"Our motto is to develop long-term trust and relationships with our clients. Hence, you can reach us round the clock from anywhere to get your queries solved."
    },{
        logo:<StaticImage src={'../../../images/WhyUs/3.png'} alt={"100% Secure & Confidential"}/>,
        heading:"100% Secure & Confidential",
        content:"We take top-notch security measures to keep your personal information confidential forever as we know how risky identity leaks can prove to your career growth"
    },{
        logo:<StaticImage src={'../../../images/WhyUs/4.png'} alt={"600+ Certification Portfolio"}/>,
        heading:"600+ Certification Portfolio",
        content:"We have a vast selection of 600+ certification portfolios to choose from, and you can find everything you are looking for under one roof only."
    },{
        logo:<StaticImage src={'../../../images/WhyUs/5.png'} alt={"Experienced Team"}/>,
        heading:"Experienced Team",
        content:"We have been working in this field since 2016 and have a 100% success rate. And the credit goes to our subject-specific dedicated team of experts."
    },{
        logo:<StaticImage src={'../../../images/WhyUs/6.png'} alt={"Quick Response"}/>,
        heading:"Quick Response",
        content:"We value our and our clients’ time. So, our response time is relatively high, and we make all efforts to give you a prompt reply."
    },
]

export default function WhyUs(){
    return <div className="whyUs">
            <div className="heading">Why Us?</div>
            <div className="elements">
                {ELEMENTS.slice(0,3).map(element=><div className="element">
                    <div className="logo">
                        {element.logo}
                    </div>
                    <div className="heading">
                        {element.heading}
                    </div>
                    <div className="content">
                        {element.content}
                    </div>
                </div>)}
            </div>
        <div className="elements">
            {ELEMENTS.slice(3,6).map(element=><div className="element">
                <div className="logo">
                    {element.logo}
                </div>
                <div className="heading">
                    {element.heading}
                </div>
                <div className="content">
                    {element.content}
                </div>
            </div>)}
        </div>
    </div>
}
