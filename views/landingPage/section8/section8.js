
import Image from 'next/image'
import styles from './section8.module.css'

export default function Section8(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', bottom: '70px', right: '20%'}}>
                <Image src = '/../public/landing_sec8_arrow.png' width = '70px' height = '40px' />
            </div>

            <div className = {`${styles.centerStart}`}>
                <p className = {`${styles.heading}`}>Transform Your Amazing App Idea Into A Clickable Reality</p>
                <p className = {`${styles.button}`}>Let's Build It</p>
            </div>
        </div>  
    )
}