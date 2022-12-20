
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
                <p className = {`${styles.text}`}>{props?.useCase?.problem_text}</p>
            </div>
            {props?.useCase?.problem_image && 
                <Image priority  src = {`https://admin.borgfy.com/uploads/${props?.useCase?.problem_image}`} width = '646px' height = '530px'/>
            }
        </div>
    )
}