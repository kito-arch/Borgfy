
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Logo from '../logo/logo';
import styles from './navbar.module.css';

export default function Navbar(props){

    const router = useRouter()

    const [zoom, setZoom] = useState("100%")

    useEffect(() => {
        if(router.pathname == "/portfolio"){
            setZoom("85%")
        }
        else{
            setZoom("100%")
        }
    }, [[router.pathname]])


    return(
        <div style = {{zoom: zoom}} className = {`${styles.container} ${styles.center}`}>
            <div className = {`${styles.innerContainer} ${styles.between}`}>
                <div className = {`${styles.leftContainer} ${styles.between}`}>
                    <div style = {{marginTop: '10px'}}>
                        <Logo double = {props.double} logo = {props.logo}/>
                    </div>
                    <div className = {`${styles.leftRightContainer} ${styles.between}`}>
                        <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                            <p className = {`${styles.navLabels}`}>Who We Are</p>
                            <div style = {{marginTop: '-5px'}}>
                                <Image priority  src = {props.double ? '/../public/arrowDown.png' : '/../public/arrowDown.png' }  width = '6px' height = '4px'/>
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
                        <Link href = 'blogs'>
                            <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                                <p className = {`${styles.navLabels}`}>Blog</p>
                                <div style = {{marginTop: '-5px'}}>
                                    <Image priority  src = {props.double ? '/../public/arrowDown.png' : '/../public/arrowDown.png' }  width = '6px' height = '4px'/>
                                </div>
                            </div>
                        </Link>
                        <Link href = 'portfolio'>
                            <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                                <p className = {`${styles.navLabels}`}>Our Work</p>
                                <div style = {{marginTop: '-5px'}}>
                                    <Image priority  src = {props.double ? '/../public/arrowDown.png' : '/../public/arrowDown.png' }  width = '6px' height = '4px'/>
                                </div>
                                {/* <div className = {`${styles.dropdownContainer} ${styles.one}`}>
                                    <Link href = 'portfolio'>
                                        <div className = {`${styles.dropContainer}`}>
                                            <p className = {`${styles.navLabels}`}>Portfolio</p>
                                            <div style = {{display: 'flex', justifyContent: 'center'}}>
                                                <div className = {`${styles.line}`}></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div> */}
                            </div>
                        </Link>
                        <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                            <p className = {`${styles.navLabels}`}>Expertise</p>
                            <div style = {{marginTop: '-5px'}}>
                                <Image priority  src = {props.double ? '/../public/arrowDown.png' : '/../public/arrowDown.png' }  width = '6px' height = '4px'/>
                            </div>
                            <div className = {`${styles.dropdownContainer} ${styles.four}`}>
                                <Link href = 'ai'>
                                    <div className = {`${styles.dropContainer}`}>
                                        <p className = {`${styles.navLabels}`}>AI</p>
                                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                                            <div className = {`${styles.line}`}></div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href = 'ui'>
                                    <div className = {`${styles.dropContainer}`}>
                                        <p className = {`${styles.navLabels}`}>UI/UX</p>
                                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                                            <div className = {`${styles.line}`}></div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href = 'landing'>
                                    <div className = {`${styles.dropContainer}`}>
                                        <p className = {`${styles.navLabels}`}>App Development</p>
                                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                                            <div className = {`${styles.line}`}></div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href = 'fullstack'>
                                    <div className = {`${styles.dropContainer}`}>
                                        <p className = {`${styles.navLabels}`}>Full Stack Development</p>
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
                                <Image priority  src = {props.double ? '/../public/arrowDown.png' : '/../public/arrowDown.png' }  width = '6px' height = '4px'/>
                            </div>
                            <div className = {`${styles.dropdownContainer} ${styles.two}`}>
                                <Link href = 'case2'>
                                    <div className = {`${styles.dropContainer}`}>
                                        <p className = {`${styles.navLabels}`}>Cases Studies</p>
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
            <Link href = 'contact'>
                <div className = {`${styles.chip}`}>
                    <p className = {`${styles.chipLabel}`}>Have an idea?</p>
                </div>
            </Link>
        </div>
    )
}