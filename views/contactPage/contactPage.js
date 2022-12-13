
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
                            <Image priority  src = '/../public/digital_left_triangle.png' width = '219.47px' height = '221.19px'/>
                        </div>
                        <div style = {{position: 'absolute', top: 23, right: '-12rem'}}>
                            <Image priority  src = '/../public/digital_right_triangle.png' width = '170px' height = '221.19px'/>
                        </div>


                        <div className = {`${styles.box}`}>

                            

                            

                            <div className = {styles.bell} style = {{position: 'absolute', top: '87px', left: '127px'}}>
                                <Image priority  src = '/../public/contact_bell.png' width = '103px' height = '103px'/>
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