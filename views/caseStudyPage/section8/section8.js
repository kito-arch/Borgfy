
import Image from "next/image";
import { scroll } from "../../../conts_vars";
import styles from './section8.module.css'


export default function Section8(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{zIndex: '10', position: 'absolute', right: '0rem', top: '350px'}}>
                <Image src = '/../public/case_right_hand.png' width = '158px' height = '185px' />
            </div>

            <div data-aos-offset = {scroll-1800} data-aos = 'fade-left' data-aos-duration = '1000' className = {`${styles.headingContainer}`}>
                <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                    <Image src = '/../public/gray_ellipse.png' width = '61px' height = '61px'/>
                </div>
                <p className = {`${styles.heading}`}>Approach</p>
            </div>
            <p data-aos-offset = {scroll-1800} data-aos = 'fade-left' data-aos-duration = '1000' className = {`${styles.text}`}>We worked with this team early in the Discovery phase to define project goals and objectives that would serve as benchmarks for success, including both short- and long-term objectives. Then we moved on to more strategic research, such as persona creation, customer journey mapping, iterating, and testing. </p>


            <div className = {`${styles.centerCenter}`}>
                <Image src = '/../public/case_sec8_image1.png' width = '1222px' height = '591px'/>
            </div>

            <div className = {`${styles.centerCenter}`}>
                <div style = {{width: '1222px', marginTop: '50px'}} className = {`${styles.stretchBetween}`}>
                    <Image src = '/../public/case_sec8_image2.png' width = '591px' height = '600px'/>
                    <Image src = '/../public/case_sec8_image3.png' width = '591px' height = '600px'/>
                </div>
            </div>
        </div>
    )
}