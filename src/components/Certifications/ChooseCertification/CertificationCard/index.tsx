import React from 'react';
import './styles.scss';
import {GROUP1} from "../index";
import {Link} from "gatsby";

export default function CertificationCard({data, color, ROUND_TICK,TICK,ARROW}:{data:typeof GROUP1[0],color:string,ROUND_TICK:any,TICK:any,ARROW:any}){
    return <div className="certification-card">
        <div className="header">
            <div className="image">{ROUND_TICK}</div>
            <div className="content">
                <div className="heading" style={{color}}>

                    {data.title}
                </div>
                <div className="desc">
                    {data.desc}
                </div>
                <Link to={data.link} className="see-more">
                    <div className="text" style={{color}}>See More</div>
                    <div className="image">{ARROW}</div>
                </Link>
            </div>

        </div>
        <div className="elements">
            {data.sub_groups.map(e=><div className="element">
                <div className="image">
                    {TICK}
                </div>
                <div className="content">
                    <div className="heading" style={{color}}>
                        {e.title}
                    </div>
                    <div className="desc">
                        {e.desc}
                    </div>
                    <Link to={e.link} className="see-more">
                        <div className="image">{ARROW}</div>
                    </Link>
                </div>
            </div>)}
        </div>
    </div>
}
