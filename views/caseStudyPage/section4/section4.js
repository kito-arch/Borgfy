
import Image from 'next/image'
import styles from './section4.module.css'
import {scroll} from '../../../conts_vars'

export default function Section4(props){
    return(
        <div className = {`${styles.container}`}>

            <div className='hide_in_mobile' style = {{position: 'absolute', left: '0rem', top: '-20px'}}>
                <Image priority  src = './case_objective_hand.png' width = '180px' height = '263px' />
            </div>

            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*800} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.headingContainer}`}>
                <div style = {{position: 'absolute', left: '-20px', top: '0'}}>
                    <Image priority  src = './gray_ellipse.png' width = '61px' height = '61px'/>
                </div>
                <p className = {`${styles.heading}`}>Objective</p>
            </div>
            <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*800} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.text}`}>Our objective was to create a funnel that would make a smooth journey for our users, from analyzing skin to purchasing the required products. Our users will be able to compare all the suggestions and select what's best for them. </p>
        </div>
    )
}