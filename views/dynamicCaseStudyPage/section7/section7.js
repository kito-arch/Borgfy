
import Image from 'next/image'
import { scroll } from '../../../conts_vars'
import styles from './section7.module.css'

export default function Section7(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', bottom: '100px', left: '0'}}>
                <Image src = '../case_sec8_image.png' width = '257px' height = '257px' />
            </div>

            <div data-aos-offset = {-scroll*1400} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.startBetween}`}>
                <div className = {`${styles.headingContainer}`}>
                    <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                        <Image src = '../gray_ellipse.png' width = '61px' height = '61px'/>
                    </div>
                    <p className = {`${styles.heading}`}>Our Solution</p>
                </div>
                <p className = {`${styles.text}`}>{props?.useCase?.solution}</p>
            </div>
        </div>
    )
}