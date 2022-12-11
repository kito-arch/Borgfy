
import Image from 'next/image'
import styles from './section4.module.css'
import {scroll} from '../../../conts_vars'

export default function Section4(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', left: '0rem', top: '-20px'}}>
                <Image priority  src = '/../public/case_objective_hand.png' width = '180px' height = '263px' />
            </div>

            <div data-aos-offset = {-scroll*800} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.headingContainer}`}>
                <div style = {{position: 'absolute', left: '-20px', top: '0'}}>
                    <Image priority  src = '/../public/gray_ellipse.png' width = '61px' height = '61px'/>
                </div>
                <p className = {`${styles.heading}`}>Objective</p>
            </div>
            <p data-aos-offset = {-scroll*800} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.text}`}>{props?.useCase?.objective}</p>
        </div>
    )
}