import { scroll } from '../../../../conts_vars'
import Image from 'next/image'
import Card from './components/card/card'
import styles from './section2.module.css'

export default function Section2(props){
    return(
        <div className = {`${styles.container}`}>
            <div data-aos-offset = {-scroll*300} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Image priority  src = './UX.png' width = '208px' height = '60px'/>
            </div>
            <p data-aos-offset = {-scroll*300} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>How Can We Help?</p>
            <p data-aos-offset = {-scroll*300} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.text}`}>We thrive on experimenting with the latest UI/UX design and customer retention strategies.</p>
            <div className = {`${styles.cardContainer}`}>
                <div className={styles.caCon} data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '3000' style = {{width: '21%'}}>
                    <Card image = './ui_icon_1.png' heading = 'UX Consulting' text = 'With the best UX consultants at your service, you can be assured of the best user experience from the business and customer perspective.'/>
                </div>
                <div className={styles.caCon} data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '3000' style = {{width: '21%'}}>
                    <Card image = './ui_icon_2.png' heading = 'Product Design' text = 'When your product design is superlative, your brand stands out, and your customers can make the best use of your solutions. We help you address your long-term needs by making your products appealing.'/>
                </div>
                <div className={styles.caCon} data-aos-offset = {-scroll*300} data-aos = 'fade-left' data-aos-duration = '3000' style = {{width: '21%'}}>
                    <Card image = './ui_icon_3.png' heading = 'App UI/UX Design' text = 'With the best UX consultants at your service, you can be assured of the best user experience from the business and customer perspective.'/>
                </div>
                <div className={styles.caCon} data-aos-offset = {-scroll*300} data-aos = 'fade-left' data-aos-duration = '3000' style = {{width: '21%'}}>
                    <Card image = './ui_icon_4.png' heading = 'Saas UI/UX Design' text = 'When people can easily interact with your website and app, customers are sure to return. With a knack for providing the best user experience, we ensure you and your users will have a lifetime experience.'/>
                </div>
            </div>
        </div>
    )
}