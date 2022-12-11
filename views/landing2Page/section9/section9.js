import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section9.module.css'
import Link from 'next/link'

export default function Section9(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {-scroll*3200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>Check In Depth - How we solved it</p>
            <p data-aos-offset = {-scroll*3200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.subtext}`}>Case Studies</p>


            <div className = {`${styles.centerCenter}`}>
                <div className = {`${styles.stretchBetween}`}>

                    <div data-aos-offset = {-scroll*3200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <p className = {`${styles.boxHeading}`}>Our Visions Crafted Into Startups</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum doler sit</p>
                        <div style = {{position: 'absolute', bottom: '5px', left: '5px'}}>
                            <Image priority  src = '/../public/landing2_sec9_imageg1.png' width = '550px' height = '456px'/>
                        </div>
                    </div>

                    <div data-aos-offset = {-scroll*3200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <p className = {`${styles.boxHeading}`}>Our Visions Crafted Into Startups</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum doler sit</p>
                        <div style = {{position: 'absolute', bottom: '5px', left: '5px'}}>
                            <Image priority  src = '/../public/landing2_sec9_imageg1.png' width = '550px' height = '456px'/>
                        </div>
                    </div>

                    <div data-aos-offset = {-scroll*3200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <p className = {`${styles.boxHeading}`}>Our Visions Crafted Into Startups</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum doler sit</p>
                        <div style = {{position: 'absolute', bottom: '5px', left: '5px'}}>
                            <Image priority  src = '/../public/landing2_sec9_imageg1.png' width = '550px' height = '456px'/>
                        </div>
                    </div>

                </div>
            </div>
            <Link href = 'case2'>
                <p className = {`${styles.readmore}`}>Read More</p>
            </Link>

        </div>
    )
}
