import { myscroll, mobscroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section9.module.css'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

export default function Section9(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*3200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>Check In Depth - How we solved it</p>
            <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*3200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.subtext}`}>Case Studies</p>


            <div style = {{position: 'relative'}} className = {`${styles.centerCenter} hide_in_mobile`}>

                <div onClick={()=>{document.getElementById("blogs").scrollBy(-630, 0)}} className='hide_in_mobile' style = {{cursor: 'pointer', position: 'absolute', top: '300px', left: '0'}}>
                    <Image priority  src = './about_sec6_left.png' width = '58px' height = '58px' />
                </div>

                <div onClick={()=>{document.getElementById("blogs").scrollBy(630, 0)}} className='hide_in_mobile' style = {{cursor: 'pointer', position: 'absolute', top: '300px', right: '0', transform: 'rotate(180deg)'}}>
                    <Image priority  src = './about_sec6_left.png' width = '58px' height = '58px' />
                </div>

                <div id = "blogs" style = {{scrollBehavior: 'smooth', width: '1840px', overflow: 'hidden', padding: '15px', justifyContent: 'flex-start'}} className = {`${styles.stretchBetween}`}>

                    <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*3200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <p className = {`${styles.boxHeading}`}>Our Visions Crafted Into Startups</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum doler sit</p>
                        <div style = {{position: 'absolute', bottom: '5px', left: '5px'}}>
                            <Image priority  src = './landing2_sec9_imageg1.png' width = '550px' height = '456px'/>
                        </div>
                    </div>

                    <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*3200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <p className = {`${styles.boxHeading}`}>Our Visions Crafted Into Startups</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum doler sit</p>
                        <div style = {{position: 'absolute', bottom: '5px', left: '5px'}}>
                            <Image priority  src = './landing2_sec9_imageg1.png' width = '550px' height = '456px'/>
                        </div>
                    </div>

                    <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*3200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <p className = {`${styles.boxHeading}`}>Our Visions Crafted Into Startups</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum doler sit</p>
                        <div style = {{position: 'absolute', bottom: '5px', left: '5px'}}>
                            <Image priority  src = './landing2_sec9_imageg1.png' width = '550px' height = '456px'/>
                        </div>
                    </div>

                </div>
            </div>

            <Swiper className = 'show_in_mobile' autoplay={{delay: 4000, disableOnInteraction: false}} modules={[Autoplay]} >
                <SwiperSlide>
                    <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*3200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <p className = {`${styles.boxHeading}`}>Our Visions Crafted Into Startups</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum doler sit</p>
                        <div>
                            <Image priority  src = './landing2_sec9_imageg1.png' width = '550px' height = '456px'/>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*3200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <p className = {`${styles.boxHeading}`}>Our Visions Crafted Into Startups</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum doler sit</p>
                        <div>
                            <Image priority  src = './landing2_sec9_imageg1.png' width = '550px' height = '456px'/>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*3200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <p className = {`${styles.boxHeading}`}>Our Visions Crafted Into Startups</p>
                        <p className = {`${styles.boxText}`}>Lorem ipsum doler sit</p>
                        <div>
                            <Image priority  src = './landing2_sec9_imageg1.png' width = '550px' height = '456px'/>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <Link href = 'case2'>
                <p className = {`${styles.readmore}`}>Read More</p>
            </Link>

        </div>
    )
}
