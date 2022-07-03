import React from "react";
import NavigationBar from "../NavigationBar";
import './styles.scss';
import Footer from "../Footer";
import Floating from "../Floating";
export default function Layout({children,location}:any){
    return <div className="layout">
        <Floating/>
        <NavigationBar location={location}/>
        {children}
        <Footer/>
    </div>
}
