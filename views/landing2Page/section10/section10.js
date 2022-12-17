import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section10.module.css'

export default function Section10(props){
    return(
        
            <div className = {`${styles.container}`}>

                <Image className = 'hide_in_mobile' priority  src = './landing2_sec10_back.png' layout = 'fill'/>

                <div data-aos-offset = {-scroll*3200} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.innerContainer}`}>
                    
                    <Image priority  src = './landing2_sec10_bulb.png' width = '30px' height = '46px' />
                    <p className = {`${styles.subtext}`}>Already have a startup idea?</p>
                    <p className = {`${styles.heading}`}>Let's setup a FREE consultation call</p>
                    <p className = {`${styles.subtext}`}>to answer questions like...</p>

                    <div className = {`${styles.centerStart}`}>
                        <Image priority  src = './landing2_sec10_tick.png' width = '32px' height = '32px' />
                        <p className = {`${styles.tickText}`}>Is my startup idea good enough?</p>
                    </div>

                    <div className = {`${styles.centerStart}`}>
                        <Image priority  src = './landing2_sec10_tick.png' width = '32px' height = '32px' />
                        <p className = {`${styles.tickText}`}>What do I need to execute my idea?</p>
                    </div>

                    <div className = {`${styles.centerStart}`}>
                        <Image priority  src = './landing2_sec10_tick.png' width = '32px' height = '32px' />
                        <p className = {`${styles.tickText}`}>What would be my ideal MVP?</p>
                    </div>

                    <div className = {`${styles.centerStart}`}>
                        <Image priority  src = './landing2_sec10_tick.png' width = '32px' height = '32px' />
                        <p className = {`${styles.tickText}`}>How can I build a GTM strategy?</p>
                    </div>
                    <a href = "https://calendly.com/abdulceo/30min" target = 'blank'>
                        <p className = {`${styles.consult}`}>Consult now</p>
                    </a>
                </div>

            </div>
    )
}