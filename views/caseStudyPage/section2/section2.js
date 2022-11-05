
import Image from 'next/image'
import styles from './section2.module.css'

export default function Section2(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.centerCenter}`}>
                <div className = {`${styles.stretchStart}`}>
                    <div className = {`${styles.column}`}>
                        <div>
                            <p className = {`${styles.heading}`}>Our Contribution</p>
                            <p className = {`${styles.text}`}>User research, UI design, Interaction design, Prototyping</p>
                        </div>
                        <div>
                            <p className = {`${styles.heading}`}>Timeline</p>
                            <p className = {`${styles.text}`}>2022</p>
                        </div>
                        <div>
                            <p className = {`${styles.heading}`}>Interested</p>
                        </div>
                    </div>
                    <Image src = '/../public/case_sec2_image.png' width = '566px' height = '349px'/>
                </div>
            </div>
        </div>
    )
}