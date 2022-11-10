
import Image from 'next/image'
import styles from './footerBottom.module.css'

export default function FooterBottom(props){
    return(
        <div className = {`${styles.container} ${styles.startBetween}`}>
            <div className = {`${styles.column}`}>
                <p className = {`${styles.heading}`}>Address</p>
                <p className = {`${styles.text}`}>B-78, Near Saket Metro Station, Gate no, 2, New Delhi, 110030, India</p>
                <p className = {`${styles.text}`}>+91 813 093 7887</p>
                <p className = {`${styles.text}`}>1216, Broadway, 2nd floor New York Down, NY, 10001, USA</p>
                <p className = {`${styles.text}`}>+1 646 338 6179</p>
            </div>
            <div className = {`${styles.column}`}>
                <p className = {`${styles.heading}`}>Services</p>
                <p className = {`${styles.text}`}>Software Development</p>
                <p className = {`${styles.text}`}>Hardware Development</p>
                <p className = {`${styles.text}`}>AI</p>
                <p className = {`${styles.text}`}>Design</p>
            </div>
            <div className = {`${styles.column}`}>
                <p className = {`${styles.heading}`}>Expertise</p>
                <p className = {`${styles.text}`}>IOS / Android Development</p>
                <p className = {`${styles.text}`}>Embedded System Design</p>
                <p className = {`${styles.text}`}>Internet of Things</p>
                <p className = {`${styles.text}`}>Chatboot / Machine learning</p>
                <p className = {`${styles.text}`}>Web design & Web</p>
                <p className = {`${styles.text}`}>Development</p>

            </div>
            <div className = {`${styles.column}`}>
                <p className = {`${styles.heading}`}>Technologies</p>
                <p className = {`${styles.text}`}>React Framework</p>
                <p className = {`${styles.text}`}>Angular</p>
                <p className = {`${styles.text}`}>Node JS</p>
                <p className = {`${styles.text}`}>Java</p>
                <p className = {`${styles.text}`}>Python</p>
                <p className = {`${styles.text}`}>Altium PCB Design</p>
            </div>
            <div className = {`${styles.column}`}>
                <p className = {`${styles.heading}`}>Industries</p>
                <p className = {`${styles.text}`}>Healthtech</p>
                <p className = {`${styles.text}`}>Media & Entertainment</p>
                <p className = {`${styles.text}`}>Real Estate</p>
                <p className = {`${styles.text}`}>Internet</p>
            </div>
        </div>
    )
}
