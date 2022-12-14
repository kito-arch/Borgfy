import { myscroll, mobscroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section16.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

export default function Section16(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.innerContainer}`}>
                <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*6000} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>The most recent articles</p>

                <div onClick={()=>{document.getElementById("blo").scrollBy(-567, 0)}} className='hide_in_mobile' style = {{cursor: 'pointer', position: 'absolute', top: '600px', left: '8rem'}}>
                    <Image priority  src = './about_sec6_left.png' width = '58px' height = '58px' />
                </div>

                <div onClick={()=>{document.getElementById("blo").scrollBy(567, 0)}} className='hide_in_mobile' style = {{cursor: 'pointer', position: 'absolute', top: '600px', right: '7rem', transform: 'rotate(180deg)'}}>
                    <Image priority  src = './about_sec6_left.png' width = '58px' height = '58px' />
                </div>

                <div style = {{scrollBehavior: 'smooth'}} id = "blo" data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*6000} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.stretchStart} hide_in_mobile`}>
                    {/* <div style = {{minWidth: '528px', marginRight: '43px', padding: '43px 63px'}} className = {`${styles.box}`}>
                        <div>
                            <p className = {`${styles.boxTitle}`}>Top 10 App Ideas for startups in  2022</p>
                            <p className = {`${styles.boxText}`}>An important aspect of every company’s success nowadays is to have the greatest app concepts. App development</p>
                        </div>
                        <Image priority  src = './landing2_sec16_image1.png' width = '419px' height = '317px' />
                    </div> */}

                    <div style = {{minWidth: '537px', maxWidth: '537px', marginRight: '30px', padding: '124px 16px 43px'}} className = {`${styles.box}`}>
                        <div style = {{margin: 'auto'}}>
                            <Image priority  src = './landing2_sec16_mage2.png' width = '398px' height = '223px' />
                        </div>                        
                        <div>
                            <p className = {`${styles.boxDate}`}>January 08, 2022</p>
                            <p className = {`${styles.boxTitle}`}>8 Steps To Consider on Evaluation of your startup idea</p>
                            <p className = {`${styles.boxText}`}>An important aspect of every company’s success nowadays is to have the greatest </p>
                        </div>
                    </div>

                    <div style = {{minWidth: '537px', maxWidth: '537px', marginRight: '30px', padding: '43px 16px'}} className = {`${styles.box}`}>
                        <div style = {{margin: 'auto'}}>
                            <Image priority  src = './landing2_sec16_image3.png' width = '367px' height = '367px' />
                        </div>                                
                        <div>
                            <p className = {`${styles.boxDate}`}>January 08, 2022</p>
                            <p className = {`${styles.boxTitle}`}>If as a business owner, why do you need influencer marketing?</p>
                            <p className = {`${styles.boxText}`}>An important aspect of every company’s success nowadays is to have the greatest </p>
                        </div>
                    </div>


                    <div style = {{minWidth: '537px', maxWidth: '537px', marginRight: '30px', padding: '43px 16px'}} className = {`${styles.box}`}>
                        <div style = {{margin: 'auto'}}>
                            <Image priority  src = './landing2_sec16_image1.png' width = '419px' height = '317px' />
                        </div>                                
                        <div>
                            <p className = {`${styles.boxDate}`}>January 08, 2022</p>
                            <p className = {`${styles.boxTitle}`}>8 Steps To Consider on Evaluation of your startup idea</p>
                            <p className = {`${styles.boxText}`}>An important aspect of every company’s success nowadays is to have the greatest </p>
                        </div>
                    </div>

                </div>


                <Swiper spaceBetween={40} className = 'show_in_mobile' autoplay={{delay: 4000, disableOnInteraction: false}} modules={[Autoplay]}>

                    <SwiperSlide>
                        <div style = {{minWidth: '414px', marginRight: '30px', padding: '124px 16px 43px'}} className = {`${styles.box}`}>
                            <div style = {{margin: 'auto'}}>
                                <Image priority  src = './landing2_sec16_mage2.png' width = '398px' height = '223px' />
                            </div>
                            <div>
                                <p className = {`${styles.boxDate}`}>January 08, 2022</p>
                                <p className = {`${styles.boxTitle}`}>8 Steps To Consider on Evaluation of your startup idea</p>
                                <p className = {`${styles.boxText}`}>An important aspect of every company’s success nowadays is to have the greatest </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div style = {{minWidth: '414px', marginRight: '30px', padding: '43px 16px'}} className = {`${styles.box}`}>
                            <div style = {{margin: 'auto'}}>
                                <Image priority  src = './landing2_sec16_image3.png' width = '367px' height = '367px' />
                            </div>
                            <div>
                                <p className = {`${styles.boxDate}`}>January 08, 2022</p>
                                <p className = {`${styles.boxTitle}`}>If as a business owner, why do you need influencer marketing?</p>
                                <p className = {`${styles.boxText}`}>An important aspect of every company’s success nowadays is to have the greatest </p>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div style = {{minWidth: '414px', marginRight: '30px', padding: '43px 16px'}} className = {`${styles.box}`}>
                            <div style = {{margin: 'auto'}}>
                                <Image priority  src = './landing2_sec16_image1.png' width = '419px' height = '317px' />
                            </div>
                            <div>
                                <p className = {`${styles.boxDate}`}>January 08, 2022</p>
                                <p className = {`${styles.boxTitle}`}>8 Steps To Consider on Evaluation of your startup idea</p>
                                <p className = {`${styles.boxText}`}>An important aspect of every company’s success nowadays is to have the greatest </p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}