import React, {useState} from 'react';
import './styles.scss';
import codes from '../../config/country-codes';
import {useForm} from "react-hook-form";
import axios from 'axios';
const emailPattern=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const ERROR_MESSAGES:any={
    "required":"This field is required!"
}
function ErrorComponent({errorCode}:{errorCode:string}){
    return <div className={'error-component'}>{ERROR_MESSAGES[errorCode]||"Invalid Field"}</div>
}
export default function Form({mini,location}: { mini: boolean,location:string }) {
    const [loading,setLoading]=useState(false);
    const {register,handleSubmit, watch, formState:{errors}}=useForm({
        defaultValues:{countryCode:"+1",name:"",email:"",subject:"",message:"",phone:""}
    });
    function onSubmit(data: any){
        setLoading(true);
        axios.post('http://34.122.23.239:8080/email',{...data,location}).then(()=>{
            alert("Your response has been sent successfully!")
        }).catch(()=>{
            alert("There was an error submitting the response :(")
        }).finally(()=>{
            setLoading(false);
        })
    }
    return <form onSubmit={handleSubmit(onSubmit)} className="form">
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
            <select {...register('countryCode',{required:true})} id="country-codes">
                {codes.map((code,index)=><option key={index} value={code.MobileCode}>{code.MobileCode} {watch("countryCode")!==code.MobileCode&&code.Name}</option>)}
            </select>
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
