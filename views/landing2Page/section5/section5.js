
import Image from 'next/image'
import styles from './section5.module.css'

export default function Section5(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.subheading}`}>Where</p>
            <p className = {`${styles.heading}`}>We are best</p>

            <div className = {`${styles.startBetween}`}>
                <div>
                    <p className = {`${styles.subtext}`}>App Development</p>
                    <div className = {`${styles.box}`}>
                        <div>
                            <Image src = '/../public/landing2_sec5_image1.png' width = '261px' height = '261px' />
                        </div>
                        <p className = {`${styles.boxText}`}>We Are Dedicated Engineers Minds Devoted to Innovation, Bringing Sustainable</p>
                        <p className = {`${styles.button}`}>Read More</p>
                    </div>
                </div>

                <div>
                    <p className = {`${styles.subtext}`}>AI Automation</p>
                    <div style = {{marginTop: '200px'}} className = {`${styles.box}`}>
                        <div>
                            <Image src = '/../public/landing2_sec5_image2.png' width = '261px' height = '261px' />
                        </div>
                        <p className = {`${styles.boxText}`}>We Are Dedicated Engineers Minds Devoted to Innovation, Bringing Sustainable</p>
                        <p className = {`${styles.button}`}>Read More</p>
                    </div>
                </div>

                <div>
                    <p className = {`${styles.subtext}`}>UI/UX Design</p>
                    <div className = {`${styles.box}`}>
                        <div style = {{paddingTop: '26px'}}>
                            <Image src = '/../public/landing2_sec5_image3.png' width = '261px' height = '261px' />
                        </div>
                        <p className = {`${styles.boxText}`}>We Are Dedicated Engineers Minds Devoted to Innovation, Bringing Sustainable</p>
                        <p className = {`${styles.button}`}>Read More</p>
                    </div>
                </div>

                <div>
                    <p className = {`${styles.subtext}`}>Full Stack Development</p>
                    <div style = {{marginTop: '200px'}} className = {`${styles.box}`}>
                        <div style = {{paddingTop: '31px'}}>
                            <Image src = '/../public/landing2_sec5_image4.png' width = '261px' height = '261px' />
                        </div>
                        <p className = {`${styles.boxText}`}>We Are Dedicated Engineers Minds Devoted to Innovation, Bringing Sustainable</p>
                        <p className = {`${styles.button}`}>Read More</p>
                    </div>
                </div>
            </div>
        </div>
    )
}