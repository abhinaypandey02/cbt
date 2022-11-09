import React, {useEffect} from 'react';
import {navigate} from 'gatsby'
type PROPS_STYLE={

}

export default function Blogid(props:PROPS_STYLE){
    useEffect(()=>{
        console.log(props)
    },[])
    return <div className={''}>
        Redirecting to ""
    </div>
}
