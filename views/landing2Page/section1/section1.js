import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section1.module.css'

export default function Section1(props){
    return(
        <div className = {`${styles.container}`}>
            <div style = {{zIndex: '1', position: 'absolute', top: '0', right: '0'}}>
                <Image src = './landing2_sec1_back.png' width = '1266px' height = '810px' />
            </div>
            <p data-aos-offset = {scroll-300} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.text}`}>WE DESIGN APPS.</p>
            <p data-aos-offset = {scroll-300} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.heading}`}>Building digital products, brands, and experiences</p>
        </div>
    )
}