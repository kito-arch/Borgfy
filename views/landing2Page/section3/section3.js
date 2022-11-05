
import Image from 'next/image'
import styles from './section3.module.css'

export default function Section3(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>Oue Story been featured through them</p>
            <div className = {`${styles.centerCenter}`}>
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