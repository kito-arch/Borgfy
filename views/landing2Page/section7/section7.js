import { myscroll, mobscroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section7.module.css'

export default function Section7(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {styles.rr} style = {{position: 'absolute', top: '0', right: '-12rem', width: '886px', height: '734px', backgroundColor: 'white'}}>
                {/* <Image priority  src = './landing2_sec7_image1.png' width = '886px' height = '734px'/> */}
                <div className = {styles.one} data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2650} data-aos = 'fade-right' data-aos-duration = '3000' style = {{position: 'absolute', bottom: '80px'}}>
                    <Image priority src = './ai_1.png' width = '518px' height = '369px' />
                </div>
                <div className = {styles.two} data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2650} data-aos = 'fade-left' data-aos-duration = '3000' style = {{position: 'absolute', right: '0'}}>
                    <Image priority src = './ai_2.png' width = '414px' height = '380px' />
                </div>
                <div className = {styles.three} data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2650} data-aos = 'fade-up' data-aos-duration = '3000' style = {{position: 'absolute'}}>
                    <Image priority src = './ai_3.png' width = '391px' height = '334px' />
                </div>
                <div className = {styles.four} data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2650} data-aos = 'fade-down' data-aos-duration = '3000' style = {{position: 'absolute', bottom : '46px', right: '0'}}>
                    <Image priority src = './ai_4.png' width = '372px' height = '364px' />
                </div>
            </div>
            <div className = {`${styles.rocket} hide_in_mobile`} style = {{position: 'absolute', top: '70px', left: '450px'}}>
                <Image priority  src = './moon_rocket.png' width = '212px' height = '212px'/>
            </div>
            <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2650} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.subtext}`}>STARTUP TO THE MOON</p>
            <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2650} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.text}`}>AI is not just a new technology! It is a phenomenon that teaches us how to build a scalable brand that has great product-market fit.</p>
        </div>
    )
}