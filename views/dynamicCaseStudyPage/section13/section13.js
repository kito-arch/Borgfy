
import Image from 'next/image'
import { scroll } from '../../../conts_vars'
import styles from './section13.module.css'

export default function Section13(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{zIndex: '10', position: 'absolute', right: '0rem', top: '-1500px'}}>
                <Image priority  src = '/../public/case_conclusion_gray.png' width = '1227px' height = '4027px' />
            </div>

            <div data-aos-offset = {-scroll*4200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.headingContainer}`}>
                <div style = {{position: 'absolute', left: '-20px', top: '0'}}>
                    <Image priority  src = '/../public/gray_ellipse.png' width = '61px' height = '61px'/>
                </div>
                <p className = {`${styles.heading}`}>Conclusion</p>
                <div className = {`${styles.rocket} hide_in_mobile`} style = {{position: 'absolute', right: '-300px', top: '-50px'}}>
                    <Image priority  src = '/../public/case_sec13_icon.png' width = '342px' height = '134px'/>
                </div>
            </div>
            <p data-aos-offset = {-scroll*4200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.text}`}>{props?.useCase?.brainstorm_text}</p>
        </div>
    )
}