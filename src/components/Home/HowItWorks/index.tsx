import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

const HOW_IT_WORKS=[
    {
        logo: <StaticImage placeholder="blurred" src={'../../../images/howItWorks/1.png'} alt={"Select Your Desired Certification"}/>,
        heading: "Select Your Desired Certification",
        desc:"Select the certification you want to apply for from a vast list of certificates."
    },{
        logo: <StaticImage placeholder="blurred" src={'../../../images/howItWorks/2.png'} alt={"Connect with us"}/>,
        heading: "Connect with us",
        desc:"Your next step would be connecting with us and getting a detailed explanation of the future process."
    },{
        logo: <StaticImage placeholder="blurred" src={'../../../images/howItWorks/3.png'} alt={"Exam Scheduling"}/>,
        heading: "Exam Scheduling",
        desc:"Now comes scheduling, which you can do by your own or our team is happy to help."
    },{
        logo: <StaticImage placeholder="blurred" src={'../../../images/howItWorks/4.png'} alt={"Passing the Exam"}/>,
        heading: "Passing the Exam",
        desc:"On the big day, sit back and see the magic of you passing with flying colors."
    },{
        logo: <StaticImage placeholder="blurred" src={'../../../images/howItWorks/5.png'} alt={"Pay the Fee"}/>,
        heading: "Pay the Fee",
        desc:"Once you receive the confirmation of passing, kindly pay us for our efforts."
    },
]

export default function HowItWorks(){
    return <div className="howItWorks">
        <div className="heading">How It Works</div>
        <div className="elements">
            {HOW_IT_WORKS.map((ele,index)=><div className="element">
                <div className="image">
                    {ele.logo}
                    <span className="counter">{index+1}</span>
                </div>
                <div className="content">
                    <div className="heading">{ele.heading}</div>
                    <div className="desc">{ele.desc}</div>
                </div>

            </div>)}
        </div>
    </div>
}
