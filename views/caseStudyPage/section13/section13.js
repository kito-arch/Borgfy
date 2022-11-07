
import Image from 'next/image'
import styles from './section13.module.css'

export default function Section13(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.headingContainer}`}>
                <div style = {{position: 'absolute', left: '-20px', top: '0'}}>
                    <Image src = '/../public/gray_ellipse.png' width = '61px' height = '61px'/>
                </div>
                <p className = {`${styles.heading}`}>Conclusion</p>
                <div style = {{position: 'absolute', right: '-300px', top: '-50px'}}>
                    <Image src = '/../public/case_sec13_icon.png' width = '342px' height = '134px'/>
                </div>
            </div>
            <p className = {`${styles.text}`}>Through our collaboration with we, we made it possible for users to get all the skincare solutions they need from a single app. Also, we made improvements so that the user experience is more of a luxury than a pain point in the process.</p>
        </div>
    )
}