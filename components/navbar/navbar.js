
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../logo/logo';
import styles from './navbar.module.css';

export default function Navbar(props){
    return(
        <div className = {`${styles.container} ${styles.center}`}>
            <div className = {`${styles.innerContainer} ${styles.between}`}>
                <div className = {`${styles.leftContainer} ${styles.between}`}>
                    <div>
                        <Logo logo = {props.logo}/>
                    </div>
                    <div className = {`${styles.leftRightContainer} ${styles.between}`}>
                        <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                            <p className = {`${styles.navLabels}`}>Who We Are</p>
                            <div style = {{marginTop: '-5px'}}>
                                <Image src = './arrowDown.png' width = '6px' height = '4px'/>
                            </div>
                            <div className = {`${styles.dropdownContainer} ${styles.two}`}>
                                <Link href = 'about'>
                                    <div className = {`${styles.dropContainer}`}>
                                        <p className = {`${styles.navLabels}`}>About Us</p>
                                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                                            <div className = {`${styles.line}`}></div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href = 'contact'>
                                    <div className = {`${styles.dropContainer}`}>
                                        <p className = {`${styles.navLabels}`}>Contact Us</p>
                                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                                            <div className = {`${styles.line}`}></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                            <p className = {`${styles.navLabels}`}>Services</p>
                            <div style = {{marginTop: '-5px'}}>
                                <Image src = './arrowDown.png' width = '6px' height = '4px'/>
                            </div>
                        </div>
                        <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                            <p className = {`${styles.navLabels}`}>Blog</p>
                            <div style = {{marginTop: '-5px'}}>
                                <Image src = './arrowDown.png' width = '6px' height = '4px'/>
                            </div>
                        </div>
                        <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                            <p className = {`${styles.navLabels}`}>Our Work</p>
                            <div style = {{marginTop: '-5px'}}>
                                <Image src = './arrowDown.png' width = '6px' height = '4px'/>
                            </div>
                            <div className = {`${styles.dropdownContainer} ${styles.one}`}>
                                <Link href = 'portfolio'>
                                    <div className = {`${styles.dropContainer}`}>
                                        <p className = {`${styles.navLabels}`}>Portfolio</p>
                                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                                            <div className = {`${styles.line}`}></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                            <p className = {`${styles.navLabels}`}>Expertise</p>
                            <div style = {{marginTop: '-5px'}}>
                                <Image src = './arrowDown.png' width = '6px' height = '4px'/>
                            </div>
                            <div className = {`${styles.dropdownContainer} ${styles.one}`}>
                                <Link href = 'ai'>
                                    <div className = {`${styles.dropContainer}`}>
                                        <p className = {`${styles.navLabels}`}>AI</p>
                                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                                            <div className = {`${styles.line}`}></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                            <p className = {`${styles.navLabels}`}>Resources</p>
                            <div style = {{marginTop: '-5px'}}>
                                <Image src = './arrowDown.png' width = '6px' height = '4px'/>
                            </div>
                            <div className = {`${styles.dropdownContainer} ${styles.three}`}>
                                <Link href = 'case'>
                                    <div className = {`${styles.dropContainer}`}>
                                        <p className = {`${styles.navLabels}`}>Use Cases</p>
                                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                                            <div className = {`${styles.line}`}></div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href = 'case2'>
                                    <div className = {`${styles.dropContainer}`}>
                                        <p className = {`${styles.navLabels}`}>Cases</p>
                                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                                            <div className = {`${styles.line}`}></div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href = 'blogs'>
                                    <div className = {`${styles.dropContainer}`}>
                                        <p className = {`${styles.navLabels}`}>Blogs</p>
                                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                                            <div className = {`${styles.line}`}></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
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