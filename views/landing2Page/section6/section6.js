import { myscroll, mobscroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section6.module.css'
import Link from 'next/link'
import { onMyScroll } from './functions'
import { useEffect } from 'react'

export default function Section6(props){

    useEffect(() => {
        onMyScroll()
    }, [])
    

    return(
        <div className = {`${styles.container}`}>


            <div style = {{position: 'absolute', top: '900px', left: '-12rem'}}>
                <Image priority  src = './landing2_sec5_back5.png' width = '120px' height = '170px' />
            </div>

            <div style = {{position: 'absolute', top: '1300px', right: '-12rem'}}>
                <Image priority  src = './landing2_sec5_back6.png' width = '130px' height = '170px' />
            </div>

            <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1700} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.subheading}`}>COMMITTED</p>
            <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1700} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.heading}`}>What we delivered</p>

            <div id = "nums" className = {`${styles.numberContainer}`}>

                <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1900} data-aos = 'fade-left' data-aos-duration = '3000' >
                    <div style = {{display: 'flex'}} className = {styles.nowrap}>
                        <p id = "num1" className = {`${styles.numberHeading}`}></p>
                        <p className = {`${styles.numberHeading}`}>+</p>
                    </div>
                    <p className = {`${styles.numberText}`}>Startup Ideas</p>
                    <p className = {`${styles.numberSubText}`}>Evaluated</p>
                </div>

                <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1900} data-aos = 'fade-left' data-aos-duration = '3000' >
                    <div style = {{display: 'flex'}} className = {styles.nowrap}>
                        <p id = "num2" className = {`${styles.numberHeading}`}></p>
                        <p className = {`${styles.numberHeading}`}>+</p>
                    </div>
                    <p className = {`${styles.numberText}`}>Technology Products</p>
                    <p className = {`${styles.numberSubText}`}>Developed</p>
                </div>

                <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1900} data-aos = 'fade-left' data-aos-duration = '3000' >
                    <div style = {{display: 'flex'}}  className = {styles.nowrap}>
                        <p id = "num3" className = {`${styles.numberHeading}`}></p>
                        <p className = {`${styles.numberHeading}`}>+</p>
                    </div>
                    <p className = {`${styles.numberText}`}>Enterprise / Startup</p>
                    <p className = {`${styles.numberSubText}`}>Clients</p>
                </div>

            </div>

            <div className = {`${styles.howContainer}`}>

                <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2000} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.heading2}`}>How we work?</p>
                <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2000} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.subheading2}`}>Bussiness Model</p>

                <div className = {`${styles.stretchBetween}`}>

                    <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2100} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.boxContainer}`}>
                        <div style = {{backgroundColor: '#A5CEFF'}} className = {`${styles.boxTop}`}>

                            <div className='hide_in_mobile' style = {{position: 'absolute', top: '0', left: '50px'}}>
                                <Image priority  src = './landing2_sec5_back1.png' width = '100px' height = '50px' />
                            </div>

                            <div className='hide_in_mobile' style = {{position: 'absolute', bottom: '-4px', right: '100px'}}>
                                <Image priority  src = './landing2_sec5_back2.png' width = '100px' height = '50px' />
                            </div>

                            <p className = {`${styles.boxHeading1}`}>As experts in</p>
                            <p className = {`${styles.boxHeading2}`}>Digital Transformation</p>
                            <p className = {`${styles.boxHeading3}`}>we undertake</p>
                        </div>

                        <div className = {`${styles.boxBottom}`}>
                            <div>
                                <ul>
                                    <li><p className = {`${styles.list}`}>Building Digital?? Products??</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Scaling Businesses Using Technology & Automation</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Full Stack Product Development</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Helping Entrepreneurs Build Scalable Ideas</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Fast Market Access Through Growth Partners</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Full Funding Assistance</p></li>
                                </ul>
                            </div>
                            <Link href = 'what-is-digital-transformation'>
                                <p className = {`${styles.button}`}>Read More</p>
                            </Link>
                        </div>
                    </div>

                    <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2100} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.boxContainer}`}>
                        <div style = {{backgroundColor: '#A0FFEE'}} className = {`${styles.boxTop}`}>

                            <div className='hide_in_mobile' style = {{position: 'absolute', bottom: '-4px', left: '100px'}}>
                                <Image priority  src = './landing2_sec5_back3.png' width = '100px' height = '50px' />
                            </div>

                            <div className='hide_in_mobile' style = {{position: 'absolute', top: '0', right: '50px'}}>
                                <Image priority  src = './landing2_sec5_back4.png' width = '100px' height = '50px' />
                            </div>

                            <p className = {`${styles.boxHeading1}`}>From Inception to Launch we do</p>
                            <p className = {`${styles.boxHeading2}`}>Venture Building</p>
                            <p className = {`${styles.boxHeading3}`}>To Build next level Visionary ideas</p>
                        </div>

                        <div className = {`${styles.boxBottom}`}>
                            <div>
                                <ul>
                                    <li><p className = {`${styles.list}`}>Idea evaluation and brainstorming</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Market and Audience Research</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>MVP Pivoting</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Reiteration and Rectification of Developed Product</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Go To Market Strategy</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Venture  Launch</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Capital Support</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Startup Networking Events </p></li>
                                </ul>
                            </div>
                            <Link href = 'venture-studio'>
                                <p className = {`${styles.button}`}>Read More</p>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
    )
}