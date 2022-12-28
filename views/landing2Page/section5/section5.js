import { myscroll, mobscroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section5.module.css'
import Link from 'next/link'

export default function Section5(props){
    return(
        <div className = {`${styles.container}`}>


            <div style = {{position: 'absolute', top: '800px', left: '-12rem'}}>
                <Image priority  src = './landing2_sec5_back5.png' width = '120px' height = '170px' />
            </div>

            <div style = {{position: 'absolute', top: '100px', right: '-12rem'}}>
                <Image priority  src = './landing2_sec5_back6.png' width = '130px' height = '170px' />
            </div>

            <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.subheading}`}>IDEAS WHERE</p>
            <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>We are best</p>

            <div className = {`${styles.startBetween}`}>
                <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1200} data-aos = 'fade-up' data-aos-duration = '3000' >
                    <p className = {`${styles.subtext}`}>App Development</p>
                    <div className = {`${styles.box}`}>
                        <div>
                            <Image priority  src = './landing2_sec5_image1.png' width = '261px' height = '261px' />
                        </div>
                        <p className = {`${styles.boxText}`}>We had great experiences in building consumer-tech app ideas to help them build scalable mobility & premium user experiences apps product for their customers</p>
                        <Link href = 'why-the-businesses-needs-an-apps'>
                            <p className = {`${styles.button}`}>Read More</p>
                        </Link>
                    </div>
                </div>

                <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1200} data-aos = 'fade-up' data-aos-duration = '3000' >
                    <p className = {`${styles.subtext}`}>AI Automation</p>
                    <div style = {{marginTop: '200px'}} className = {`${styles.box}`}>
                        <div>
                            <Image priority  src = './landing2_sec5_image2.png' width = '261px' height = '261px' />
                        </div>
                        <p className = {`${styles.boxText}`}>Artificial intelligence is the way to go and lead the world with automation helping businesses and startups lead the future with better optimization and reduced cost of operations handled by AI Algorithm</p>
                        <Link href = 'what-is-ai-about'>
                            <p className = {`${styles.button}`}>Read More</p>
                        </Link>
                    </div>
                </div>

                <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1200} data-aos = 'fade-up' data-aos-duration = '3000' >
                    <p className = {`${styles.subtext}`}>UI/UX Design</p>
                    <div className = {`${styles.box}`}>
                        <div style = {{paddingTop: '26px'}}>
                            <Image priority  src = './landing2_sec5_image3.png' width = '261px' height = '261px' />
                        </div>
                        <p className = {`${styles.boxText}`}>The world looks better when its design perfectly and we craft your ideas in best shape as possible</p>
                        <Link href = 'uiux-design'>
                            <p className = {`${styles.button}`}>Read More</p>
                        </Link>
                    </div>
                </div>

                <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1200} data-aos = 'fade-up' data-aos-duration = '3000' >
                    <p className = {`${styles.subtext}`}>Full Product Development</p>
                    <div style = {{marginTop: '200px'}} className = {`${styles.box}`}>
                        <div style = {{paddingTop: '31px'}}>
                            <Image priority  src = './landing2_sec5_image4.png' width = '261px' height = '261px' />
                        </div>
                        <p className = {`${styles.boxText}`}>We build vision from inception to launch to craft imagination into a physical dimension with our multi-talented pool of designers, developers, strategists, and creatives.</p>
                        <Link href = 'why-does-full-stack-development-matter'>
                            <p className = {`${styles.button}`}>Read More</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}