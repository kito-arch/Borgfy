
import Image from 'next/image'
import { scroll } from '../../../../conts_vars'
import styles from './section1.module.css'

export default function Section1(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {-scroll*300} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.heading}`}>We deliver human-centric product designs<br/>that make an everlasting impression</p>
        </div>
    )
}