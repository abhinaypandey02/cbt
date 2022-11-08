import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function Header(){
    return <div className="home-header">
        <div className="content">
            {/*<StaticImage placeholder="blurred" className={"ellipse"} src={'../../../images/ellipse.png'} alt={'Ellipse'}/>*/}

            <div className="heading">
                Passing the Exam is Easier than You Think
            </div>
            <div className="text">
                We are here to support all the professionals to achieve excellency in their field. We are your one stop destination where you can find the easiness and comfort to pass your certifications. We will help you to achieve your targeted badge with the amazing policy of “Pay after you Pass”.
                <br/>
                <br/>
                Learn to Relax!
            </div>
            <div className="buttons">
                <a href={'https://wa.me/14158306004'} target={'_blank'} className="primary">
                    <div className="text">
                        WhatsApp Now
                    </div>
                </a>
                <a href={'https://www.youtube.com/watch?v=vW54snNKXLc'} target={'_blank'} className="secondary">
                    <div className="logo">
                        <StaticImage placeholder="blurred" src={'../../../images/headerButtonPlay.png'} alt={"Header Button Play"}/>
                    </div>
                    <div className="text">
                        Watch Video
                    </div>
                </a>
            </div>
        </div>
        <div className="image">
            <StaticImage placeholder="blurred" src={'../../../images/homeHeaderImage.png'} alt={"Header vector"}/>
        </div>
    </div>
}
