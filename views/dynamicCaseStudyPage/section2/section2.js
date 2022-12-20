
import Image from 'next/image'
import { myscroll, mobscroll } from '../../../conts_vars'
import styles from './section2.module.css'

export default function Section2(props){
    return(
        <div className = {`${styles.container}`}>

            <div className='hide_in_mobile' style = {{zIndex: '100', position: 'absolute', left: '-12rem', top: '600px'}}>
                <Image priority  src = './case_left_lines.png' width = '300px' height = '700px' />
            </div>

            <div className = {`${styles.centerCenter}`}>
                <div className = {`${styles.stretchStart}`}>
                    <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*300} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.column}`}>
                        <div>
                            <p className = {`${styles.heading}`}>Our Contribution</p>
                            <p className = {`${styles.text}`}>{props?.useCase?.contribution_text}</p>
                        </div>
                        <div>
                            <p className = {`${styles.heading}`}>Timeline</p>
                            <p className = {`${styles.text}`}>{props?.useCase?.timeline}</p>
                        </div>
                        <div>
                            <p className = {`${styles.heading}`}>Interested</p>
                        </div>
                    </div>
                    {props?.useCase?.contribution_image &&
                        <Image priority  src = {`https://admin.borgfy.com/uploads/${props?.useCase?.contribution_image}`} width = '566px' height = '349px'/>
                    }
                </div>
            </div>
        </div>
    )
}