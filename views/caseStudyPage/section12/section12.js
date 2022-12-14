
import Image from 'next/image'
import { myscroll, mobscroll } from '../../../conts_vars'
import styles from './section12.module.css'

export default function Section12(props){
    return(
        <div className = {`${styles.container}`}>


            <div className='hide_in_mobile' style = {{zIndex: '10', position: 'absolute', left: '0rem', top: '800px'}}>
                <Image priority  src = './case_left_hand.png' width = '158px' height = '185px' />
            </div>

            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*3800} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.headingContainer}`}>
                <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                    <Image priority  src = './gray_ellipse.png' width = '61px' height = '61px'/>
                </div>
                <p className = {`${styles.heading}`}>Visual Output</p>
            </div>
            <div className = {`${styles.startBetween}`}>
                <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*3800} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.text}`}>We had to ensure that the interface's components are simple to access, comprehend, and employ in order to facilitate these actions. Therefore, we integrated interaction design, visual design, and information architecture concepts. This includes buttons, text fields, check boxes, radio buttons, drop down lists, list boxes, toggles, and date fields. </p>
                <Image priority  src = './case_sec12_image.png' width = '799px' height = '455px' />
            </div>
        </div>
    )
}