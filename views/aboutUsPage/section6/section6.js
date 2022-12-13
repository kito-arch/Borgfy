
import styles from './section6.module.css'
import Image from 'next/image'
import { scroll } from '../../../conts_vars'

export default function Section6(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {-1300*scroll} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>Meet Our Team</p>

            <div data-aos-offset = {-1400*scroll} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.centerCenter}`}>
                <div className = {`${styles.stretchBetween}`}>
                    <div>
                        <Image priority  src = '/../public/me.png' width = '354px' height = '300px'/>
                        <p className = {`${styles.text}`}>(CEO) <span style = {{color: '#6E00FA'}}>Abdullah Imran</span></p>
                    </div>
                    {/* <div>
                        <Image priority  src = '/../public/about_sec6_image2.png' width = '354px' height = '300px'/>
                        <p className = {`${styles.text}`}>(CEO) <span style = {{color: '#6E00FA'}}>MR YOUSUF JAMIL</span></p>
                    </div>
                    <div>
                        <Image priority  src = '/../public/about_sec6_image3.png' width = '354px' height = '300px'/>
                        <p className = {`${styles.text}`}>(CTO) <span style = {{color: '#6E00FA'}}>Micheal Watson</span></p>
                    </div> */}
                </div>

                <div className='hide_in_mobile' style = {{position: 'absolute', top: '128px', left: '12rem'}}>
                    <Image priority  src = '/../public/about_sec6_left.png' width = '58px' height = '58px' />
                </div>

                <div className='hide_in_mobile' style = {{position: 'absolute', top: '122px', right: '12rem'}}>
                    <Image priority  src = '/../public/about_sec6_right.png' width = '90px' height = '90px' />
                </div>

            </div>
        </div>
    )
}