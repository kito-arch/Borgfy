
import Image from 'next/image'
import styles from './section11.module.css'

export default function Section11(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.startBetween}`}>
                <div className = {`${styles.headingContainer}`}>
                    <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                        <Image src = '/../public/gray_ellipse.png' width = '61px' height = '61px'/>
                    </div>
                    <p className = {`${styles.heading}`}>Style Guide</p>
                </div>
                <p className = {`${styles.text}`}>After our high-fidelity wire frames, we made a design system that contains guidelines for each design element, such as visual identity elements, icons, interface components, and their states, headings, etc.</p>
            </div>

            <div className = {`${styles.centerCenter}`}>
                <Image src = '/../public/case_sec11_image1.png' width = '1222px' height = '591px' />
            </div>

            <div className = {`${styles.centerCenter}`}>
                <div style = {{width: '1222px', marginTop: '50px'}} className = {`${styles.stretchBetween}`}>
                    <Image src = '/../public/case_sec11_image2.png' width = '591px' height = '600px' />
                    <Image src = '/../public/case_sec11_image3.png' width = '591px' height = '600px' />
                </div>
            </div>
        </div>
    )
}