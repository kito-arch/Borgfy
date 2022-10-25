
import Image from 'next/image'
import styles from './section1.module.css'

export default function Section1(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>We deliver human-centric product designs<br/>that make an everlasting impression</p>
        </div>
    )
}