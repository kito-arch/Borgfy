import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section2.module.css'
import { useEffect, useState } from 'react'

export default function Section2(props){

    const [kon, setKon] = useState(0)

    
    useEffect(()=>{
        let width = document.getElementById('secondslider').clientWidth
        document.getElementById("secondslider").scroll((width * kon), 0)
    }, [kon])


    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {-scroll*300} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>How Can We Help?</p>

            <div id = "secondslider" className = {`${styles.stretchBetween}`}>

                <div className = {`${styles.innerContainer}`}>

                    <div data-aos-offset = {-scroll*300} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <div style = {{width: 'fit-content', margin: 'auto', marginBottom: '62px'}}>
                            <Image priority  src = '/../public/landing_sec2_image1.png' width = '189px' height = '189px' />
                        </div>
                        <p className = {`${styles.boxHeading}`}>Consulting</p>
                        <p className = {`${styles.boxText}`}>Our consultants will help you make the right technical decisions that are rewarding in the long run. All our experts are highly experienced and well-accustomed to all the latest app development trends and technologies.</p>
                    </div>

                    <div data-aos-offset = {-scroll*300} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <div style = {{width: 'fit-content', margin: 'auto', marginBottom: '62px'}}>
                            <Image priority  src = '/../public/landing_sec2_image2.png' width = '189px' height = '189px' />
                        </div>
                        <p className = {`${styles.boxHeading}`}>Product Design UIUX</p>
                        <p className = {`${styles.boxText}`}>Let our creative ninjas design your application such that it reflects your brand identity. Having designed hundreds of mobile applications, we know what it takes to create an impeccable design that looks fresh and elegant.</p>
                    </div>

                    <div data-aos-offset = {-scroll*300} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <div style = {{width: 'fit-content', margin: 'auto', marginBottom: '62px'}}>
                            <Image priority  src = '/../public/landing_sec2_image3.png' width = '189px' height = '189px' />
                        </div>
                        <p className = {`${styles.boxHeading}`}>Mobile App Development</p>
                        <p className = {`${styles.boxText}`}>We can develop high-performing mobile applications that are future-focused and intuitive. Whether you’re seeking to develop native applications or cross-platform apps, you can rely on us for creating robust mobile applications from the ground up.</p>
                    </div>

                </div>

                <div className = {`${styles.innerContainer}`}>

                    <div data-aos-offset = {-scroll*300} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <div style = {{width: 'fit-content', margin: 'auto', marginBottom: '62px'}}>
                            <Image priority  src = '/../public/landing_sec2_image4.png' width = '189px' height = '189px' />
                        </div>
                        <p className = {`${styles.boxHeading}`}>Web App SaaS  Development</p>
                        <p className = {`${styles.boxText}`}>We can develop high-performing mobile applications that are future-focused and intuitive. Whether you’re seeking to develop native applications or cross-platform apps, you can rely on us for creating robust mobile applications from the ground up.</p>
                    </div>

                    <div data-aos-offset = {-scroll*300} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <div style = {{width: 'fit-content', margin: 'auto', marginBottom: '62px'}}>
                            <Image priority  src = '/../public/landing_sec2_image5.png' width = '189px' height = '189px' />
                        </div>
                        <p className = {`${styles.boxHeading}`}>Back-end Development</p>
                        <p className = {`${styles.boxText}`}>We can create bespoke and intuitive web applications  high performing saas products tailored to your audience. So far, we have worked with businesses of every size and scale to help them create impeccable web applications that are cutting-edge and futuristic . Hire us today and put our craft to work.</p>
                    </div>

                    <div data-aos-offset = {-scroll*300} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <div style = {{width: 'fit-content', margin: 'auto', marginBottom: '62px'}}>
                            <Image priority  src = '/../public/landing_sec2_image6.png' width = '189px' height = '189px' />
                        </div>
                        <p className = {`${styles.boxHeading}`}>Testing & QA</p>
                        <p className = {`${styles.boxText}`}>Quality assurance is crucial for any mobile application. We ensure that your app is in the best condition to deliver consistent and engaging UX. Our QA engineers perform innumerous tests for making your app absolutely bug-free.</p>
                    </div>

                </div>


                <div className = {`${styles.innerContainer}`}>

                    <div data-aos-offset = {-scroll*300} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.box}`}>
                        <div style = {{width: 'fit-content', margin: 'auto', marginBottom: '62px'}}>
                            <Image priority  src = '/../public/landing_sec2_image6.png' width = '189px' height = '189px' />
                        </div>
                        <p className = {`${styles.boxHeading}`}>Daaps Web 3.0 Development</p>
                        <p className = {`${styles.boxText}`}>Blockhain is Prevailing the world with its block check technology for better transparency in system it works over smart contract system integrated in web 2.0 System which we called as Apps to make the whole application decentralized.</p>
                    </div>

                </div>

            </div>


            <div className='hide_in_mobile' style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', width: 'fit-content', marginTop: '40px'}}>
                <div onClick={()=>{setKon(0)}} style = {{marginRight: '10px', cursor: 'pointer'}}>
                    {kon == 0 ? 
                            <Image priority  src = '/../public/landing_sec2_filled_ellipse.png' width = '26px' height = '26px' />
                    :
                            <Image priority  src = '/../public/landing_sec2_empty_ellipse.png' width = '26px' height = '26px' />
                    }
                </div>
                <div onClick={()=>{setKon(1)}} style = {{marginRight: '10px', cursor: 'pointer'}}>
                    {kon == 1 ? 
                            <Image priority  src = '/../public/landing_sec2_filled_ellipse.png' width = '26px' height = '26px' />
                    :
                            <Image priority  src = '/../public/landing_sec2_empty_ellipse.png' width = '26px' height = '26px' />
                    }
                </div>
                <div onClick={()=>{setKon(2)}} style = {{marginRight: '10px', cursor: 'pointer'}}>
                    {kon == 2 ? 
                            <Image priority  src = '/../public/landing_sec2_filled_ellipse.png' width = '26px' height = '26px' />
                    :
                            <Image priority  src = '/../public/landing_sec2_empty_ellipse.png' width = '26px' height = '26px' />
                    }
                </div>
            </div>

        </div>
    )
}