
import styles from './contactPage.module.css'
import PaddingLayout from "../../layouts/paddingLayout/paddingLayout";
import StandardLayout from "../../layouts/standardLayout/standardLayout";
import Image from 'next/image';
import { mail } from './functions';
import axios from 'axios';
import { useRef, useState } from 'react';


export default function ContactPage(props){


    const [opacity, setOpacity] = useState(0)
    const [success, setSuccess] = useState(true)

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);


    let sendEmail = ()=>{
        axios.post("https://api.sendinblue.com/v3/smtp/email", {
            sender:{  
                name:"From Borgfy",
                email:"borgfy@borgfy.com"
             },
             to:[{  
                   email:"husnainbusiness315@gmail.com",
                   name:"Husnain Business"
                }],
             subject:"Borgfy",
             htmlContent:`<html><head></head><body><p><b>Name<b/>: ${nameRef.current.value}</p><p><b>Email<b/>: ${emailRef.current.value}</p><p><b>Subject<b/>: ${subjectRef.current.value}</p><p><b>Message<b/>: ${messageRef.current.value}</p></body></html>`
          },
          {
            headers: {
                "api-key": "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",
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
                            <Image priority  src = '/../public/digital_left_triangle.png' width = '219.47px' height = '221.19px'/>
                        </div>
                        <div style = {{position: 'absolute', top: 23, right: '-12rem'}}>
                            <Image priority  src = '/../public/digital_right_triangle.png' width = '170px' height = '221.19px'/>
                        </div>


                        <div className = {`${styles.box}`}>

                            <div style = {{opacity: opacity, backgroundColor: success ? 'lightgreen' : "#FF7F7F", borderRadius: '10px', display: 'flex', justifyContent: 'center', padding: '10px 25px'}}>
                                <p style = {{color: 'black', fontSize: '20px'}}>{success ? "Thank you for being interested. We will reach you soon." : "Some Error Occured"}</p>
                            </div>


                            

                            <div className = {styles.bell} style = {{position: 'absolute', top: '87px', left: '127px'}}>
                                <Image priority  src = '/../public/contact_bell.png' width = '103px' height = '103px'/>
                            </div>

                            <p className = {`${styles.contact}`}>Contact Us</p>
                            <input ref = {nameRef} className = {`${styles.input}`} placeholder = 'Name'/>
                            <br/>
                            <input ref = {subjectRef} className = {`${styles.input}`} placeholder = 'Subject'/>
                            <br/>
                            <input ref = {emailRef} className = {`${styles.input}`} placeholder = 'Email'/>
                            <br/>
                            <textarea ref = {messageRef} className = {`${styles.input} ${styles.textArea}`} placeholder = 'Write Something...'></textarea>
                            <p onClick = {()=>{sendEmail()}} style = {{cursor: 'pointer'}} className = {`${styles.submit}`}>Submit</p>


                            <div className={styles.ano} style = {{position: 'absolute', top: '170px', right: '107px'}}>
                                <Image priority  src = '/../public/contact_image1.png' width = '553px' height = '553px'/>
                                <div style = {{display: 'flex'}}>
                                    <div className={styles.oo} style = {{width : '200px', marginRight: '20px'}}>
                                        <p  style = {{marginTop: '20px', display: 'inline-block', marginRight: '20px'}} className = {`${styles.text}`}>India</p>
                                        <Image priority  src = '/../public/india.png' width = '20px' height = '16px'/>
                                        <br/>
                                        <p  style = {{marginTop: '20px'}} className = {`${styles.text}`}>B-78, Near Saket Metro Station, Gate no, 2, New Delhi, 110030, India </p>
                                        <p  style = {{marginTop: '20px'}} className = {`${styles.text}`}>+91 813 093 7887</p>
                                    </div>
                                    <div className={styles.oo} style = {{width : '200px', marginRight: '20px'}}>
                                        <p  style = {{marginTop: '20px', display: 'inline-block', marginRight: '20px'}} className = {`${styles.text}`}>USA</p>
                                        <Image priority  src = '/../public/usa.png' width = '20px' height = '16px'/>
                                        <br/>
                                        <p  style = {{marginTop: '20px'}} className = {`${styles.text}`}>1216, Broadway, 2nd floor New York Down, NY, 10001, USA </p>
                                        <p  style = {{marginTop: '20px'}} className = {`${styles.text}`}>+1 646 338 6179</p>
                                    </div>
                                    <div className={styles.oo} style = {{width : '200px', marginRight: '20px'}}>
                                        <p  style = {{marginTop: '20px', display: 'inline-block', marginRight: '20px'}} className = {`${styles.text}`}>Saudi Arabia</p>
                                        <Image priority  src = '/../public/sau.png' width = '20px' height = '16px'/>
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