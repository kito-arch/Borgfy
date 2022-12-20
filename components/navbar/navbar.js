
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';
import Logo from '../logo/logo';
import styles from './navbar.module.css';

export default function Navbar(props){

    const router = useRouter()

    const [zoom, setZoom] = useState("100%")

    const [mobMenu, setMobMenu] = useState(false)

    useEffect(() => {
        if(router.pathname == "/portfolio"){
            setZoom("85%")
        }
        else{
            setZoom("100%")
        }
    }, [[router.pathname]])

    const [who, setWho] = useState(false)
    const [blog, setBlog] = useState(false)
    const [our, setOur] = useState(false)
    const [exp, setExp] = useState(false)
    const [res, setRes] = useState(false)


    return(
        <React.Fragment>

            <div style = {{zoom: zoom}} className = {`${styles.container} ${styles.center}`}>
                <div className = {`${styles.innerContainer} ${styles.between}`}>
                    <div className = {`${styles.leftContainer} ${styles.between}`}>
                        <div className='hide_in_mobile' style = {{marginTop: '10px'}}>
                            <Logo double = {props.double} logo = {props.logo}/>
                        </div>
                        <div className={`${styles.fle} show_in_mobile`} style = {{marginTop: '10px', justifyContent: 'center', alignItems: 'center'}}>
                            <div style = {{marginRight: '15px'}} onClick={()=>{setMobMenu(true)}} className='show_in_mobile'>
                                <Image src = './ham_icon.png' width = '20px' height = '20px' />
                            </div>
                            <Logo double = {props.double} logo = {props.logo}/>
                        </div>
                        <div className = {`${styles.leftRightContainer} ${styles.between} hide_in_mobile`}>
                            <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                                <p className = {`${styles.navLabels}`}>Who We Are</p>
                                <div style = {{marginTop: '-5px'}}>
                                    <Image priority  src = {props.double ? '../arrowDown.png' : './arrowDown.png' }  width = '6px' height = '4px'/>
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
                                        <Image priority  src = {props.double ? '../arrowDown.png' : './arrowDown.png' }  width = '6px' height = '4px'/>
                                    </div>
                                </div>
                            </Link>
                            <Link href = 'portfolio'>
                                <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                                    <p className = {`${styles.navLabels}`}>Our Work</p>
                                    <div style = {{marginTop: '-5px'}}>
                                        <Image priority  src = {props.double ? '../arrowDown.png' : './arrowDown.png' }  width = '6px' height = '4px'/>
                                    </div>
                                </div>
                            </Link>
                            <div className = {`${styles.navLabelContainer} ${styles.between}`}>
                                <p className = {`${styles.navLabels}`}>Expertise</p>
                                <div style = {{marginTop: '-5px'}}>
                                    <Image priority  src = {props.double ? '../arrowDown.png' : './arrowDown.png' }  width = '6px' height = '4px'/>
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
                                    <Image priority  src = {props.double ? '../arrowDown.png' : './arrowDown.png' }  width = '6px' height = '4px'/>
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
                <div className = 'hide_in_mobile'>
                    <Link href = 'contact'>
                        <div className = {`${styles.chip}`}>
                            <p className = {`${styles.chipLabel}`}>Have an idea?</p>
                        </div>
                    </Link>
                </div>
            </div>


            <div style = {{left: mobMenu ? '0vw' : '-100vw'}} className={styles.mobMenuContainer}>
                <div onClick={()=>{setMobMenu(false)}} className={styles.cross}>
                    <p style = {{margin: '0'}} className = {`${styles.navLabels}`}>X</p>
                </div>
                <div>

                    <div  style = {{height: who ? '71px' : '13.6px' ,overflowY: 'hidden', transition: 'all 0.3s linear', marginBottom: '50px'}}>
                        <div onClick={()=>{setWho(prev => !prev)}} style = {{marginBottom: '10px'}} className = {`${styles.between}`}>
                            <p className = {`${styles.navLabels} ${styles.bigger}`}>Who We Are</p>
                            <div style = {{marginTop: '-5px'}}>
                                <Image priority  src = {props.double ? '../arrowDown.png' : './arrowDown.png' }  width = '6px' height = '4px'/>
                            </div>
                        </div>
                        <Link href = 'about'>
                            <div style = {{marginBottom: '10px', marginLeft: '10px'}}>
                                <p className = {`${styles.navLabels} ${styles.bigger}`}>About Us</p>
                                <div style = {{display: 'flex', justifyContent: 'center'}}>
                                    <div className = {`${styles.line}`}></div>
                                </div>
                            </div>
                        </Link>
                        <Link href = 'contact'>
                            <div style = {{marginBottom: '10px', marginLeft: '10px'}}>
                                <p className = {`${styles.navLabels} ${styles.bigger}`}>Contact Us</p>
                                <div style = {{display: 'flex', justifyContent: 'center'}}>
                                    <div className = {`${styles.line}`}></div>
                                </div>
                            </div>
                        </Link>
                    </div>


                    <Link href = 'blogs'>
                        <div style = {{overflowY: 'hidden', transition: 'all 0.3s linear', marginBottom: '50px'}}>
                                <div className = {`${styles.between}`}>
                                    <p className = {`${styles.navLabels} ${styles.bigger}`}>Blog</p>
                                </div>
                        </div>
                    </Link>

                    <Link href = 'portfolio'>
                        <div style = {{overflowY: 'hidden', transition: 'all 0.3s linear', marginBottom: '50px'}}>
                                <div className = {`${styles.between}`}>
                                    <p className = {`${styles.navLabels} ${styles.bigger}`}>Our Work</p>
                                </div>
                        </div>
                    </Link>


                    <div  style = {{height: exp ? '142px' : '13.6px' ,overflowY: 'hidden', transition: 'all 0.3s linear', marginBottom: '50px'}}>
                        <div onClick={()=>{setExp(prev => !prev)}} style = {{marginBottom: '10px'}} className = {`${styles.between}`}>
                            <p className = {`${styles.navLabels} ${styles.bigger}`}>Expertise</p>
                            <div style = {{marginTop: '-5px'}}>
                                <Image priority  src = {props.double ? '../arrowDown.png' : './arrowDown.png' }  width = '6px' height = '4px'/>
                            </div>
                        </div>
                        <Link href = 'ai'>
                            <div style = {{marginBottom: '10px', marginLeft: '10px'}}>
                                <p className = {`${styles.navLabels} ${styles.bigger}`}>AI</p>
                                <div style = {{display: 'flex', justifyContent: 'center'}}>
                                    <div className = {`${styles.line}`}></div>
                                </div>
                            </div>
                        </Link>
                        <Link href = 'ui'>
                            <div style = {{marginBottom: '10px', marginLeft: '10px'}}>
                                <p className = {`${styles.navLabels} ${styles.bigger}`}>UI/UX</p>
                                <div style = {{display: 'flex', justifyContent: 'center'}}>
                                    <div className = {`${styles.line}`}></div>
                                </div>
                            </div>
                        </Link>
                        <Link href = 'landing'>
                            <div style = {{marginBottom: '10px', marginLeft: '10px'}}>
                                <p className = {`${styles.navLabels} ${styles.bigger}`}>App Development</p>
                                <div style = {{display: 'flex', justifyContent: 'center'}}>
                                    <div className = {`${styles.line}`}></div>
                                </div>
                            </div>
                        </Link>
                        <Link href = 'fullstack'>
                            <div style = {{marginBottom: '10px', marginLeft: '10px'}}>
                                <p className = {`${styles.navLabels} ${styles.bigger}`}>Full Stack Development</p>
                                <div style = {{display: 'flex', justifyContent: 'center'}}>
                                    <div className = {`${styles.line}`}></div>
                                </div>
                            </div>
                        </Link>
                    </div>


                    <div  style = {{height: res ? '71px' : '13.6px' ,overflowY: 'hidden', transition: 'all 0.3s linear'}}>
                        <div onClick={()=>{setRes(prev => !prev)}} style = {{marginBottom: '10px'}} className = {`${styles.between}`}>
                            <p className = {`${styles.navLabels} ${styles.bigger}`}>Resources</p>
                            <div style = {{marginTop: '-5px'}}>
                                <Image priority  src = {props.double ? '../arrowDown.png' : './arrowDown.png' }  width = '6px' height = '4px'/>
                            </div>
                        </div>
                        <Link href = 'case2'>
                            <div style = {{marginBottom: '10px', marginLeft: '10px'}}>
                                <p className = {`${styles.navLabels} ${styles.bigger}`}>Case Studies</p>
                                <div style = {{display: 'flex', justifyContent: 'center'}}>
                                    <div className = {`${styles.line}`}></div>
                                </div>
                            </div>
                        </Link>
                        <Link href = 'blogs'>
                            <div style = {{marginBottom: '10px', marginLeft: '10px'}}>
                                <p className = {`${styles.navLabels} ${styles.bigger}`}>Blogs</p>
                                <div style = {{display: 'flex', justifyContent: 'center'}}>
                                    <div className = {`${styles.line}`}></div>
                                </div>
                            </div>
                        </Link>
                    </div>



                        
                       
                </div>    
            </div>
        </React.Fragment>
    )
}