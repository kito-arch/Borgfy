
import Image from 'next/image'
import { scroll } from '../../../conts_vars'
import styles from './section12.module.css'

export default function Section12(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {scroll-4200} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.heading}`}>Only the story has changed - Not the fundamentals</p>
            
            <div className = {`${styles.centerCenter}`}>
                <div className = {`${styles.stretchBetween}`}>

                    <div data-aos-offset = {scroll-4400} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.box}`}>
                        <div style = {{width: 'fit-content', margin: 'auto'}}>
                            <Image src = '/../public/landing2_sec12_image1.png' width = '250px' height = '250px' />
                        </div>
                        <p className = {`${styles.number}`}>90's</p>
                        <p className = {`${styles.subheading}`}>The 90's Business Man</p>
                        <p className = {`${styles.text}`}>Work hard  in an area with less competition and earn average wealth with less failure</p>
                    </div>

                    <div data-aos-offset = {scroll-4400} data-aos = 'fade-left' data-aos-duration = '1000' className = {`${styles.box}`}>
                        <div style = {{width: 'fit-content', margin: 'auto'}}>
                            <Image src = '/../public/landing2_sec12_image2.png' width = '250px' height = '250px' />
                        </div>
                        <p className = {`${styles.number}`}>20's</p>
                        <p className = {`${styles.subheading}`}>The 20's Entrepreneur</p>
                        <p className = {`${styles.text}`}>Take calculated risk in a fiercely competitive area. Tolerant to failure and targets high returns</p>
                    </div>

                </div>
            </div>
            
        </div>
    )
}