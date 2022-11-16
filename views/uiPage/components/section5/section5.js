import { scroll } from '../../../../conts_vars'
import styles from './section5.module.css'

export default function Section5(props){
    return(
        <div data-aos-offset = {-scroll*800} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>Why Choose Us?</p>
            <div className = {`${styles.textContainer}`}>
                <p style = {{width: '47.75rem'}} className = {`${styles.text}`}>We leave no stone unturned to make your website interactive and user-friendly. With designs that appeal to the best of critiques, you are sure to line up customers and slay your business goals!</p>
                <p className = {`${styles.text}`}>why choose us 3d vectore</p>
            </div>
            <div className = {`${styles.center}`}>
                <div className = {`${styles.buttonContainer}`}>
                    <p className = {`${styles.button}`}>Let’s Build it</p>
                </div>
            </div>
        </div>
    )
}