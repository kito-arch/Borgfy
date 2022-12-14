import { myscroll, mobscroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section1.module.css'

export default function Section1(props){
    return(
        <div className = {`${styles.container}`}>

            <div className = 'hide_in_mobile' style = {{position: 'absolute', top: '0px', right: '-12rem'}}>
                <Image priority  src = './landing_sec1_back.png' width = '1410px' height = '750px' />
            </div>


            <div className = 'hide_in_mobile' style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '600px'}}>
                <Image priority  src = './landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div className = 'hide_in_mobile' style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '680px'}}>
                <Image priority  src = './landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div className = 'hide_in_mobile' style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '760px'}}>
                <Image priority  src = './landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div className = 'hide_in_mobile' style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '840px'}}>
                <Image priority  src = './landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div className = 'hide_in_mobile' style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '920px'}}>
                <Image priority  src = './landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div className = 'hide_in_mobile' style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '1000px'}}>
                <Image priority  src = './landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div className = 'hide_in_mobile' style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '1080px'}}>
                <Image priority  src = './landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div className = 'hide_in_mobile' style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '1160px'}}>
                <Image priority  src = './landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div className = 'hide_in_mobile' style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '1240px'}}>
                <Image priority  src = './landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div className = 'hide_in_mobile' style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '1320px'}}>
                <Image priority  src = './landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            
            <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*300} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>Why The Businesses Needs An Apps ?</p>
            <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*300} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.text}`}>The answer is simple and short: businesses are transforming within digital transformation and people are focusing more on scalability and mobility of business using mobile apps to reach more audience in less time.</p>
        </div>      
    )
}