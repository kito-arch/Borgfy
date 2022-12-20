
import Image from 'next/image'
import { myscroll, mobscroll } from '../../../conts_vars'
import styles from './section13.module.css'

export default function Section13(props){
    return(
        <div className = {`${styles.container}`}>

            <div  style = {{zIndex: '10', position: 'absolute', right: '0rem', top: '-1500px'}}>
                <Image priority  src = './case_conclusion_gray.png' width = '1227px' height = '4027px' />
            </div>

            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*4200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.headingContainer}`}>
                <div style = {{position: 'absolute', left: '-20px', top: '0'}}>
                    <Image priority  src = './gray_ellipse.png' width = '61px' height = '61px'/>
                </div>
                <p className = {`${styles.heading}`}>Conclusion</p>
                <div className = {`${styles.rocket} hide_in_mobile`} style = {{position: 'absolute', right: '-300px', top: '-50px'}}>
                    <Image priority  src = './case_sec13_icon.png' width = '342px' height = '134px'/>
                </div>
            </div>
            <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*4200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.text}`}>Through our collaboration with we, we made it possible for users to get all the skincare solutions they need from a single app. Also, we made improvements so that the user experience is more of a luxury than a pain point in the process.</p>
        </div>
    )
}