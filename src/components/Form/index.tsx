import React, {useState} from 'react';
import './styles.scss';
import codes from '../../config/country-codes';
export default function Form({mini}: { mini: boolean }) {
    const [sel,setSel]=useState(0);
    return <form className="form">
        <div className="input-containers">
            <input className="base" placeholder="Your name"/>
            <input className="base" placeholder="Your email"/>
        </div>
        {!mini && <div className="input-containers">

            <input className="base" placeholder="Subject"/>
        </div>}
        <div className="input-containers">

            <input className="base mobile" placeholder="Phone Number"/>
            <select id="country-codes">
                {codes.map((code,index)=><option onClick={()=>setSel(index)} key={index} value={code.MobileCode}>{code.MobileCode} {sel!==index&&code.Name}</option>)}
            </select>
        </div>
        <div className="input-containers">

            <textarea rows={4} className="base" placeholder="Text your message in here..."/>
        </div>
        <div className="input-containers">

            <button type="submit" className="submit">Send</button>
        </div>

    </form>
}
