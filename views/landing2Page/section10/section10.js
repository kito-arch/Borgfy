import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section10.module.css'

export default function Section10(props){
    return(
        
            <div className = {`${styles.container}`}>

                <Image src = '/../public/landing2_sec10_back.png' layout = 'fill'/>

                <div data-aos-offset = {scroll-3200} data-aos = 'fade-left' data-aos-duration = '1000' className = {`${styles.innerContainer}`}>
                    <Image src = '/../public/landing2_sec10_bulb.png' width = '30px' height = '46px' />
                    <p className = {`${styles.subtext}`}>HAVE AN IDEA</p>
                    <p className = {`${styles.heading}`}>Startup business consultant ideas helpful services</p>

                    <div className = {`${styles.centerStart}`}>
                        <Image src = '/../public/landing2_sec10_tick.png' width = '32px' height = '32px' />
                        <p className = {`${styles.tickText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>

                    <div className = {`${styles.centerStart}`}>
                        <Image src = '/../public/landing2_sec10_tick.png' width = '32px' height = '32px' />
                        <p className = {`${styles.tickText}`}>Lorem ipsum dolor sit amet, </p>
                    </div>

                    <div className = {`${styles.centerStart}`}>
                        <Image src = '/../public/landing2_sec10_tick.png' width = '32px' height = '32px' />
                        <p className = {`${styles.tickText}`}>Lorem ipsum dolor sit amet consectetur</p>
                    </div>

                    <div className = {`${styles.centerStart}`}>
                        <Image src = '/../public/landing2_sec10_tick.png' width = '32px' height = '32px' />
                        <p className = {`${styles.tickText}`}>Lorem ipsum dolor sit </p>
                    </div>

                    <p className = {`${styles.consult}`}>Consult now</p>
                </div>

            </div>
    )
}