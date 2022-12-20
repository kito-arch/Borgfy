
import Image from 'next/image'
import { myscroll, mobscroll } from '../../../../conts_vars'
import styles from './section1.module.css'

export default function Section1(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*300} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>We deliver human-centric product designs<br/>that make an everlasting impression</p>
        </div>
    )
}