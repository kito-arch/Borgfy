import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section3.module.css'

export default function Section3(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {scroll-400} data-aos = 'fade-up' data-aos-duration = '1000'  className = {`${styles.heading}`}>Oue Story been featured through them</p>
            <div data-aos-offset = {scroll-400} data-aos = 'fade-up' data-aos-duration = '1000'  className = {`${styles.centerCenter}`}>
                <div className = {`${styles.stretchBetween}`}>
                    <Image src = '/../public/landing2_sec3_image1.png' width = '312px' height = '92px'/>
                    <Image src = '/../public/landing2_sec3_image3.png' width = '407px' height = '92px'/>
                    <Image src = '/../public/landing2_sec3_image2.png' width = '318px' height = '92px'/>
                    <Image src = '/../public/landing2_sec3_image4.png' width = '227px' height = '92px'/>
                    <Image src = '/../public/landing2_sec2_image5.png' width = '259px' height = '92px'/>
                </div>
            </div>
        </div>
    )
}