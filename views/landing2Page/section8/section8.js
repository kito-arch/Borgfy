
import Image from 'next/image'
import styles from './section8.module.css'

export default function Section8(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>Our Visions Crafted Into Startups</p>
            <p className = {`${styles.subheading}`}>The Venture's Build</p>

            <div className = {`${styles.centerCenter}`}>
                <div className = {`${styles.stretchBetween}`}>

                    <div className = {`${styles.box}`}>
                        <Image src = '/../public/landing2_sec8_google.png' width = '400px' height = '48px' />

                        <p className = {`${styles.boxHeading}`}>Title Heading</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <p className = {`${styles.view}`}>View More</p>
                    </div>

                    <div className = {`${styles.box}`}>
                        <Image src = '/../public/landing2_sec8_google.png' width = '400px' height = '48px' />

                        <p className = {`${styles.boxHeading}`}>Title Heading</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <p className = {`${styles.view}`}>View More</p>
                    </div>

                    <div className = {`${styles.box}`}>
                        <Image src = '/../public/landing2_sec8_google.png' width = '400px' height = '48px' />

                        <p className = {`${styles.boxHeading}`}>Title Heading</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <p className = {`${styles.view}`}>View More</p>
                    </div>

                </div>
            </div>
        </div>
    )
}