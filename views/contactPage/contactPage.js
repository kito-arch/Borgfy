
import styles from './contactPage.module.css'
import PaddingLayout from "../../layouts/paddingLayout/paddingLayout";
import StandardLayout from "../../layouts/standardLayout/standardLayout";
import Image from 'next/image';

export default function ContactPage(props){
    return(

        <StandardLayout>
            <div className = {`${styles.container}`}>

                <PaddingLayout backgroundColor = 'black'>
                    <div className = {`${styles.innerContainer}`}>

                        <div style = {{position: 'absolute', top: '400px', left: '-14rem'}}>
                            <Image src = '/../public/digital_left_triangle.png' width = '219.47px' height = '221.19px'/>
                        </div>
                        <div style = {{position: 'absolute', top: 23, right: '-12rem'}}>
                            <Image src = '/../public/digital_right_triangle.png' width = '170px' height = '221.19px'/>
                        </div>


                        <div className = {`${styles.box}`}>

                            

                            <div style = {{position: 'absolute', top: '228px', right: '107px'}}>
                                <Image src = '/../public/contact_image1.png' width = '553px' height = '553px'/>
                            </div>

                            <div style = {{position: 'absolute', top: '87px', left: '127px'}}>
                                <Image src = '/../public/contact_bell.png' width = '103px' height = '103px'/>
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