
import Image from 'next/image'
import { myscroll, mobscroll } from '../../../conts_vars'
import styles from './section15.module.css'

export default function Section15(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', right: '-12rem', bottom: '-400px'}}>
                <Image priority  src = './case_bottom_lines.png' width = '300px' height = '500px' />
            </div>
            <div className='hide_in_mobile' style = {{zIndex: '10', position: 'absolute', left: '-12rem', top: '200px'}}>
                <Image priority  src = './case_left_hand.png' width = '158px' height = '185px' />
            </div>

            <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*4600} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>The Outcomes</p>
            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*4600} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.centerCenter}`}>
                <div className = {`${styles.stretchBetween}`}>
                    <div style = {{position: 'relative'}}> 
                        <p className = {`${styles.text}`}>{props?.useCase?.funding}</p>
                        <p className = {`${styles.subtext}`}>Total Funding Raised</p>
                        <div style = {{position: 'absolute', left: '0', top: '90px'}}>
                            <Image priority  src = './case_sec15_underline.png' width = '171px' height = '20px' />
                        </div>
                    </div>
                    <div style = {{position: 'relative'}}> 
                        <p className = {`${styles.text}`}>25%</p>
                        <p className = {`${styles.subtext}`}>{props?.useCase?.onboarding}</p>
                        <div style = {{position: 'absolute', left: '0', top: '90px'}}>
                            <Image priority  src = './case_sec15_underline.png' width = '171px' height = '20px' />
                        </div>
                    </div>
                    <div style = {{position: 'relative'}}> 
                        <p className = {`${styles.text}`}>300%</p>
                        <p className = {`${styles.subtext}`}>{props?.useCase?.revenue}</p>
                        <div style = {{position: 'absolute', left: '0', top: '90px'}}>
                            <Image priority  src = './case_sec15_underline.png' width = '171px' height = '20px' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}