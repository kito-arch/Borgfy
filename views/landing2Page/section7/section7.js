import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section7.module.css'

export default function Section7(props){
    return(
        <div className = {`${styles.container}`}>
            <div style = {{position: 'absolute', top: '0', right: '-12rem'}}>
                <Image src = './landing2_sec7_image1.png' width = '886px' height = '734px'/>
            </div>
            <p data-aos-offset = {-scroll*2600} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.subtext}`}>Startup to the Mooon</p>
            <p data-aos-offset = {-scroll*2600} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.text}`}>AI is not just a new technology! It is a phenomenon that teaches us how to build a scalable brand that has great product-market fit.</p>
        </div>
    )
}