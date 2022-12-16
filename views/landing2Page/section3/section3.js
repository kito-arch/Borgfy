import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section3.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

export default function Section3(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {-scroll*400} data-aos = 'fade-up' data-aos-duration = '3000'  className = {`${styles.heading}`}>Our story been featured</p>
            <div data-aos-offset = {-scroll*400} data-aos = 'fade-up' data-aos-duration = '3000'  className = {`${styles.centerCenter} hide_in_mobile`}>
                <div className = {`${styles.stretchBetween}`}>
                    <div style = {{marginBottom: '25px'}}>
                        <Image priority  src = '/../public/collab1.png' width = '390px' height = '30px'/>
                    </div>
                    <div style = {{marginBottom: '25px'}}>
                        <Image priority  src = '/../public/collab2.png' width = '119px' height = '119px'/>
                    </div>
                    <div style = {{marginBottom: '25px'}}>
                        <Image priority  src = '/../public/collab3.png' width = '164px' height = '88px'/>
                    </div>
                    <div style = {{marginBottom: '25px'}}>
                        <Image priority  src = '/../public/collab5.png' width = '299px' height = '91.5px'/>
                    </div>
                </div>
            </div>
            <div style = {{marginTop: '50px'}} data-aos-offset = {-scroll*400} data-aos = 'fade-up' data-aos-duration = '3000'  className = {`${styles.centerCenter} hide_in_mobile`}>
                <div className = {`${styles.stretchBetween}`}>
                    <div style = {{marginBottom: '25px'}}>
                        <Image priority  src = '/../public/collab6.png' width = '400px' height = '55px'/>
                    </div>
                    <div style = {{marginBottom: '25px'}}>
                        <Image priority  src = '/../public/collab7.png' width = '311px' height = '72px'/>
                    </div>
                    <div style = {{backgroundColor: 'black'}}>
                        <Image priority  src = '/../public/collab4.png' width = '307px' height = '86px'/>
                    </div>
                </div>
            </div>


            <Swiper className='show_in_mobile' centeredSlides={true} autoplay={{delay: 1500, disableOnInteraction: false}} modules={[Autoplay]} >
                <SwiperSlide>
                    <div style = {{marginBottom: '25px', margin: 'auto', width: 'fit-content'}}>
                        <Image priority  src = '/../public/collab1.png' width = '390px' height = '30px'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style = {{marginBottom: '25px', margin: 'auto', width: 'fit-content'}}>
                        <Image priority  src = '/../public/collab2.png' width = '119px' height = '119px'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style = {{marginBottom: '25px', margin: 'auto', width: 'fit-content'}}>
                        <Image priority  src = '/../public/collab3.png' width = '164px' height = '88px'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style = {{marginBottom: '25px', margin: 'auto', width: 'fit-content'}}>
                        <Image priority  src = '/../public/collab5.png' width = '299px' height = '91.5px'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style = {{marginBottom: '25px', margin: 'auto', width: 'fit-content'}}>
                        <Image priority  src = '/../public/collab6.png' width = '400px' height = '55px'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style = {{marginBottom: '25px', margin: 'auto', width: 'fit-content'}}>
                        <Image priority  src = '/../public/collab7.png' width = '311px' height = '72px'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style = {{backgroundColor: 'black', margin: 'auto', width: 'fit-content'}}>
                        <Image priority  src = '/../public/collab4.png' width = '307px' height = '86px'/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}