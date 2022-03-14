import React from "react";
import NavigationBar from "../NavigationBar";
import './styles.scss';
export default function Layout({children,location}:any){
    return <div className="layout">
        <NavigationBar location={location}/>
        {children}
    </div>
}
