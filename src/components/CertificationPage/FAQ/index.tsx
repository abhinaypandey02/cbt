import React from 'react';
import './styles.scss';
import {Accordion} from "react-bootstrap";
import {FAQInterface} from "../../../interfaces/CertificationPageInterface";

export default function FAQ({faqs}:{faqs:FAQInterface[]}){
    return <div className="faq">
        <div className="heading">
            F.A.Q.
        </div>
        <Accordion defaultActiveKey="0">
            {faqs.map((faq,index)=><Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>
                    {faq.answer}
                </Accordion.Body>
            </Accordion.Item>)}
        </Accordion>
    </div>
}
