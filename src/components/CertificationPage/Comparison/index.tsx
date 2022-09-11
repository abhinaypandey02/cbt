import React from 'react';
import './styles.scss'
import {StaticImage} from "gatsby-plugin-image";
import icon1 from '../../../images/pmp/1.svg';
import icon2 from '../../../images/pmp/2.svg';
import icon3 from '../../../images/pmp/3.svg';
import icon4 from '../../../images/pmp/4.svg';
import icon5 from '../../../images/pmp/5.svg';
import icon6 from '../../../images/pmp/6.svg';
import icon7 from '../../../images/pmp/7.svg';
import icon8 from '../../../images/pmp/8.svg';
import icon9 from '../../../images/pmp/9.svg';
import icon10 from '../../../images/pmp/10.svg';

type PROPS_STYLE = {}

export default function Comparison(props: PROPS_STYLE) {
    return <div className={'comparison'}>
        <h2>
            What Makes CBT PROXY Different
        </h2>
        <table>
            <thead>
            <span className={'vs'}>
                <StaticImage alt={'vs'} src={'../../../images/pmp/versus.png'}/>
            </span>
            <tr>
                <th>
                    CBT Proxy
                    <StaticImage className={'like'} alt={'vs'} src={'../../../images/pmp/like.png'}/>
                </th>
                <th>
                    Other
                    <StaticImage className={'like'} alt={'vs'} src={'../../../images/pmp/dislike.png'}/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div className={'container'}>
                        <img src={icon1} className={'logo'} alt={'payment terms'}/>
                        <span className={'text'}>
                        <div className={'heading'}>
                    Payment terms

                        </div>
                        <div className={'desc'}>
Our payment term/policy, <b>“Pay after you pass”</b> is one of the best you can get.  We only take payment if you pass the certification.
                        </div>
                    </span>
                    </div>
                </td>
                <td>
                    <div className={'container'}>
                        <img src={icon2} className={'logo'} alt={'payment terms'}/>
                        <span className={'text'}>
                        <div className={'heading'}>
                    Payment terms

                        </div>
                        <div className={'desc'}>
                            There are so many scams now a days which asks for payment first and then vanishes with your money, sliding you into utter sadness.
                        </div>
                    </span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={'container'}>
                        <img src={icon3} className={'logo'} alt={'payment terms'}/>
                        <span className={'text'}>
                        <div className={'heading'}>
                    Market Leader

                        </div>
                        <div className={'desc'}>
                            We have been in <b>the business for a long time</b>, always presenting the clients with success and nothing else. Also, from the day we have entered we have been only in the proxy business, making us the most old and skilled in the industry.
                        </div>
                    </span>
                    </div>
                </td>
                <td>
                    <div className={'container'}>
                        <img src={icon4} className={'logo'} alt={'payment terms'}/>
                        <span className={'text'}>
                        <div className={'heading'}>
                   Market Leader

                        </div>
                        <div className={'desc'}>
                            Many vendors have entered the proxy business after been a terrible failure at the dumps business and other. And since they were reliable on the dumps in the past, they have been doing the same now as well serving the clients failure and nothing else.
                        </div>
                    </span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={'container'}>
                        <img src={icon5} className={'logo'} alt={'payment terms'}/>
                        <span className={'text'}>
                        <div className={'heading'}>
                   Passing Surety

                        </div>
                        <div className={'desc'}>
                            <b>We have a 100% passing rate</b> which can assure you that you have a very bright future full of opportunities. But still for the satisfaction of the candidates, we have generated a policy at our office of not leaving the client’s hand until he has succeeded.
                        </div>
                    </span>
                    </div>
                </td>
                <td>
                    <div className={'container'}>
                        <img src={icon6} className={'logo'} alt={'payment terms'}/>
                        <span className={'text'}>
                        <div className={'heading'}>
                    Passing Surety

                        </div>
                        <div className={'desc'}>
                            There is no passing guarantee given by the vendors of the dumps and other vendors.
                        </div>
                    </span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={'container'}>
                        <img src={icon7} className={'logo'} alt={'payment terms'}/>
                        <span className={'text'}>
                        <div className={'heading'}>
                    Support

                        </div>
                        <div className={'desc'}>
                            As mentioned above, we do not leave the client’s hand until the destination of this process. <b>We are there even for the smallest issue 24*7</b> (and for the happy and cherishing moments too).
                        </div>
                    </span>
                    </div>
                </td>
                <td>
                    <div className={'container'}>
                        <img src={icon8} className={'logo'} alt={'payment terms'}/>
                        <span className={'text'}>
                        <div className={'heading'}>
                            Support

                        </div>
                        <div className={'desc'}>
                            Many vendors do not provide full support and even vanishes with your hard-earned money in between the process.
                        </div>
                    </span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={'container'}>
                        <img src={icon1} className={'logo'} alt={'payment terms'}/>
                        <span className={'text'}>
                        <div className={'heading'}>
                            Money Back Guarantee

                        </div>
                        <div className={'desc'}>
                            <b>We have the best money back guarantee</b>,<br/>
which is:<br/><br/>

we do not return the money,<br/><br/>

because we never take the payment until you have a confirmation of passing the exams. And hypothetically, if you fail, we are happy to pay the exam fees of your next attempt.

                        </div>
                    </span>
                    </div>
                </td>
                <td>
                    <div className={'container'}>
                        <img src={icon1} className={'logo'} alt={'payment terms'}/>
                        <span className={'text'}>
                        <div className={'heading'}>
                            Money back Guarantee

                        </div>
                        <div className={'desc'}>
                            A lot of scams are going on nowadays where they ask for the payment before the service is even provided. And once received the money they just vanish away or stop replying. Another case of dumps is that even sometimes they provide the dumps in return for your money, they never give you the guarantee of passing the certification, which is a very high risk you should not be taking.
                        </div>
                    </span>
                    </div>
                </td>
            </tr>

            </tbody>
        </table>
    </div>
}
