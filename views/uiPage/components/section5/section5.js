import Image from 'next/image'
import Link from 'next/link'
import { myscroll, mobscroll } from '../../../../conts_vars'
import styles from './section5.module.css'

export default function Section5(props){
    return(
        <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*800} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>Why Choose Us?</p>
            <div className = {`${styles.textContainer}`}>
                <p style = {{width: '47.75rem'}} className = {`${styles.text}`}>We leave no stone unturned to make your website interactive and user-friendly. With designs that appeal to the best of critiques, you are sure to line up customers and slay your business goals!</p>
                <div className = 'hide_in_mobile' style = {{marginTop: '-150px'}}>
                    <Image priority  src = './soch.png' width = '215.6px' height = '280px' />
                </div>
            </div>
            <div className = {`${styles.center}`}>
                <Link href = 'contact'>
                    <div className = {`${styles.buttonContainer}`}>
                        <p className = {`${styles.button}`}>Let’s Build it</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}