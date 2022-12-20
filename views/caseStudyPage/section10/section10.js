
import Image from 'next/image'
import { myscroll, mobscroll } from '../../../conts_vars'
import styles from './section10.module.css'

export default function Section10(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.startBetween}`}>
                <Image priority  src = './case_sec10_image.png' width = '900px' height = '655px' />
                <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*3000} data-aos = 'fade-left' data-aos-duration = '3000'>
                    <div className = {`${styles.headingContainer}`}>
                        <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                            <Image priority  src = './gray_ellipse.png' width = '61px' height = '61px'/>
                        </div>
                        <p className = {`${styles.heading}`}>Wireframe</p>
                    </div>
                    <p className = {`${styles.text}`}>After conducting the user research, we planned a layout keeping information hierarchy in mind and then sketched the outline visual and details of the main features and the big presentation.</p>
                </div>
            </div>
        </div>
    )
}