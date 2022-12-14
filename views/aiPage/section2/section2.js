
import Image from 'next/image'
import { myscroll, mobscroll } from '../../../conts_vars'
import styles from './section2.module.css'

export default function Section2(props){
    return(
        <div className = {`${styles.container}`}>
            
            <div style = {{position: 'absolute', left: '850px', top: '-10px'}}>
                <Image priority  src = './ai_sec2_top.png' width = '215px' height = '215px' />
            </div>

            <div style = {{position: 'absolute', right: '-100px', top: '350px'}}>
                <Image priority  src = './ai_sec2_bottom_right.png' width = '215px' height = '215px' />
            </div>

            <div style = {{position: 'absolute', left: '28px', top: '260px'}}>
                <Image priority  src = './ai_sec2_bottom_left.png' width = '116px' height = '116px' />
            </div>

            <div className = {`${styles.innerContainer}`}>
                <p  data-aos-offset = {-300*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>Machine Learning is Another name of AI Today</p>
                <p  data-aos-offset = {-300*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.text}`}>It is a modern way for machines to adapt and learn from their surroundings using the fundamentals of artificial intelligence. It allows the machines to predict better and more accurate outcomes for any given instance because they are specifically built to do this job.it usually a processing of training data to machine , so in layman ML it totally depends on training and reiterating process. </p>
            </div>

        </div>
    )
}