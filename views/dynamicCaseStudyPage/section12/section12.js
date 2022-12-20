
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
                <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*3800} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.text}`}>{props?.useCase?.visual_text}</p>
                {props?.useCase?.visual_image &&
                    <Image priority  src = {`https://admin.borgfy.com/uploads/${props?.useCase?.visual_image}`} width = '799px' height = '455px' />
                }
            </div>
        </div>
    )
}