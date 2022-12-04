import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section3.module.css'

export default function Section3(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {-scroll*400} data-aos = 'fade-up' data-aos-duration = '1000'  className = {`${styles.heading}`}>Our story been featured</p>
            <div data-aos-offset = {-scroll*400} data-aos = 'fade-up' data-aos-duration = '1000'  className = {`${styles.centerCenter}`}>
                <div className = {`${styles.stretchBetween}`}>
                    <Image src = './collab1.png' width = '390px' height = '30px'/>
                    <Image src = './collab2.png' width = '119px' height = '119px'/>
                    <Image src = './collab3.png' width = '164px' height = '88px'/>
                    <Image src = './collab5.png' width = '299px' height = '91.5px'/>
                </div>
            </div>
            <div style = {{marginTop: '50px'}} data-aos-offset = {-scroll*400} data-aos = 'fade-up' data-aos-duration = '1000'  className = {`${styles.centerCenter}`}>
                <div className = {`${styles.stretchBetween}`}>
                    <Image src = './collab6.png' width = '400px' height = '55px'/>
                    <Image src = './collab7.png' width = '311px' height = '72px'/>
                    <div style = {{backgroundColor: 'black'}}>
                        <Image src = './collab4.png' width = '307px' height = '86px'/>
                    </div>
                </div>
            </div>
        </div>
    )
}