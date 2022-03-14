import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

const FEATURES=[
    {
        heading:"We know what your needs",
        text:"It is a dream of all IT professionals to add globally recognized IT certifications to their resumes. But due to their busy schedule, they seldom get time to prepare for it, and hence many remain devoid of adding this career booster badge to their portfolio. They stay in the illusion that they cannot pass the certification exam without undergoing proper training. However, this is not the reality. We at CBT Proxy recognized the requirements and issues of such professionals and have come up with a robust solution.",
        image:<StaticImage placeholder={"blurred"} src={'../../../images/features/1.png'} alt={"Feature 1"}/>
    },
    {
        heading:"Our Mission",
        text:"CBT Proxy has been transforming the lives of professionals across the globe by helping them gain their dream certification and boost their IT careers since 2016. We are a pioneer proxy medium between computer-based test candidates and professional service providers and help them pass the examination in one attempt only, thereby saving their valuable time and money.",
        image:<StaticImage src={'../../../images/features/2.png'} alt={"Feature 2"}/>
    },
    {
        heading:"Get certified from now",
        text:"We have a vast pool of dedicated subject matter experts to help you pass the examination in the first go only. Our system is entirely transparent, and we follow a straightforward approach from registration to appearing for the final exam. So choose your field now and get a certificate that will help your current career.",
        image:<StaticImage src={'../../../images/features/3.png'} alt={"Feature 3"}/>
    }
]


export default function Features(){
    return <div className="features">
        {FEATURES.map(feature=><div className="feature">
            <div className="content">
                <div className="heading">{feature.heading}</div>
                <div className="text">{feature.text}</div>
            </div>
            <div className="image">{feature.image}</div>
            </div>)}
    </div>
}
