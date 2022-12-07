import { scroll } from '../../../../conts_vars'
import styles from './section3.module.css'

export default function Section3(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {-scroll*300} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.smallHeading}`}>Our Approach</p>
            <p data-aos-offset = {-scroll*300} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.largeHeading}`}>We Build Eye Catching UI/UX Design</p>
            
        </div>
    )
}