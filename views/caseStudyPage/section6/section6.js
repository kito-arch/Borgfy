
import Image from 'next/image'
import { scroll } from '../../../conts_vars'
import styles from './section6.module.css'

export default function Section6(props){
    return(
        <div className = {`${styles.container}`}>
            <div data-aos-offset = {-scroll*1000} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.headingContainer}`}>
                <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                    <Image src = '/../public/gray_ellipse.png' width = '61px' height = '61px'/>
                </div>
                <p className = {`${styles.heading}`}>Challenges</p>
            </div>


            <div className = {`${styles.startBetween}`}>
                <Image src = '/../public/case_sec6_image1.png' width = '803px' height = '557px' />
                <p data-aos-offset = {-scroll*1200} data-aos = 'fade-left' data-aos-duration = '3000'  className = {`${styles.text}`}>Developing AI recommends the right product based on screen analysis.<br/><br/>Also, Including AR features that would provide users with real-time analysis and suggest users the right solutions.</p>
            </div>

            <div className = {`${styles.startBetween}`}>
                <p data-aos-offset = {-scroll*1200} data-aos = 'fade-right' data-aos-duration = '3000'  className = {`${styles.text}`}>Additionally, acquiring information based on the make-up product, price, quality, and reviews and updating the information over time.<br/><br/>Providing all the features that would be comprehensive to provide for a real-time view of the face while experimenting with make-up. And enhancing the user experience to luxury.</p>
                <Image src = '/../public/case_sec6_image2.png' width = '696px' height = '671px' />
            </div>


        </div> 
    )
}