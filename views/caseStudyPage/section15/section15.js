
import Image from 'next/image'
import styles from './section15.module.css'

export default function Section15(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>The Outcomes</p>
            <div className = {`${styles.centerCenter}`}>
                <div className = {`${styles.stretchBetween}`}>
                    <div style = {{position: 'relative'}}> 
                        <p className = {`${styles.text}`}>$10M</p>
                        <p className = {`${styles.subtext}`}>Total Funding Raised</p>
                        <div style = {{position: 'absolute', left: '0', top: '90px'}}>
                            <Image src = '/../public/case_sec15_underline.png' width = '171px' height = '20px' />
                        </div>
                    </div>
                    <div style = {{position: 'relative'}}> 
                        <p className = {`${styles.text}`}>25%</p>
                        <p className = {`${styles.subtext}`}>Onboarding Increased</p>
                        <div style = {{position: 'absolute', left: '0', top: '90px'}}>
                            <Image src = '/../public/case_sec15_underline.png' width = '171px' height = '20px' />
                        </div>
                    </div>
                    <div style = {{position: 'relative'}}> 
                        <p className = {`${styles.text}`}>300%</p>
                        <p className = {`${styles.subtext}`}>Revenue increased</p>
                        <div style = {{position: 'absolute', left: '0', top: '90px'}}>
                            <Image src = '/../public/case_sec15_underline.png' width = '171px' height = '20px' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}