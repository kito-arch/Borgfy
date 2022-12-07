
import styles from './contactPage.module.css'
import PaddingLayout from "../../layouts/paddingLayout/paddingLayout";
import StandardLayout from "../../layouts/standardLayout/standardLayout";
import Image from 'next/image';
import { mail } from './functions';


export default function ContactPage(props){
    return(

        <StandardLayout contact = {true}>
            <div className = {`${styles.container}`}>

                <PaddingLayout backgroundColor = 'black'>
                    <div className = {`${styles.innerContainer}`}>

                        <div style = {{position: 'absolute', top: '400px', left: '-14rem'}}>
                            <Image src = './digital_left_triangle.png' width = '219.47px' height = '221.19px'/>
                        </div>
                        <div style = {{position: 'absolute', top: 23, right: '-12rem'}}>
                            <Image src = './digital_right_triangle.png' width = '170px' height = '221.19px'/>
                        </div>


                        <div className = {`${styles.box}`}>

                            

                            <div style = {{position: 'absolute', top: '170px', right: '107px'}}>
                                <Image src = './contact_image1.png' width = '553px' height = '553px'/>
                                <div style = {{display: 'flex'}}>
                                    <div style = {{width : '200px', marginRight: '20px'}}>
                                        <Image src = './india.png' width = '20px' height = '16px'/>
                                        <p  style = {{marginTop: '20px'}} className = {`${styles.text}`}>B-78, Near Saket Metro Station, Gate no, 2, New Delhi, 110030, India </p>
                                    </div>
                                    <div style = {{width : '200px', marginRight: '20px'}}>
                                        <Image src = './usa.png' width = '20px' height = '16px'/>
                                        <p  style = {{marginTop: '20px'}} className = {`${styles.text}`}>1216, Broadway, 2nd floor New York Down, NY, 10001, USA </p>
                                    </div>
                                    <div style = {{width : '200px', marginRight: '20px'}}>
                                        <Image src = './sau.png' width = '20px' height = '16px'/>
                                        <p  style = {{marginTop: '20px'}} className = {`${styles.text}`}>5039 Abi Jafar Al Bati, Al Arid Dist, Riyadh - 1337, Saudi Arabia </p>
                                    </div>
                                </div>
                            </div>

                            <div className = {styles.bell} style = {{position: 'absolute', top: '87px', left: '127px'}}>
                                <Image src = './contact_bell.png' width = '103px' height = '103px'/>
                            </div>

                            <p className = {`${styles.contact}`}>Contact Us</p>
                            <input className = {`${styles.input}`} placeholder = 'Name'/>
                            <br/>
                            <input className = {`${styles.input}`} placeholder = 'Subject'/>
                            <br/>
                            <input className = {`${styles.input}`} placeholder = 'Email'/>
                            <br/>
                            <textarea className = {`${styles.input} ${styles.textArea}`} placeholder = 'Write Something...'></textarea>
                            <p className = {`${styles.submit}`}>Submit</p>
                        </div>
                    </div>
                </PaddingLayout>

            </div>
        </StandardLayout>


    )
}