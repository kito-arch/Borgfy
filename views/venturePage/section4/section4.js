import { scroll } from '../../../conts_vars'

import Image from 'next/image'
import Card2 from './components/card'
import styles from './section4.module.css'

export default function Section4(props){
    return(
        <div className = {`${styles.container}`}>

            {/* <div style = {{position: 'absolute', top: 0, left: '-12rem'}}>
                <Image priority  src = '/../public/digital_advantages_back.png' width = '3000px' height = '900px'/>
            </div> */}

            <p data-aos-offset = {-scroll*1000} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>Advantages of Digital Transformation</p>

            <div className = {`${styles.stretchBetween}`}>
                <div className={styles.carCon} data-aos-offset = {-scroll*1000} data-aos = 'fade-right' data-aos-duration = '3000' style = {{width: '49%'}}>
                    <Card2 heading = 'Discover All About Market Trends' desc = 'With corporate experts and industry leaders, Borgfy lets you draw the benefits of their domain expertise. They get deep with market trends, assess your plan or requirements, and validate their research in terms of right-fit financial assistance, product development, digital experience, and scalability.'/>
                </div>
                <div className={styles.carCon} data-aos-offset = {-scroll*1000} data-aos = 'fade-left' data-aos-duration = '3000' style = {{width: '49%'}}>
                    <Card2 heading = 'Eliminate Risks' desc = 'Many companies want to catch up with new technologies. Here, our guidance benefits you with a proactive attitude. It helps you to find transitioning solutions that are best-fit & risk-free for your business.'/>
                </div>
            </div>

            <div className = {`${styles.stretchBetween}`}>
                <div className={styles.carCon} data-aos-offset = {-scroll*1000} data-aos = 'fade-right' data-aos-duration = '3000' style = {{width: '49%'}}>
                    <Card2 heading = 'Think Big, Make Big' desc = 'Digital transformation benefits if you have aligned it rightly to your goals. With experienced product developers, managers, and marketers, we ensure you to best aware of strategies that maximize ROI & pave the way to transformation.'/>
                </div>
                <div className={styles.carCon} data-aos-offset = {-scroll*1000} data-aos = 'fade-left' data-aos-duration = '3000' style = {{width: '49%'}}>
                    <Card2 heading = 'Complete IT Assistance' desc = 'This transformation is a collaboration of technology, data, and solutions.  For this, our full-stack product developers and domain experts like SMEs, marketers are here to consult with. Leveraging on their expertise can help you shift your corporate culture in no time.'/>
                </div>
            </div>

            <div className = {`${styles.stretchBetween}`}>
                <div className={styles.carCon} data-aos-offset = {-scroll*1000} data-aos = 'fade-right' data-aos-duration = '3000' style = {{width: '49%'}}>
                    <Card2 heading = 'Win Flexibility' desc = 'For filling up all dots, you need to achieve flexibility. We define where you need regular adjustments and uplift which part of your business, product, or system. We let you allocate talent together with key performance indicators.'/>
                </div>
                <div className={styles.carCon} data-aos-offset = {-scroll*1000} data-aos = 'fade-left' data-aos-duration = '3000' style = {{width: '49%'}}>
                    <Card2 heading = 'Scalable Business' desc = 'With us, you can get all benefits of our knowledge and technology assistance. It can help you to not only opt in a new product or system, but also scale it through marketing or promotional ideas, products, and support.'/>
                </div>
            </div>

        </div>
    )
}