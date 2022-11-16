import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section5.module.css'

export default function Section5(props){
    return(
        <div className = {`${styles.container}`}>


            <div style = {{position: 'absolute', top: '800px', left: '-12rem'}}>
                <Image src = './landing2_sec5_back5.png' width = '120px' height = '170px' />
            </div>

            <div style = {{position: 'absolute', top: '100px', right: '-12rem'}}>
                <Image src = './landing2_sec5_back6.png' width = '130px' height = '170px' />
            </div>

            <p data-aos-offset = {scroll-1200} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.subheading}`}>Where</p>
            <p data-aos-offset = {scroll-1200} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.heading}`}>We are best</p>

            <div className = {`${styles.startBetween}`}>
                <div data-aos-offset = {scroll-1200} data-aos = 'fade-up' data-aos-duration = '1000' >
                    <p className = {`${styles.subtext}`}>App Development</p>
                    <div className = {`${styles.box}`}>
                        <div>
                            <Image src = './landing2_sec5_image1.png' width = '261px' height = '261px' />
                        </div>
                        <p className = {`${styles.boxText}`}>We Are Dedicated Engineers Minds Devoted to Innovation, Bringing Sustainable</p>
                        <p className = {`${styles.button}`}>Read More</p>
                    </div>
                </div>

                <div data-aos-offset = {scroll-1200} data-aos = 'fade-up' data-aos-duration = '1000' >
                    <p className = {`${styles.subtext}`}>AI Automation</p>
                    <div style = {{marginTop: '200px'}} className = {`${styles.box}`}>
                        <div>
                            <Image src = './landing2_sec5_image2.png' width = '261px' height = '261px' />
                        </div>
                        <p className = {`${styles.boxText}`}>We Are Dedicated Engineers Minds Devoted to Innovation, Bringing Sustainable</p>
                        <p className = {`${styles.button}`}>Read More</p>
                    </div>
                </div>

                <div data-aos-offset = {scroll-1200} data-aos = 'fade-up' data-aos-duration = '1000' >
                    <p className = {`${styles.subtext}`}>UI/UX Design</p>
                    <div className = {`${styles.box}`}>
                        <div style = {{paddingTop: '26px'}}>
                            <Image src = './landing2_sec5_image3.png' width = '261px' height = '261px' />
                        </div>
                        <p className = {`${styles.boxText}`}>We Are Dedicated Engineers Minds Devoted to Innovation, Bringing Sustainable</p>
                        <p className = {`${styles.button}`}>Read More</p>
                    </div>
                </div>

                <div data-aos-offset = {scroll-1200} data-aos = 'fade-up' data-aos-duration = '1000' >
                    <p className = {`${styles.subtext}`}>Full Stack Development</p>
                    <div style = {{marginTop: '200px'}} className = {`${styles.box}`}>
                        <div style = {{paddingTop: '31px'}}>
                            <Image src = './landing2_sec5_image4.png' width = '261px' height = '261px' />
                        </div>
                        <p className = {`${styles.boxText}`}>We Are Dedicated Engineers Minds Devoted to Innovation, Bringing Sustainable</p>
                        <p className = {`${styles.button}`}>Read More</p>
                    </div>
                </div>
            </div>
        </div>
    )
}