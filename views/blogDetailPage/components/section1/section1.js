
import Image from 'next/image'
import styles from './section1.module.css'

export default function Section1(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.innerContainer}`}>
                <div className = {`${styles.leftContainer}`}>
                    <p className = {`${styles.heading}`}>Our Blog</p>
                    <p className = {`${styles.text}`}>Creating a product using full-stack development helps in providing a comprehensive approach towards product development.it helps you deliver your idea at a one place<br/>It also allows in making sure that the end product is highly efficient at the user end. Also, it helps in providing a better management approach towards the backend system processes.</p>
                </div>
                <div className = {`${styles.divider} hide_in_mobile`}></div>
                <div className = {`${styles.rigthContainer} hide_in_mobile`}>
                    <p className = {`${styles.subheading}`}>Title Here</p>
                    <p className = {`${styles.text} ${styles.textMargin}`}>Creating a product using full-stack development helps in providing a ....</p>
                    <div className = {`${styles.horizontalDivider}`}></div>

                    <p className = {`${styles.subheading}`}>Title Here</p>
                    <p className = {`${styles.text} ${styles.textMargin}`}>Creating a product using full-stack development helps in providing a ....</p>
                    <div className = {`${styles.horizontalDivider}`}></div>

                    <p className = {`${styles.subheading}`}>Title Here</p>
                    <p className = {`${styles.text} ${styles.textMargin}`}>Creating a product using full-stack development helps in providing a ....</p>
                    <div className = {`${styles.horizontalDivider}`}></div>

                    <p className = {`${styles.subheading}`}>Title Here</p>
                    <p className = {`${styles.text} ${styles.textMargin}`}>Creating a product using full-stack development helps in providing a ....</p>
                    <div className = {`${styles.horizontalDivider}`}></div>

                </div>
            </div>
        </div>
    )
}