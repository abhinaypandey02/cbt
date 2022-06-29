import React, {useState} from 'react';
import './styles.scss';
import codes from '../../config/country-codes';
import {useForm} from "react-hook-form";
import axios from 'axios';
import {Button, Modal} from "react-bootstrap";
const emailPattern=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const ERROR_MESSAGES:any={
    "required":"This field is required!",
    "validCode":"Please select a country code from the list below",
    "pattern":"Not a valid pattern. Please check and try again."
}
function ErrorComponent({errorCode}:{errorCode:string}){
    return <div className={'error-component'}>{ERROR_MESSAGES[errorCode]||"Invalid Field"}</div>
}
export default function Form({mini,location}: { mini: boolean,location:string }) {
    const [loading,setLoading]=useState(false);
    const [alert, setAlert] = React.useState({
        type: 'error',
        text: 'This is a alert message',
        show: false,
        header:'23'
    })
    const {register,handleSubmit, watch, formState:{errors}}=useForm({
        defaultValues:{countryCode:"",name:"",email:"",subject:"",message:"",phone:""}
    });
    function onCloseAlert(){
        setAlert({
            type: 'error',
                text: 'This is a alert message',
                show: false,
                header:''
        });
    }
    function openAlert(header:string,text:string, type:string){
        setAlert({
            type,
            text,
            show: true,
            header
        });
    }
    function onSubmit(data: any){
        setLoading(true);
        axios.post('https://34.122.23.239:8080/email',{...data,location}).then(()=>{
            openAlert("Query Submitted","Your query has been submitted and you will receive an email from us within 12 hours. please check spam/junk folder as well. to communicate faster chat with us on Whatsapp or telegram now.","success");
        }).catch(()=>{
            openAlert("Error","Your query could not be submitted, please use Whatsapp, Email or Call to reach us","error");
        }).finally(()=>{
            setLoading(false);
        })
    }
    return <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Modal centered={true} show={alert.show} onHide={onCloseAlert}>
            <Modal.Header closeButton={true}>
                {alert.header}
            </Modal.Header>
            <Modal.Body>
                {alert.text}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onCloseAlert} variant={alert.type==="error"?'danger':"success"}>OK</Button>
            </Modal.Footer>
        </Modal>
        <div className="input-containers">
            <input {...register('name',{required:true})} className="base" placeholder="Your name"/>
            <input type={'email'} {...register('email',{required:true,pattern:emailPattern})} className="base" placeholder="Your email"/>
        </div>
        {errors['name']&&<ErrorComponent errorCode={errors['name'].type}/>}
        {errors['email']&&<ErrorComponent errorCode={errors['email'].type}/>}

        {!mini && <div className="input-containers">

            <input {...register('subject')} className="base" placeholder="Subject"/>
        </div>}
        {errors['subject']&&<ErrorComponent errorCode={errors['subject'].type}/>}

        <div className="input-containers">

            <input type={'number'} {...register('phone',{required:true})} className="base mobile" placeholder="Phone Number"/>
            <input list={'country-list'} {...register('countryCode',{required:true,validate:{
                    validCode:v=>codes.find(ele=>ele.MobileCode===v)!==undefined
                }})} id="country-codes"/>
            <datalist id={'country-list'}>
                <option value={""}/>
                {codes.map((code,index)=><option key={index} value={code.MobileCode}>{code.Name}</option>)}
            </datalist>
        </div>
        {errors['countryCode']&&<ErrorComponent errorCode={errors['countryCode'].type}/>}
        {errors['phone']&&<ErrorComponent errorCode={errors['phone'].type}/>}

        <div className="input-containers">

            <textarea {...register('message',{required:true})} rows={4} className="base" placeholder="Text your message in here..."/>
        </div>
        {errors['message']&&<ErrorComponent errorCode={errors['message'].type}/>}

        <div className="input-containers">

            <button disabled={loading} type="submit" className="submit">{loading?"Loading":"Send"}</button>
        </div>

    </form>
}
