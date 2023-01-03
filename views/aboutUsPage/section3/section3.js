
import Image from 'next/image'
import { myscroll, mobscroll } from '../../../conts_vars'
import styles from './section3.module.css'

export default function Section3(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {-500*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.title}`}>What our misson....</p>
            <p data-aos-offset = {-500*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.text}`}>Our mission is to building scalable and sustainable start-up ideas within our venture studio that can help societies thrive with employment and innovation.<br/><br/>Borgfy Evolved from being a software agency with years of expertise and knowledge of bleeding-edge technologies, we serve the corporate and startup world with top-tech services like Artificial Intelligence, App and Saas Product Development/ Design, Custom IoT applications, and many more. We enable innovation to sustain the growth of our Entrepreneur and corporate clients by helping them build their dream projects.</p>
            <div className={styles.imCon} style = {{position: 'absolute', top: '92px', right: '0'}}>
                <Image priority  src = './about_sec3_image1.png' width = '588px' height = '588px' />
            </div>
        </div>
    )
}