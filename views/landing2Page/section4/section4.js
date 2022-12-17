import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section4.module.css'
import Link from 'next/link'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';


export default function Section4(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {styles.fp} data-aos-offset = {-scroll*700} data-aos = 'fade-up' data-aos-duration = '3000'  style = {{width: 'fit-content', margin: 'auto'}}>
                <Image priority  src = '/../public/landing2_sec4_text.png' width = '480px' height = '71px' />
            </div>
            <p data-aos-offset = {-scroll*700} data-aos = 'fade-up' data-aos-duration = '3000'  className = {`${styles.subtext} hide_in_mobile`}>Scroll down for more</p>
            <p style = {{marginBottom: '15px'}} data-aos-offset = {-scroll*700} data-aos = 'fade-up' data-aos-duration = '3000'  className = {`${styles.subtext} show_in_mobile`}>Swipe for more</p>

            <div className = {`${styles.stretchBetween} hide_in_mobile`}>
                <div data-aos-offset = {-scroll*600} data-aos = 'fade-right' data-aos-duration = '3000' >
                    <Link href = 'portfolio#ro'>
                        <div className = {styles.image}>
                            <Image priority  src = '/../public/ro_back.png' style = {{borderRadius: '40px'}} width = '747px' height = '714px' />
                        </div>
                    </Link>
                    <p className = {`${styles.text}`}><span style = {{fontWeight: '700'}}>RO --</span>   The Infleuncer Booking App UI/UX Designed For Better Impression and Performance</p>
                </div>
                <div data-aos-offset = {-scroll*600} data-aos = 'fade-left' data-aos-duration = '3000' >
                    <Link href = 'portfolio#bizz'>
                        <div className = {styles.image}>
                            <Image priority  src = '/../public/bizz_back.png' style = {{borderRadius: '40px'}} width = '747px' height = '714px' />
                        </div>
                    </Link>
                    <p className = {`${styles.text}`}><span style = {{fontWeight: '700'}}>Bizz --</span>   An NFC Digital Business Card App For Better Social Networking</p>
                </div>
            </div>

            <div className = {`${styles.stretchBetween} hide_in_mobile`}>
                <div data-aos-offset = {-scroll*800} data-aos = 'fade-right' data-aos-duration = '3000'>
                    <Link href = 'portfolio#atomic'>
                        <div className = {styles.image}>
                            <Image priority  src = '/../public/atomic_back.png' style = {{borderRadius: '40px'}} width = '747px' height = '714px' />
                        </div>
                    </Link>
                    <p className = {`${styles.text}`}><span style = {{fontWeight: '700'}}>Atomic --</span>   A Blockhain Social App Designed In Dark Theme To Give Elegant Look and Feel</p>
                </div>
                <div data-aos-offset = {-scroll*800} data-aos = 'fade-left' data-aos-duration = '3000'>
                    <Link href = 'portfolio#qool'>
                        <div className = {styles.image}>
                            <Image priority  src = '/../public/qool_qatar.png' style = {{borderRadius: '40px'}} width = '747px' height = '714px' />
                        </div>
                    </Link>
                    <p className = {`${styles.text}`}><span style = {{fontWeight: '700'}}>Qool Qatar --</span>   A Travel Tech App To Book Social Events/Activites in Qatar</p>
                </div>
            </div>




            <Swiper className="mySwiper show_in_mobile" >
                <SwiperSlide>
                    <div data-aos-offset = {-scroll*600} data-aos = 'fade-right' data-aos-duration = '3000' >
                        <Link href = 'portfolio#ro'>
                            <div className = {styles.image}>
                                <Image priority  src = '/../public/ro_back.png' style = {{borderRadius: '40px'}} width = '747px' height = '714px' />
                            </div>
                        </Link>
                        <p className = {`${styles.text}`}><span style = {{fontWeight: '700'}}>RO --</span>   The Infleuncer Booking App UI/UX Designed For Better Impression and Performance</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div data-aos-offset = {-scroll*600} data-aos = 'fade-left' data-aos-duration = '3000' >
                        <Link href = 'portfolio#bizz'>
                            <div className = {styles.image}>
                                <Image priority  src = '/../public/bizz_back.png' style = {{borderRadius: '40px'}} width = '747px' height = '714px' />
                            </div>
                        </Link>
                        <p className = {`${styles.text}`}><span style = {{fontWeight: '700'}}>Bizz --</span>   An NFC Digital Business Card App For Better Social Networking</p>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div data-aos-offset = {-scroll*800} data-aos = 'fade-right' data-aos-duration = '3000'>
                        <Link href = 'portfolio#atomic'>
                            <div className = {styles.image}>
                                <Image priority  src = '/../public/atomic_back.png' style = {{borderRadius: '40px'}} width = '747px' height = '714px' />
                            </div>
                        </Link>
                        <p className = {`${styles.text}`}><span style = {{fontWeight: '700'}}>Atomic --</span>   A Blockhain Social App Designed In Dark Theme To Give Elegant Look and Feel</p>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div data-aos-offset = {-scroll*800} data-aos = 'fade-left' data-aos-duration = '3000'>
                        <Link href = 'portfolio#qool'>
                            <div className = {styles.image}>
                                <Image priority  src = '/../public/qool_qatar.png' style = {{borderRadius: '40px'}} width = '747px' height = '714px' />
                            </div>
                        </Link>
                        <p className = {`${styles.text}`}><span style = {{fontWeight: '700'}}>Qool Qatar --</span>   A Travel Tech App To Book Social Events/Activites in Qatar</p>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}