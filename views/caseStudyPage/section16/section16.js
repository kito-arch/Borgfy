
import { myscroll, mobscroll } from '../../../conts_vars'
import styles from './section16.module.css'

export default function Section16(props){
    return(
        <div className = {`${styles.container}`}>
            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*4800} data-aos = 'fade-up' data-aos-duration = '3000'>
                <p className = {`${styles.heading}`}>“BORGFY IS A BEST AGENCY I’VE EVER WORK WITH. PASSIONATE & TRUSTED AGENCY. “</p>
                <p className = {`${styles.text}`}>Mike Johnson, CEO@ABC Company</p>
            </div>
        </div>
    )
}