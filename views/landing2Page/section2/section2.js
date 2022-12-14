import { myscroll, mobscroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section2.module.css'

export default function Section2(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'relative'}}>
                <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*300} data-aos = 'fade-up' data-aos-duration = '3000'  className = {`${styles.subtext}`}>WHO WE ARE</p>
                <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*300} data-aos = 'fade-up' data-aos-duration = '3000'  className = {`${styles.heading}`}>WE ARE</p>

                <div className = {`${styles.centerCenter}`}>
                    <div className = {`${styles.stretchBetween}`}>
                        <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*300} data-aos = 'fade-up' data-aos-duration = '3000'  style = {{width: '340px', position: 'relative', paddingTop: '60px'}} className = {styles.nopad}>
                            <div style = {{width: 'fit-content', margin: 'auto'}}>
                                <Image priority  src = './landing2_sec2_image1.png' width = '110px' height = '110px' />
                            </div>
                            <div className = 'hide_in_mobile' style = {{position: 'absolute', top: '200px', right: '-150px'}}>
                                <Image priority  src = './landing2_sec2_arrow1.png' width = '88px' height = '42px' />
                            </div>
                            <p className = {`${styles.text}`}>Venture Builders  and Digital Transformation Experts helping startups and enterprises</p>
                        </div>
                        <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*300} data-aos = 'fade-up' data-aos-duration = '3000'  style = {{width: '340px', position: 'relative'}}>
                            <div className = {styles.cen}>
                                <Image priority  src = './landing2_sec2_image2.png' width = '110px' height = '110px' />
                            </div>
                            <p className = {`${styles.text}`}>with capabilities to quickly develop high quality technology products of any scale and complexity</p>

                            <div className = 'hide_in_mobile' style = {{position: 'absolute', top: '180px', right: '-150px'}}>
                                <Image priority  src = './landing2_sec2_arrow2.png' width = '76px' height = '59px' />
                            </div>
                        </div>
                        <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*300} data-aos = 'fade-up' data-aos-duration = '3000'  style = {{width: '340px', position: 'relative', paddingTop: '60px'}} className = {styles.nopad}>
                            <div className = {styles.cen}>
                                <Image priority  src = './landing2_sec2_image3.png' width = '110px' height = '110px' />
                            </div>
                            <p className = {`${styles.text}`}>and business skills to launch and support digital ideas, initiatives,  & Ventures</p>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*400} data-aos = 'fade-up' data-aos-duration = '3000'  className = {`${styles.bottomContainer}`}>
                {/* <div style = {{position: 'absolute', top: '-100px', left: '-150px'}}>
                    <Image priority  src = './landing2_sec2_line.png' width = '1410px' height = '39px' />
                </div> */}
                <div className = {styles.st} style = {{position: 'absolute', top: '-50px', left: '-300px'}}>
                    <Image priority  src = './landing2_sec2_steve.png' width = '262px' height = '195px' />
                </div>
                <div className = {`${styles.rocket}`} style = {{position: 'absolute', top: '-100px', right: '-300px'}}>
                    <Image priority  src = './landing2_sec2_rocket.png' width = '214px' height = '214px' />
                </div>
                <p className = {`${styles.bottomText}`}>???Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.???</p>
                <p className = {`${styles.by}`}>???Steve Jobs</p>
            </div>

        </div>
    )
}