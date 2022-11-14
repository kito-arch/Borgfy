
import Image from 'next/image'
import styles from './section9.module.css'

export default function Section9(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = "-3200" data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.heading}`}>Check In Depth - How we solved it</p>
            <p data-aos-offset = "-3200" data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.subtext}`}>Case Studies</p>


            <div className = {`${styles.centerCenter}`}>
                <div className = {`${styles.stretchBetween}`}>

                    <div data-aos-offset = "-3200" data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.box}`}>
                        <p className = {`${styles.boxHeading}`}>Our Visions Crafted Into Startups</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum doler sit</p>
                        <div style = {{position: 'absolute', bottom: '5px', left: '5px'}}>
                            <Image src = '/../public/landing2_sec9_imageg1.png' width = '550px' height = '456px'/>
                        </div>
                    </div>

                    <div data-aos-offset = "-3200" data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.box}`}>
                        <p className = {`${styles.boxHeading}`}>Our Visions Crafted Into Startups</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum doler sit</p>
                        <div style = {{position: 'absolute', bottom: '5px', left: '5px'}}>
                            <Image src = '/../public/landing2_sec9_imageg1.png' width = '550px' height = '456px'/>
                        </div>
                    </div>

                    <div data-aos-offset = "-3200" data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.box}`}>
                        <p className = {`${styles.boxHeading}`}>Our Visions Crafted Into Startups</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum doler sit</p>
                        <div style = {{position: 'absolute', bottom: '5px', left: '5px'}}>
                            <Image src = '/../public/landing2_sec9_imageg1.png' width = '550px' height = '456px'/>
                        </div>
                    </div>

                </div>
            </div>

            <p className = {`${styles.readmore}`}>Read More</p>

        </div>
    )
}
