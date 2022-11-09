import React, {useEffect} from 'react';
import {navigate} from 'gatsby'
type PROPS_STYLE={

}

export default function Blogid(props:any){
    useEffect(()=>{
        console.log(props.params.blogid)
        navigate('/blog/'+props.params.blogid)
    },[])
    return <div className={''}>
        Redirecting to /blog/{props.params.blogid}
    </div>
}
