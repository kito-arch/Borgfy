import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section4.module.css'

export default function Section4(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.innerContainer}`}>
                <p data-aos-offset = {-scroll*1200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>Industries We Serve</p>
                <p data-aos-offset = {-scroll*1200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.text}`}>We Had Great Experience Building</p>

                <div data-aos-offset = {-scroll*1200} data-aos = 'fade-up' data-aos-duration = '3000'>
                    <Image src = './landing_sec4_text.png' width = '700px' height = '40px'/>
                </div>
            </div>
        </div>
    )
}