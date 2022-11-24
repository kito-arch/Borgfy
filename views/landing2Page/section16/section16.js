import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section16.module.css'

export default function Section16(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.innerContainer}`}>
                <p data-aos-offset = {-scroll*6000} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>The moust Recent articles</p>


                <div data-aos-offset = {-scroll*6000} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.stretchStart}`}>
                    <div style = {{minWidth: '528px', marginRight: '43px', padding: '43px 63px'}} className = {`${styles.box}`}>
                        <div>
                            <p className = {`${styles.boxTitle}`}>Top 10 App Ideas for startups in  2022</p>
                            <p className = {`${styles.boxText}`}>An important aspect of every company’s success nowadays is to have the greatest app concepts. App development</p>
                        </div>
                        <Image src = './landing2_sec16_image1.png' width = '419px' height = '317px' />
                    </div>

                    <div style = {{minWidth: '414px', marginRight: '30px', padding: '124px 16px 43px'}} className = {`${styles.box}`}>
                        <Image src = './landing2_sec16_mage2.png' width = '398px' height = '223px' />
                        <div>
                            <p className = {`${styles.boxDate}`}>January 08, 2022</p>
                            <p className = {`${styles.boxTitle}`}>8 Steps To Consider on Evaluation of your startup idea</p>
                            <p className = {`${styles.boxText}`}>An important aspect of every company’s success nowadays is to have the greatest </p>
                        </div>
                    </div>

                    <div style = {{minWidth: '414px', marginRight: '30px', padding: '43px 16px'}} className = {`${styles.box}`}>
                        <Image src = './landing2_sec16_image3.png' width = '367px' height = '367px' />
                        <div>
                            <p className = {`${styles.boxDate}`}>January 08, 2022</p>
                            <p className = {`${styles.boxTitle}`}>If as a business owner, why do you need influencer marketing?</p>
                            <p className = {`${styles.boxText}`}>An important aspect of every company’s success nowadays is to have the greatest </p>
                        </div>
                    </div>


                    <div style = {{minWidth: '414px', marginRight: '30px', padding: '43px 16px'}} className = {`${styles.box}`}>
                        <Image src = './landing2_sec16_image1.png' width = '419px' height = '317px' />
                        <div>
                            <p className = {`${styles.boxDate}`}>January 08, 2022</p>
                            <p className = {`${styles.boxTitle}`}>8 Steps To Consider on Evaluation of your startup idea</p>
                            <p className = {`${styles.boxText}`}>An important aspect of every company’s success nowadays is to have the greatest </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}