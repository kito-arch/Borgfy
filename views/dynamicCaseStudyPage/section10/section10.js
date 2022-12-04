
import Image from 'next/image'
import { scroll } from '../../../conts_vars'
import styles from './section10.module.css'

export default function Section10(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.startBetween}`}>
                {props?.useCase?.wireframe_image &&
                    <Image src = {`http://localhost:3000/uploads/${props?.useCase?.wireframe_image}`} width = '900px' height = '655px' />
                }
                <div data-aos-offset = {-scroll*3000} data-aos = 'fade-left' data-aos-duration = '1000'>
                    <div className = {`${styles.headingContainer}`}>
                        <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                            <Image src = '../gray_ellipse.png' width = '61px' height = '61px'/>
                        </div>
                        <p className = {`${styles.heading}`}>Wireframe</p>
                    </div>
                    <p className = {`${styles.text}`}>{props?.useCase?.wireframe_text}</p>
                </div>
            </div>
        </div>
    )
}