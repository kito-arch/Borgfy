
import Image from 'next/image'
import { scroll } from '../../../../conts_vars'
import styles from './section1.module.css'

export default function Section1(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.heading}`}>Why does Full Stack Development Matter?</p>
            <p data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.text}`}>Creating a product using full-stack development helps in providing a comprehensive approach towards product development.it helps you deliver your idea at a one place<br/>It also allows in making sure that the end product is highly efficient at the user end. Also, it helps in providing a better management approach towards the backend system processes.</p>

            <div className='hide_in_mobile' style = {{position: 'absolute', top: '50px', right: '98px'}}>
                <Image priority  src = './full_stack_1.png' width = '526px' height = '526px' />
            </div>


        </div>
    )
}