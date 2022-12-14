
import Image from 'next/image'
import { myscroll, mobscroll } from '../../../conts_vars'
import styles from './section1.module.css'

export default function Section1(props){
    return(
        <div className = {`${styles.container}`}>

            <div className = 'hide_in_mobile' style = {{position: 'absolute', top: '-50px', right: '-100px'}}>
                <Image priority  src = './brain_sec1_back.png' width = '900px' height = '900px' />
            </div>

            <p data-aos-offset = {-300*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.dimHeading}`}>Idea to Launch Journey In A Strategic Manner</p>
            <p data-aos-offset = {-300*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.heading}`}>01. Brain Storming</p>
            <p data-aos-offset = {-300*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.text}`}>It always starts from the spark in the brain, which leads to a marvelous innovation from imagination to conceptualization. To make it successful and scalable in the hands of customers, we follow certain contextual key parameters.</p>
        </div>
    )
}