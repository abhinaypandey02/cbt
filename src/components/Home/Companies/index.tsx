import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

export default function Companies(){
    return <div className="companies">
        <Link to={'/certifications/cisco'}>

            <StaticImage placeholder="blurred"  src={'../../../images/companies/1.png'} alt={"cisco"}/>
        </Link>
        <Link to={'/certifications/isaca'}>

        <StaticImage placeholder="blurred" src={'../../../images/companies/2.png'} alt={"isaca"}/>
        </Link>
        <Link to={'/certifications/aws'}>

        <StaticImage placeholder="blurred" src={'../../../images/companies/3.png'} alt={"aws"}/>
        </Link>
        <Link to={'/certifications/pmi'}>

        <StaticImage placeholder="blurred" src={'../../../images/companies/4.png'} alt={"pmi"}/>
        </Link>
        <Link to={'/certifications/comptia'}>

        <StaticImage placeholder="blurred" src={'../../../images/companies/5.png'} alt={"comptia"}/>
        </Link>

    </div>
}
