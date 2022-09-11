import React from 'react';
import './styles.scss';
import {Accordion} from "react-bootstrap";
import {FAQInterface} from "../../../interfaces/CertificationPageInterface";
const defaultFAQ:FAQInterface[]=[
    {
        question:"I like your services where do I signup",
        answer:"Good you have decided to go with the services that will make your journey smooth. You can sign up or contact us on WhatsApp, or Telegram or send your queries via email. We recommend connecting with us on WhatsApp for fast and around-the-clock responses."
    },
    {
        question:"Why Proxy Exam & No Brain Dumps?",
        answer:"When you go for brain dumps, you go for a set of questions that may come in the exam. You have to cram sets of questions that in the end may not be there in the exam. Since the questions keep changing in the exam, there is no passing guarantee. But with proxy exams, there is a 100% passing guarantee since they are done by certified trainers for the same and use their knowledge for the questions making it an issue-free problem if the question changes."
    }
]
export default function FAQ({faqs}:{faqs:FAQInterface[]}){
    return <div className="faq">
        <div className="heading">
            F.A.Q.
        </div>
        <Accordion defaultActiveKey="0">
            {[...defaultFAQ,...faqs].map((faq,index)=><Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>
                    {faq.answer}
                </Accordion.Body>
            </Accordion.Item>)}
        </Accordion>
    </div>
}
