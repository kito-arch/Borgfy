
import Image from 'next/image';
import Logo from '../logo/logo';
import styles from './navbar.module.css';

export default function Navbar(props){
    return(
        <div className = {`${styles.container} ${styles.center}`}>
            <div className = {`${styles.innerContainer} ${styles.between}`}>
                <div className = {`${styles.leftContainer} ${styles.between}`}>
                    <Logo/>
                    <div className = {`${styles.leftRightContainer} ${styles.between}`}>
                        <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                            <p className = {`${styles.navLabels}`}>Who We Are</p>
                            <Image src = '/../public/arrowDown.png' width = '6px' height = '4px'/>
                        </div>
                        <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                            <p className = {`${styles.navLabels}`}>Services</p>
                            <Image src = '/../public/arrowDown.png' width = '6px' height = '4px'/>
                        </div>
                        <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                            <p className = {`${styles.navLabels}`}>Blog</p>
                            <Image src = '/../public/arrowDown.png' width = '6px' height = '4px'/>
                        </div>
                        <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                            <p className = {`${styles.navLabels}`}>Our Work</p>
                            <Image src = '/../public/arrowDown.png' width = '6px' height = '4px'/>
                        </div>
                        <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                            <p className = {`${styles.navLabels}`}>Expertise</p>
                            <Image src = '/../public/arrowDown.png' width = '6px' height = '4px'/>
                        </div>
                        <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                            <p className = {`${styles.navLabels}`}>Resources</p>
                            <Image src = '/../public/arrowDown.png' width = '6px' height = '4px'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className = {`${styles.chip}`}>
                <p className = {`${styles.chipLabel}`}>Have an idea?</p>
            </div>
        </div>
    )
}