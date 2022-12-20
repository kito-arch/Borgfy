
import Image from 'next/image'
import { myscroll, mobscroll } from '../../../conts_vars'
import styles from './section5.module.css'

export default function Section5(props){
    return(
        <div className = {`${styles.container}`}>

            <div className='hide_in_mobile' style = {{zIndex: '10', position: 'absolute', right: '0rem', top: '500px'}}>
                <Image priority  src = './case_problem_target.png' width = '256px' height = '423px' />
            </div>

            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*900} data-aos = 'fade-right' data-aos-duration = '3000' >
                <div className = {`${styles.headingContainer}`}>
                    <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                        <Image priority  src = './gray_ellipse.png' width = '61px' height = '61px'/>
                    </div>
                    <p className = {`${styles.heading}`}>Problem</p>
                </div>
                <p className = {`${styles.text}`}>The targeted audience couldn't find a convenient way to analyze their skin and get regular updates on it. Also, they wanted a quick fix for the information gap they are facing. Users claimed they are often unaware of what type of skin care products they should use, and how they would affect their skin.</p>
            </div>
            <Image priority  src = './case_sec3_image.png' width = '646px' height = '530px'/>
        </div>
    )
}