
import Image from 'next/image'
import styles from './section2.module.css'

export default function Section2(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>How Can We Help?</p>

            <div  className = {`${styles.stretchBetween}`}>

                <div className = {`${styles.innerContainer}`}>

                    <div className = {`${styles.box}`}>
                        <div style = {{width: 'fit-content', margin: 'auto', marginBottom: '62px'}}>
                            <Image src = '/../public/landing_sec2_image1.png' width = '189px' height = '189px' />
                        </div>
                        <p className = {`${styles.boxHeading}`}>Consulting</p>
                        <p className = {`${styles.boxText}`}>Our consultants will help you make the right technical decisions that are rewarding in the long run. All our experts are highly experienced and well-accustomed to all the latest app development trends and technologies.</p>
                    </div>

                    <div className = {`${styles.box}`}>
                        <div style = {{width: 'fit-content', margin: 'auto', marginBottom: '62px'}}>
                            <Image src = '/../public/landing_sec2_image2.png' width = '189px' height = '189px' />
                        </div>
                        <p className = {`${styles.boxHeading}`}>Product Design UIUX</p>
                        <p className = {`${styles.boxText}`}>Let our creative ninjas design your application such that it reflects your brand identity. Having designed hundreds of mobile applications, we know what it takes to create an impeccable design that looks fresh and elegant.</p>
                    </div>

                    <div className = {`${styles.box}`}>
                        <div style = {{width: 'fit-content', margin: 'auto', marginBottom: '62px'}}>
                            <Image src = '/../public/landing_sec2_image3.png' width = '189px' height = '189px' />
                        </div>
                        <p className = {`${styles.boxHeading}`}>Mobile App Development</p>
                        <p className = {`${styles.boxText}`}>We can develop high-performing mobile applications that are future-focused and intuitive. Whether you’re seeking to develop native applications or cross-platform apps, you can rely on us for creating robust mobile applications from the ground up.</p>
                    </div>

                </div>

                <div className = {`${styles.innerContainer}`}>

                    <div className = {`${styles.box}`}>
                        <div style = {{width: 'fit-content', margin: 'auto', marginBottom: '62px'}}>
                            <Image src = '/../public/landing_sec2_image4.png' width = '189px' height = '189px' />
                        </div>
                        <p className = {`${styles.boxHeading}`}>Web App SaaS  Development</p>
                        <p className = {`${styles.boxText}`}>We can develop high-performing mobile applications that are future-focused and intuitive. Whether you’re seeking to develop native applications or cross-platform apps, you can rely on us for creating robust mobile applications from the ground up.</p>
                    </div>

                    <div className = {`${styles.box}`}>
                        <div style = {{width: 'fit-content', margin: 'auto', marginBottom: '62px'}}>
                            <Image src = '/../public/landing_sec2_image5.png' width = '189px' height = '189px' />
                        </div>
                        <p className = {`${styles.boxHeading}`}>Back-end Development</p>
                        <p className = {`${styles.boxText}`}>We can create bespoke and intuitive web applications  high performing saas products tailored to your audience. So far, we have worked with businesses of every size and scale to help them create impeccable web applications that are cutting-edge and futuristic . Hire us today and put our craft to work.</p>
                    </div>

                    <div className = {`${styles.box}`}>
                        <div style = {{width: 'fit-content', margin: 'auto', marginBottom: '62px'}}>
                            <Image src = '/../public/landing_sec2_image6.png' width = '189px' height = '189px' />
                        </div>
                        <p className = {`${styles.boxHeading}`}>Testing & QA</p>
                        <p className = {`${styles.boxText}`}>Quality assurance is crucial for any mobile application. We ensure that your app is in the best condition to deliver consistent and engaging UX. Our QA engineers perform innumerous tests for making your app absolutely bug-free.</p>
                    </div>

                </div>


                <div className = {`${styles.innerContainer}`}>

                    <div className = {`${styles.box}`}>
                        <div style = {{width: 'fit-content', margin: 'auto', marginBottom: '62px'}}>
                            <Image src = '/../public/landing_sec2_image6.png' width = '189px' height = '189px' />
                        </div>
                        <p className = {`${styles.boxHeading}`}>Daaps Web 3.0 Development</p>
                        <p className = {`${styles.boxText}`}>Blockhain is Prevailing the world with its block check technology for better transparency in system it works over smart contract system integrated in web 2.0 System which we called as Apps to make the whole application decentralized.</p>
                    </div>

                </div>

            </div>


            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', width: 'fit-content', marginTop: '40px'}}>
                <div style = {{marginRight: '10px'}}>
                    <Image src = '/../public/landing_sec2_empty_ellipse.png' width = '26px' height = '26px' />
                </div>
                <div style = {{marginRight: '10px'}}>
                    <Image src = '/../public/landing_sec2_filled_ellipse.png' width = '26px' height = '26px' />
                </div>
                <div style = {{marginRight: '10px'}}>
                    <Image src = '/../public/landing_sec2_empty_ellipse.png' width = '26px' height = '26px' />
                </div>
            </div>

        </div>
    )
}