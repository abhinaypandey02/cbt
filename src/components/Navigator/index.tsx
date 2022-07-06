import React from 'react';
import './styles.scss';
import routes from "../../config/routes";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import assert from "assert";

export default function Navigator({pathIDs,pathData}:{pathIDs?:string[],pathData?:{name:string;route:string; id:string}[]}){
    const paths:typeof routes=[];
    if(pathIDs&&pathData){
        console.error("BOTH VALUES SHOULD NOT BE PROVIDED TOGETHER!");
        return null;
    }
    pathIDs?.forEach(id=>{
        const route=routes.find(r=>r.id===id);
        if(route){
            paths.push(route);
        } else {
            console.error("ROUTE NOT FOUND!")
        }
    })
    pathData?.forEach(path=>{
        paths.push(path)
    })
    return <div className="navigator">
        {paths.map((path,index)=>{
            if(index===paths.length-1){
                return <Link to={path.route} className="lastPath">
                    {path.name}
                </Link>
            } else {
                return <span className="navigator-container">
                    <Link to={path.route} className="firstPath">
                        {path.name}
                    </Link>
                    <StaticImage placeholder="blurred" className="navigator-arrow" src={'../../images/navigator-arrow.png'} alt={"navigator arrow"}/>
                </span>
            }
        })
        }

    </div>
}
