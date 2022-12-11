
import Image from 'next/image'
import { scroll } from '../../../conts_vars'
import styles from './section7.module.css'

export default function Section7(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', bottom: '100px', left: '0'}}>
                <Image priority  src = '/../public/case_sec8_image.png' width = '257px' height = '257px' />
            </div>

            <div data-aos-offset = {-scroll*1400} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.startBetween}`}>
                <div className = {`${styles.headingContainer}`}>
                    <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                        <Image priority  src = '/../public/gray_ellipse.png' width = '61px' height = '61px'/>
                    </div>
                    <p className = {`${styles.heading}`}>Our Solution</p>
                </div>
                <p className = {`${styles.text}`}>We have come up with an application with AR features that would analyze users' skin and provide them with the suited solutions. Which includes skin current condition with recommendations of the products they could use. Users will have customized unique skin profiles & Personalized skincare regimens to meet specific needs.<br/><br/>We have also added a lot of wide range makeup options and filters for our users to experiment also our app will come up with many recommendations for similar products so that they can make the right decisions before they make the purchase. We also added virtual make-up cam so that they can have instant virtual makeovers within a minute.</p>
            </div>
        </div>
    )
}