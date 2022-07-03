import * as React from "react";
import './styles.scss'
import {StaticImage} from "gatsby-plugin-image";

export default function Floating() {
    return <span className='floating'>
        <div className={'text'}>
            Chat with us:
        </div>
        <a target={'_blank'} href={'https://wa.me/13474801260'}>
            <StaticImage className={'image'} placeholder={'blurred'} alt={'whatsapp'}  src="../../images/whatsapp.png"/>
        </a>
        <a target={'_blank'} href={'https://t.me/examremote'}>
            <StaticImage className={'image'} placeholder={'blurred'} alt={'telegram'}  src="../../images/telegram.png"/>

        </a>
    </span>
}