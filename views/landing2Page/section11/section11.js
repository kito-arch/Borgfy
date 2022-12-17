
import Image from 'next/image'
import Link from 'next/link'
import { scroll } from '../../../conts_vars'
import styles from './section11.module.css'

export default function Section11(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', top: '400px', left: '600px'}}>
                <Image priority  src = '/../public/landing2_sec11_back1.png' width = '307.5px' height = '320.5px' />
            </div>

            <div style = {{position: 'absolute', top: '800px', left: '1000px'}}>
                <Image priority  src = '/../public/landing2_sec11_back2.png' width = '307.5px' height = '320.5px' />
            </div>

            <div style = {{position: 'absolute', top: '1000px', left: '400px'}}>
                <Image priority  src = '/../public/landing2_sec11_back3.png' width = '307.5px' height = '320.5px' />
            </div>

            <div style = {{position: 'absolute', top: '1300px', left: '800px'}}>
                <Image priority  src = '/../public/landing2_sec11_back.png' width = '307.5px' height = '320.5px' />
            </div>

            <p data-aos-offset = {-scroll*3650} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.the}`}>THE WAY</p>
            <p data-aos-offset = {-scroll*3650} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>We can</p>

            <div style = {{marginBottom: '398px'}} className = {`${styles.stretchBetween}`}>

                <div data-aos-offset = {-scroll*3850} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.box}`}>
                    <div  className = {styles.im} style = {{position: 'absolute', top: '-134px', left: '43px'}}>
                        <Image priority  src = '/../public/landing2_sec11_image1.png' width = '228px' height = '197px' />
                    </div>
                    <p className = {`${styles.boxHeading}`}>Brainstorm</p>
                    <p className = {`${styles.boxText}`}>Discuss, validate and document your ideas with advise from our expert team</p>
                </div>


                <div data-aos-offset = {-scroll*3850} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.box}`}>
                    <div  className = {styles.im} style = {{position: 'absolute', top: '-125px', left: '35px'}}>
                        <Image priority  src = '/../public/landing2_sec11_image2.png' width = '231px' height = '199px' />
                    </div>
                    <p className = {`${styles.boxHeading}`}>Develop</p>
                    <p className = {`${styles.boxText}`}>Use our expertise to develop technology products that help you implement your ideas in real world</p>
                </div>

            </div>
            <div className = {`${styles.stretchBetween}`}>

                <div data-aos-offset = {-scroll*4050} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.box}`}>
                    <div  className = {styles.im} style = {{position: 'absolute', top: '-275px', left: '0px'}}>
                        <Image priority  src = '/../public/landing2_sec11_image3.png' width = '326px' height = '326px' />
                    </div>
                    <p className = {`${styles.boxHeading}`}>Launch</p>
                    <p className = {`${styles.boxText}`}>Enroll to lead our venture building initiatives or get help to take your own ideas to your ideal market place.</p>
                </div>

                <div data-aos-offset = {-scroll*4050} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.box}`}>
                    <div  className = {styles.im} style = {{position: 'absolute', top: '-171px', left: '-5px'}}>
                        <Image priority  src = '/../public/landing2_sec11_image4.png' width = '227px' height = '227px' />
                    </div>
                    <p className = {`${styles.boxHeading}`}>Connect</p>
                    <p className = {`${styles.boxText}`}>Use our platform as a launchpad to connect with our growth partners and fast track your venture to the next level.</p>
                </div>

            </div>
            <Link href = 'brain'>
                <p className = {`${styles.readmore}`}>Read More</p>
            </Link>

        </div>
    )
}