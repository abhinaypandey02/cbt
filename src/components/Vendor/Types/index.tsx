import React from 'react';
import './styles.scss';
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

const TYPES=[
    {
        logo:<StaticImage placeholder="blurred" src={'../../../images/pmi/type1.png'} alt={"Professional in Business Analysis – Proxy Exam"}/>,
        title:"Professional in Business Analysis – Proxy Exam",
        desc:"More than half of project failure can be attributed to a lack of business analysis understanding.",
    },{
        logo:<StaticImage placeholder="blurred" src={'../../../images/pmi/type2.png'} alt={"Project Management Professional (PMP)"}/>,
        title:"Project Management Professional (PMP)",
        desc:"PMP certification is ranked as one of the most prestigious project management certifications globally.",
    },{
        logo:<StaticImage placeholder="blurred" src={'../../../images/pmi/type3.png'} alt={"Agile Certified Practitioner (ACP)"}/>,
        title:"Agile Certified Practitioner (ACP)",
        desc:"PMI-ACP is one of the highly in-demand certifications and evaluates the candidates’ understanding of agile principles and techniques.",
    },{
        logo:<StaticImage placeholder="blurred" src={'../../../images/pmi/type4.png'} alt={"Certified Associate in Project Management (CAPM)"}/>,
        title:"Certified Associate in Project Management (CAPM)",
        desc:"Project management is an ever-growing profession, and organizations globally have recognized the need to hire trained project managers for timely and result-oriented project delivery."
    },{
        logo:<StaticImage placeholder="blurred" src={'../../../images/pmi/type5.png'} alt={"Risk Management Professional (RMP) – Proxy Exam"}/>,
        title:"Risk Management Professional (RMP) – Proxy Exam",
        desc:"The PMI-RMP certification equips you with the skills to identify threats involved in a project, create plans to mitigate them, and evaluate the plan’s credibility, thereby helping your organization meet its business goals within a specified time and without monetary loss.",
    },
]

export default function TypesVendor(props:{certifications:{title:string,description:string,logo:any,route:string}[]}){
    const CERTS=props.certifications.map(c=>({...c,compiledLogo:getImage(c.logo.localFile)}))
    return <div className="types-pmi">
        {CERTS.map(t=><div className="type">
            <div className="heading">
                <div className="logo">{t.compiledLogo&&<GatsbyImage alt={t.title} image={t.compiledLogo}/>}</div>
                <div className="text">{t.title}</div>
            </div>
            <div className="desc">
                {t.description}
            </div>
            <Link to={t.route} className="seeMore">

                <div className="text">See More</div>
                <div className={'image'}>
                    <StaticImage placeholder="blurred" src="../../../images/arrow.png" alt="read more"/>

                </div>

            </Link>
        </div>)}
    </div>
}
