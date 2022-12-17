
import Image from 'next/image'
import { scroll } from '../../../conts_vars'
import styles from './section6.module.css'

export default function Section6(props){
    return(
        <div className = {`${styles.container}`}>
            <div data-aos-offset = {-scroll*1000} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.headingContainer}`}>
                <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                    <Image priority  src = './gray_ellipse.png' width = '61px' height = '61px'/>
                </div>
                <p className = {`${styles.heading}`}>Challenges</p>
            </div>


            <div className = {`${styles.startBetween}`}>
                {props?.useCase?.challenge1_image &&
                    <Image priority  src = {`https://admin.borgfy.com/uploads/${props?.useCase?.challenge1_image}`} width = '803px' height = '557px' />
                }
                <p data-aos-offset = {-scroll*1200} data-aos = 'fade-left' data-aos-duration = '3000'  className = {`${styles.text}`}>{props?.useCase?.challenge1_text}</p>
            </div>

            <div className = {`${styles.startBetween}`}>
                <p data-aos-offset = {-scroll*1200} data-aos = 'fade-right' data-aos-duration = '3000'  className = {`${styles.text}`}>{props?.useCase?.challenge2_text}</p>
                {props?.useCase?.challenge2_image &&
                    <Image priority  src = {`https://admin.borgfy.com/uploads/${props?.useCase?.challenge2_image}`} width = '696px' height = '671px' />
                }
            </div>


        </div> 
    )
}