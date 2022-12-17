
import Image from 'next/image'
import Link from 'next/link'
import styles from './footerBottom.module.css'

export default function FooterBottom(props){
    return(
        <div className = {`${styles.width}`}>
            <div className = {`${styles.container} ${styles.startBetween}`}>
                <Link href = 'landing2'>
                    <div className={styles.ll} style = {{position: 'absolute', top: '160px', left: '30px', cursor: 'pointer', zIndex: '100'}}>
                        <Image priority  src = {props.double ? '../footer_icon.png' : './footer_icon.png'} width = '90px' height = '90px'/>
                    </div>
                </Link>
                <div className = {`${styles.column}`}>
                    <p className = {`${styles.heading}`}>Countries</p>
                    {/* <p className = {`${styles.text}`}>B-78, Near Saket Metro Station, Gate no, 2, New Delhi, 110030, India </p> */}
                    <p className={styles.countries} style = {{marginBottom: '20px', display: 'inline-block', marginRight: '10px', paddingBottom: '10px'}}>India </p>
                    <br className='show_in_mobile' />
                    <Image priority  src = {props.double ? '../india.png' : './india.png'} width = '20px' height = '16px'/>
                    {/* <p style = {{marginBottom: '20px'}} className = {`${styles.text}`}>+91 813 093 7887</p> */}
                    {/* <p className = {`${styles.text}`}>1216, Broadway, 2nd floor New York Down, NY, 10001, USA </p> */}
                    <br/>
                    <p className={styles.countries} style = {{marginBottom: '20px', display: 'inline-block', marginRight: '10px', paddingBottom: '10px'}}>USA </p>
                    <br className='show_in_mobile' />
                    <Image priority  src = {props.double ? '../usa.png' : './usa.png'} width = '20px' height = '16px'/>
                    {/* <p style = {{marginBottom: '20px'}} className = {`${styles.text}`}>+1 646 338 6179</p> */}
                    <br/>
                    <p className={styles.countries} style = {{marginBottom: '20px', display: 'inline-block', marginRight: '10px', paddingBottom: '10px'}}>Saudi Arabia </p>
                    <br className='show_in_mobile' />
                    <Image priority  src = {props.double ? '../sau.png' : './sau.png'} width = '20px' height = '16px'/>
                    {/* <p style = {{marginBottom: '20px'}} className = {`${styles.text}`}>+966 566 986 066</p> */}
                </div>
                {/* <div className = {`${styles.column}`}>
                    <p className = {`${styles.heading}`}>Services</p>
                    <p className = {`${styles.text}`}>Software Development</p>
                    <p className = {`${styles.text}`}>Hardware Development</p>
                    <p className = {`${styles.text}`}>AI</p>
                    <p className = {`${styles.text}`}>Design</p>
                </div> */}
                <div className = {`${styles.column}`}>
                    <p className = {`${styles.heading}`}>Expertise</p>
                    <Link href = 'ai'>
                        <p style = {{cursor: 'pointer'}} className = {`${styles.text}`}>AI</p>
                    </Link>
                    <Link href = 'ui'>
                        <p style = {{cursor: 'pointer'}} className = {`${styles.text}`}>UI/UX</p>
                    </Link>
                    <Link href = 'landing'>
                        <p style = {{cursor: 'pointer'}} className = {`${styles.text}`}>App Development</p>
                    </Link>
                    <Link href = 'fullstack'>
                        <p style = {{cursor: 'pointer'}} className = {`${styles.text}`}>Full Stack Development</p>
                    </Link>
                </div>
                <div className = {`${styles.column}`}>
                    <p className = {`${styles.heading}`}>Technologies</p>
                    <p className = {`${styles.text}`}>React Framework</p>
                    <p className = {`${styles.text}`}>Angular</p>
                    <p className = {`${styles.text}`}>Node JS</p>
                    <p className = {`${styles.text}`}>Java</p>
                    <p className = {`${styles.text}`}>Python</p>
                    <p className = {`${styles.text}`}>Altium PCB Design</p>
                </div>
                <div className = {`${styles.column}`}>
                    <p className = {`${styles.heading}`}>Industries</p>
                    <p className = {`${styles.text}`}>Healthtech</p>
                    <p className = {`${styles.text}`}>Media & Entertainment</p>
                    <p className = {`${styles.text}`}>Real Estate</p>
                    <p className = {`${styles.text}`}>Internet</p>
                </div>
            </div>
        </div>
    )
}
