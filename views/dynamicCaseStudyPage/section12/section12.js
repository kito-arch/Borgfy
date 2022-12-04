
import Image from 'next/image'
import { scroll } from '../../../conts_vars'
import styles from './section12.module.css'

export default function Section12(props){
    return(
        <div className = {`${styles.container}`}>


            <div style = {{zIndex: '10', position: 'absolute', left: '0rem', top: '800px'}}>
                <Image src = '../case_left_hand.png' width = '158px' height = '185px' />
            </div>

            <div data-aos-offset = {-scroll*3800} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.headingContainer}`}>
                <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                    <Image src = '../gray_ellipse.png' width = '61px' height = '61px'/>
                </div>
                <p className = {`${styles.heading}`}>Visual Output</p>
            </div>
            <div className = {`${styles.startBetween}`}>
                <p data-aos-offset = {-scroll*3800} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.text}`}>{props?.useCase?.visual_text}</p>
                {props?.useCase?.visual_image &&
                    <Image src = {`http://localhost:3000/uploads/${props?.useCase?.visual_image}`} width = '799px' height = '455px' />
                }
            </div>
        </div>
    )
}