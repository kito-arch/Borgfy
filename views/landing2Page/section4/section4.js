import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section4.module.css'

export default function Section4(props){
    return(
        <div className = {`${styles.container}`}>
            <div data-aos-offset = {scroll-700} data-aos = 'fade-up' data-aos-duration = '1000'  style = {{width: 'fit-content', margin: 'auto'}}>
                <Image src = './landing2_sec4_text.png' width = '480px' height = '71px' />
            </div>
            <p data-aos-offset = {scroll-700} data-aos = 'fade-up' data-aos-duration = '1000'  className = {`${styles.subtext}`}>Scroll down for more</p>

            <div className = {`${styles.stretchBetween}`}>
                <div data-aos-offset = {scroll-600} data-aos = 'fade-right' data-aos-duration = '1000' >
                    <Image src = './landing2_sec4_image1.png' width = '767' height = '734px' />
                    <p className = {`${styles.text}`}><span style = {{fontWeight: '700'}}>Vencortex        </span>Redesigning a whole new customer experience for idea to investment.</p>
                </div>
                <div data-aos-offset = {scroll-600} data-aos = 'fade-left' data-aos-duration = '1000' >
                    <Image src = './landing2_sec4_image2.png' width = '767' height = '734px' />
                    <p className = {`${styles.text}`}><span style = {{fontWeight: '700'}}>Vencortex        </span>Redesigning a whole new customer experience for idea to investment.</p>
                </div>
            </div>

            <div className = {`${styles.stretchBetween}`}>
                <div data-aos-offset = {scroll-800} data-aos = 'fade-right' data-aos-duration = '1000'>
                    <Image src = './landing2_sec4_image3.png' width = '767' height = '734px' />
                    <p className = {`${styles.text}`}><span style = {{fontWeight: '700'}}>Vencortex        </span>Redesigning a whole new customer experience for idea to investment.</p>
                </div>
                <div data-aos-offset = {scroll-800} data-aos = 'fade-left' data-aos-duration = '1000'>
                    <Image src = './landing2_sec2_image4.png' width = '767' height = '734px' />
                    <p className = {`${styles.text}`}><span style = {{fontWeight: '700'}}>Vencortex        </span>Redesigning a whole new customer experience for idea to investment.</p>
                </div>
            </div>

        </div>
    )
}