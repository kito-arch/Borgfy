
import styles from './section3.module.css'

export default function Section3(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = "-300" data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.smallHeading}`}>Our Approach</p>
            <p data-aos-offset = "-300" data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.largeHeading}`}>We Build Eye Catching UI/UX Design</p>
            
        </div>
    )
}