
import Image from 'next/image'
import styles from './section12.module.css'

export default function Section12(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.headingContainer}`}>
                <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                    <Image src = '/../public/gray_ellipse.png' width = '61px' height = '61px'/>
                </div>
                <p className = {`${styles.heading}`}>Visual Output</p>
            </div>
            <div className = {`${styles.startBetween}`}>
                <p className = {`${styles.text}`}>We had to ensure that the interface's components are simple to access, comprehend, and employ in order to facilitate these actions. Therefore, we integrated interaction design, visual design, and information architecture concepts. This includes buttons, text fields, check boxes, radio buttons, drop down lists, list boxes, toggles, and date fields. </p>
                <Image src = '/../public/case_sec12_image.png' width = '799px' height = '455px' />
            </div>
        </div>
    )
}