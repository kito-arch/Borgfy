import Image from 'next/image' 
import Link from 'next/link'
import React from 'react'

import styles from './footerTop.module.css'
export default function FooterTop(props){
    return(
        <div className = {`${styles.container} ${styles.startBetween}`}>
            <div style = {{position: 'absolute', top: '-100px', right: '-12rem'}}>
                <Image priority  src = {props.double ? '/../public/hand.png' : '/../public/hand.png'} width = '190px' height = '228px'/>
            </div>
            <div style = {{position: 'absolute', top: '300px', left: '-12rem'}}>
                <Image priority  src = {props.double ? '/../public/footer_line.png' : '/../public/footer_line.png'} width = '2500px' height = '122.68px'/>
            </div>

            

            

            

            

            

            <Link href = "https://www.facebook.com/borgfy">
                <div style = {{position: 'absolute', top: '288px', left: '-13px', cursor: 'pointer'}}>
                    <Image priority  src = '/../public/footer_facebook.png' width = '103px' height = '103px'/>
                </div>
            </Link>
            <Link href = "https://www.instagram.com/borgfy/">
                <div style = {{position: 'absolute', top: '296px', left: '411px', cursor: 'pointer'}}>
                    <Image priority  src = '/../public/footer_insta.png' width = '132px' height = '121px'/>
                </div>
            </Link>
            <Link href = "">
                <div style = {{position: 'absolute', top: '230px', left: '900px', cursor: 'pointer'}}>
                    <Image priority  src = '/../public/footer_pin.png' width = '128.20000000000002px' height = '128.20000000000002px'/>
                </div>
            </Link>
            <Link href = "https://www.linkedin.com/company/borgfy">
                <div style = {{position: 'absolute', top: '315px', left: '1343px', cursor: 'pointer'}}>
                    <Image priority  src = '/../public/footer_linked.png' width = '103px' height = '103px'/>
                </div>
            </Link>
            <Link href = "https://twitter.com/borgfy">
                <div style = {{position: 'absolute', top: '262px', right: '0px', cursor: 'pointer'}}>
                    <Image priority  src = '/../public/footer_twiiter.png' width = '132px' height = '132px'/>
                </div>
            </Link>

            <p className = {`${styles.desc}`}>“Be the viewer or be the changer it`s your choice”<br/>Don`t be just  a daydreamer let`s do it and build something great</p>
            <div>
                {!props.contact && 
                <React.Fragment>
                    <p className = {`${styles.have}`}>Have an Idea ?</p>
                    <Link href = 'contact'>
                        <div className = {`${styles.chipContainer}`}>
                            <p className = {`${styles.lets}`}>Lets Connect</p>
                            <Image priority  src = {props.double ? '/../public/arrowRight.png' : '/../public/arrowRight.png'} width = '10px' height = '20px'/>
                        </div>
                    </Link>
                </React.Fragment>
                }
            </div>
        </div>
    )
}