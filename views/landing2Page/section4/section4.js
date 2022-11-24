import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section4.module.css'
import Link from 'next/link'

export default function Section4(props){
    return(
        <div className = {`${styles.container}`}>
            <div data-aos-offset = {-scroll*700} data-aos = 'fade-up' data-aos-duration = '3000'  style = {{width: 'fit-content', margin: 'auto'}}>
                <Image src = './landing2_sec4_text.png' width = '480px' height = '71px' />
            </div>
            <p data-aos-offset = {-scroll*700} data-aos = 'fade-up' data-aos-duration = '3000'  className = {`${styles.subtext}`}>Scroll down for more</p>

            <div className = {`${styles.stretchBetween}`}>
                <div data-aos-offset = {-scroll*600} data-aos = 'fade-right' data-aos-duration = '3000' >
                    <Link href = 'landing'>
                        <div className = {styles.image}>
                            <Image src = './landing2_sec4_image1.png' style = {{borderRadius: '40px'}} width = '747' height = '714px' />
                        </div>
                    </Link>
                    <p className = {`${styles.text}`}><span style = {{fontWeight: '700'}}>Vencortex        </span>Redesigning a whole new customer experience for idea to investment.</p>
                </div>
                <div data-aos-offset = {-scroll*600} data-aos = 'fade-left' data-aos-duration = '3000' >
                    <Link href = 'landing'>
                        <div className = {styles.image}>
                            <Image src = './landing2_sec4_image2.png' style = {{borderRadius: '40px'}} width = '747' height = '714px' />
                        </div>
                    </Link>
                    <p className = {`${styles.text}`}><span style = {{fontWeight: '700'}}>Vencortex        </span>Redesigning a whole new customer experience for idea to investment.</p>
                </div>
            </div>

            <div className = {`${styles.stretchBetween}`}>
                <div data-aos-offset = {-scroll*800} data-aos = 'fade-right' data-aos-duration = '3000'>
                    <Link href = 'landing'>
                        <div className = {styles.image}>
                            <Image src = './landing2_sec4_image3.png' style = {{borderRadius: '40px'}} width = '747' height = '714px' />
                        </div>
                    </Link>
                    <p className = {`${styles.text}`}><span style = {{fontWeight: '700'}}>Vencortex        </span>Redesigning a whole new customer experience for idea to investment.</p>
                </div>
                <div data-aos-offset = {-scroll*800} data-aos = 'fade-left' data-aos-duration = '3000'>
                    <Link href = 'landing'>
                        <div className = {styles.image}>
                            <Image src = './landing2_sec2_image4.png' style = {{borderRadius: '40px'}} width = '747' height = '714px' />
                        </div>
                    </Link>
                    <p className = {`${styles.text}`}><span style = {{fontWeight: '700'}}>Vencortex        </span>Redesigning a whole new customer experience for idea to investment.</p>
                </div>
            </div>

        </div>
    )
}