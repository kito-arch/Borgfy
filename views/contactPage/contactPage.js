
import styles from './contactPage.module.css'
import PaddingLayout from "../../layouts/paddingLayout/paddingLayout";
import StandardLayout from "../../layouts/standardLayout/standardLayout";
import Image from 'next/image';
import { mail } from './functions';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';


export default function ContactPage(props){


    const [opacity, setOpacity] = useState(0)
    const [success, setSuccess] = useState(true)
    const [reFail, setReFail] = useState(false)
    const [showSubmit, setShowSubmit] = useState(false)

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);


    useEffect(() => {
        const loadScriptByURL = (id, url, callback) => {
            const isScriptExist = document.getElementById(id);
            
            if (!isScriptExist) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url;
                script.id = id;
                script.onload = function () {
                    if (callback) callback();
                };
                document.body.appendChild(script);
            }
            
            if (isScriptExist && callback) callback();
        }
        
        // load the script by passing the URL
        loadScriptByURL("6Le_AZAjAAAAAI1_3cckuVFbxaLrrNQs8hddCSus", `https://www.google.com/recaptcha/api.js?render=6Le_AZAjAAAAAI1_3cckuVFbxaLrrNQs8hddCSus`, function () {
            console.log("Script loaded!");
            setShowSubmit(true)
        });
    }, []);


    const handleOnClick = e => {
        e.preventDefault();
        window.grecaptcha.ready(() => {
            window.grecaptcha.execute("6Le_AZAjAAAAAI1_3cckuVFbxaLrrNQs8hddCSus", { action: 'submit' }).then(token => {
                submitData(token);
            });
        });
    }
        
    const submitData = token => {
        axios.post("/api/recaptcha", {
            token
        })
        .then((res)=>{
            if(res.data.success && res.data.score >=0.5){
                sendEmail()
            }
            else{
                setSuccess(false)
                setReFail(true)
                setOpacity(1)
                setTimeout(()=>{
                    setReFail(false)
                    setOpacity(0)
                }, 3000)
            }
        })
        .catch((err)=>{
            console.log(err)
            setSuccess(false)
            setReFail(true)
            setOpacity(1)
            setTimeout(()=>{
                setReFail(false)
                setOpacity(0)
            }, 3000)
        })
        // console.log(token)
    }


    let sendEmail = ()=>{
        axios.post("https://api.sendinblue.com/v3/smtp/email", {
            sender:{  
                name:"Borgfy",
                email:"husnainbusiness315@gmail.com"
             },
             replyTo: {
                name: "Borgfy",
                email: "husnainbusiness315@gmail.com"
             },
             to:[{  
                   email:"info@borgfy.com",
                   name:"Borgfy"
                }],
             subject:"From Borgfy",
             htmlContent:`<html><head></head><body><p><b>Name<b/>: ${nameRef.current.value}</p><p><b>Email<b/>: ${emailRef.current.value}</p><p><b>Subject<b/>: ${subjectRef.current.value}</p><p><b>Message<b/>: ${messageRef.current.value}</p></body></html>`
          },
          {
            headers: {
                "api-key": `${process.env.NEXT_PUBLIC_APIKEY}`,
                "Content-Type": "application/json",
                "accept": "application/json"
            }
          }
        )
        .then((res)=>{
            setSuccess(true)
            setOpacity(1)
            setTimeout(()=>{
                setOpacity(0)
            }, 3000)
            nameRef.current.value = ""
            emailRef.current.value = ""
            messageRef.current.value = ""
            subjectRef.current.value = ""
        })
        .catch((err)=>{
            // console.log(process.env.NEXT_PUBLIC_APIKEY)
            setSuccess(false)
            setOpacity(1)
            setTimeout(()=>{
                setOpacity(0)
            }, 3000)
            console.log(err)
        })
    }

    return(

        <StandardLayout contact = {true}>
            <div className = {`${styles.container}`}>

                <PaddingLayout backgroundColor = 'black'>
                    <div className = {`${styles.innerContainer}`}>

                        <div style = {{position: 'absolute', top: '400px', left: '-14rem'}}>
                            <Image priority  src = './digital_left_triangle.png' width = '219.47px' height = '221.19px'/>
                        </div>
                        <div style = {{position: 'absolute', top: 23, right: '-12rem'}}>
                            <Image priority  src = './digital_right_triangle.png' width = '170px' height = '221.19px'/>
                        </div>


                        <div className = {`${styles.box}`}>

                            <div style = {{opacity: opacity, backgroundColor: success ? 'lightgreen' : "#FF7F7F", borderRadius: '10px', display: 'flex', justifyContent: 'center', padding: '10px 25px'}}>
                                <p style = {{color: 'black', fontSize: '20px'}}>{reFail ? 'Recaptcha Failed, Try Again!' : (success ? "Thank you for being interested. We will reach you soon." : "Some Error Occured")}</p>
                            </div>


                            

                            <div className = {styles.bell} style = {{position: 'absolute', top: '87px', left: '127px'}}>
                                <Image priority  src = './contact_bell.png' width = '103px' height = '103px'/>
                            </div>

                            <p className = {`${styles.contact}`}>Contact Us</p>
                            <input ref = {nameRef} className = {`${styles.input}`} placeholder = 'Name'/>
                            <br/>
                            <input ref = {subjectRef} className = {`${styles.input}`} placeholder = 'Subject'/>
                            <br/>
                            <input ref = {emailRef} className = {`${styles.input}`} placeholder = 'Email'/>
                            <br/>
                            <textarea ref = {messageRef} className = {`${styles.input} ${styles.textArea}`} placeholder = 'Write Something...'></textarea>
                            <p onClick = {(event)=>{
                                if(!showSubmit)
                                    return;
                                handleOnClick(event)
                            }} style = {{cursor: 'pointer', background: showSubmit ? 'linear-gradient(90deg, #018DFE 37.43%, #2F5FCF 98.63%)' : 'gray'}}  className = {`${styles.submit}`}>Submit</p>


                            <div className={styles.ano} style = {{position: 'absolute', top: '170px', right: '107px'}}>
                                <Image priority  src = './contact_image1.png' width = '553px' height = '553px'/>
                                <div style = {{display: 'flex'}}>
                                    <div className={styles.oo} style = {{width : '200px', marginRight: '20px'}}>
                                        <p  style = {{marginTop: '20px', display: 'inline-block', marginRight: '20px'}} className = {`${styles.text}`}>India</p>
                                        <Image priority  src = './india.png' width = '20px' height = '16px'/>
                                        <br/>
                                        <p  style = {{marginTop: '20px'}} className = {`${styles.text}`}>B-78, Near Saket Metro Station, Gate no, 2, New Delhi, 110030, India </p>
                                        <p  style = {{marginTop: '20px'}} className = {`${styles.text}`}>+91 813 093 7887</p>
                                    </div>
                                    <div className={styles.oo} style = {{width : '200px', marginRight: '20px'}}>
                                        <p  style = {{marginTop: '20px', display: 'inline-block', marginRight: '20px'}} className = {`${styles.text}`}>USA</p>
                                        <Image priority  src = './usa.png' width = '20px' height = '16px'/>
                                        <br/>
                                        <p  style = {{marginTop: '20px'}} className = {`${styles.text}`}>1216, Broadway, 2nd floor New York Down, NY, 10001, USA </p>
                                        <p  style = {{marginTop: '20px'}} className = {`${styles.text}`}>+1 646 338 6179</p>
                                    </div>
                                    <div className={styles.oo} style = {{width : '200px', marginRight: '20px'}}>
                                        <p  style = {{marginTop: '20px', display: 'inline-block', marginRight: '20px'}} className = {`${styles.text}`}>Saudi Arabia</p>
                                        <Image priority  src = './sau.png' width = '20px' height = '16px'/>
                                        <br/>
                                        <p  style = {{marginTop: '20px'}} className = {`${styles.text}`}>5039 Abi Jafar Al Bati, Al Arid Dist, Riyadh - 1337, Saudi Arabia </p>
                                        <p  style = {{marginTop: '20px'}} className = {`${styles.text}`}>+966 566 986 066</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PaddingLayout>

            </div>
        </StandardLayout>


    )
}