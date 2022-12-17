import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section8.module.css'

export default function Section8(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {-scroll*2800} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>Our Visions Crafted Into Startups</p>
            <p data-aos-offset = {-scroll*3000} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.subheading}`}>The Venture's Build</p>

            <div className = {`${styles.centerCenter}`}>
                <div className = {`${styles.stretchBetween}`}>

                    <div data-aos-offset = {-scroll*3000} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                            <Image priority  src = './startup1.png' width = '150px' height = '150px' />
                        </div>

                        <p className = {`${styles.boxHeading}`}>Preneur Bay</p>
                        <p className = {`${styles.boxText}`}>Preneurbay is a live and work spaces community leveraging business travel among entrepreneurs,digital nomads ,Investors and Working Professionals</p>
                        <p className = {`${styles.view}`}>View More</p>
                    </div>

                    {/* <div data-aos-offset = {-scroll*3000} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <Image priority  src = './landing2_sec8_google.png' width = '400px' height = '48px' />

                        <p className = {`${styles.boxHeading}`}>Title Heading</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <p className = {`${styles.view}`}>View More</p>
                    </div>

                    <div data-aos-offset = {-scroll*3000} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <Image priority  src = './landing2_sec8_google.png' width = '400px' height = '48px' />

                        <p className = {`${styles.boxHeading}`}>Title Heading</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <p className = {`${styles.view}`}>View More</p>
                    </div> */}

                </div>
            </div>
        </div>
    )
}
