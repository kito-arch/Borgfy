
import Image from 'next/image'
import styles from './section5.module.css'

export default function Section5(props){
    return(
        <div className = {`${styles.container}`}>
            <div>
                <div className = {`${styles.headingContainer}`}>
                    <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                        <Image src = '/../public/gray_ellipse.png' width = '61px' height = '61px'/>
                    </div>
                    <p className = {`${styles.heading}`}>Problem</p>
                </div>
                <p className = {`${styles.text}`}>The targeted audience couldn't find a convenient way to analyze their skin and get regular updates on it. Also, they wanted a quick fix for the information gap they are facing. Users claimed they are often unaware of what type of skin care products they should use, and how they would affect their skin.</p>
            </div>
            <Image src = '/../public/case_sec3_image.png' width = '646px' height = '530px'/>
        </div>
    )
}