import React from "react";
import NavigationBar from "../NavigationBar";
import './styles.scss';
import Footer from "../Footer";
import Floating from "../Floating";
export default function Layout({children,location, className, showStickyHeader}:any){
    return <div className={""+className}>
        {showStickyHeader&&<div id="notif" className="notif">
            Pass Any Exam Online Now & Pay After Passing Exam. <a href="https://wa.me/13474801260" target="_blank">Contact Now</a>
        </div>}
        <div className={'layout'}>
            <Floating/>
            <NavigationBar location={location}/>
            {children}
            <Footer/>
        </div>

    </div>
}
