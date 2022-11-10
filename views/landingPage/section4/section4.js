
import Image from 'next/image'
import styles from './section4.module.css'

export default function Section4(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.innerContainer}`}>
                <p className = {`${styles.heading}`}>Industries We Serve</p>
                <p className = {`${styles.text}`}>We Had Great Experience Building</p>

                <Image src = '/../public/landing_sec4_text.png' width = '700px' height = '40px'/>
            </div>
        </div>
    )
}