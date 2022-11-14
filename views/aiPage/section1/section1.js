
import Image from 'next/image'
import styles from './section1.module.css'

export default function Section1(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', top: '68px', right : '0'}}>
                <Image src = '/../public/ai_sec1_back.png' width = '725px' height = '669px' />
            </div>

            <div data-aos-offset = "-300" data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.heading}`}>
                <Image src = '/../public/ai_sec1_text.png' width = '575px' height = '57px' />
            </div>
            <p data-aos-offset = "-300" data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.text}`}>AI stands for Artificial Intelligence. It is a simulation of human intelligence processes by computer systems or machines. The common applications of AI are as follows.</p>

            <div data-aos-offset = "-300" data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerStart}`}>
                <Image src = '/../public/ai_point.png' width = '24px' height = '24px' />
                <p className = {`${styles.point}`}>Natural language processing</p>
            </div>
            <div data-aos-offset = "-300" data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerStart}`}>
                <Image src = '/../public/ai_point.png' width = '24px' height = '24px' />
                <p className = {`${styles.point}`}>Machine vision</p>
            </div>
            <div data-aos-offset = "-300" data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerStart}`}>
                <Image src = '/../public/ai_point.png' width = '24px' height = '24px' />
                <p className = {`${styles.point}`}>Expert systems</p>
            </div>
            <div data-aos-offset = "-300" data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerStart}`}>
                <Image src = '/../public/ai_point.png' width = '24px' height = '24px' />
                <p className = {`${styles.point}`}>Speech recognition</p>
            </div>
            <div data-aos-offset = "-300" data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerStart}`}>
                <Image src = '/../public/ai_point.png' width = '24px' height = '24px' />
                <p className = {`${styles.point}`}>Data Science</p>
            </div>

            <p  data-aos-offset = "-300" data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.bottomText}`}>Popular teams who use emotech for their daily use.</p>
        </div>
    )
}