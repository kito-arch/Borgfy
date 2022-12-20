
import Image from 'next/image'
import { myscroll, mobscroll } from '../../../conts_vars'
import styles from './section9.module.css'

export default function Section9(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{zIndex: '10', position: 'absolute', right: '0rem', top: '0px'}}>
                <Image priority  src = './case_sketching_gray.png' width = '1227px' height = '1227px' />
            </div>

            <div className = {`${styles.startBetween}`}>
                <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2800} data-aos = 'fade-right' data-aos-duration = '3000'>
                    <div className = {`${styles.headingContainer}`}>
                        <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                            <Image priority  src = './gray_ellipse.png' width = '61px' height = '61px'/>
                        </div>
                        <p className = {`${styles.heading}`}>Sketching</p>
                    </div>
                    <p className = {`${styles.text}`}>{props?.useCase?.sketching_text}</p>
                </div>
                {props?.useCase?.sketching_image &&
                    <Image priority  src = {`https://admin.borgfy.com/uploads/${props?.useCase?.sketching_image}`} width = '900px' height = '655px' />
                }
            </div>
        </div>
    )
}