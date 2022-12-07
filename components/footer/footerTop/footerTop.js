import Image from 'next/image' 
import Link from 'next/link'
import React from 'react'

import styles from './footerTop.module.css'
export default function FooterTop(props){
    return(
        <div className = {`${styles.container} ${styles.startBetween}`}>
            <div style = {{position: 'absolute', top: '-100px', right: '-12rem'}}>
                <Image src = {props.double ? '../hand.png' : './hand.png'} width = '190px' height = '228px'/>
            </div>
            <div style = {{position: 'absolute', top: '200px', left: '-12rem'}}>
                <Image src = {props.double ? '../footer_socials.png' : './footer_socials.png'} width = '2500px' height = '300px'/>
            </div>

            <Link href = "https://www.facebook.com/borgfy">
                <div style = {{cursor: 'pointer', position: 'absolute', top: '288px', left: '-93px', width: '121px', height: '100px', zIndex: '1000'}}/>
            </Link>
            <Link href = "https://www.instagram.com/borgfy/">
                <div style = {{cursor: 'pointer', position: 'absolute', top: '296px', left: '331px', width: '153px', height: '117px', zIndex: '1000'}}/>
            </Link>
            <Link href = "">
                <div style = {{cursor: 'pointer', position: 'absolute', top: '220px', left: '799px', width: '143px', height: '118px', zIndex: '1000'}}/>
            </Link>
            <Link href = "https://www.linkedin.com/company/borgfy">
                <div style = {{cursor: 'pointer', position: 'absolute', top: '315px', left: '1263px', width: '121px', height: '100px', zIndex: '1000'}}/>
            </Link>
            <Link href = "https://twitter.com/borgfy">
                <div style = {{cursor: 'pointer', position: 'absolute', top: '252px', left: '1586px', width: '155px', height: '127px', zIndex: '1000'}}/>
            </Link>

            <p className = {`${styles.desc}`}>“Be the viewer or be the changer it`s your choice”<br/>Don`t be just  a daydreamer let`s do it and build something great</p>
            <div>
                {!props.contact && 
                <React.Fragment>
                    <p className = {`${styles.have}`}>Have an Idea ?</p>
                    <Link href = 'contact'>
                        <div className = {`${styles.chipContainer}`}>
                            <p className = {`${styles.lets}`}>Lets Connect</p>
                            <Image src = {props.double ? '../arrowRight.png' : './arrowRight.png'} width = '10px' height = '20px'/>
                        </div>
                    </Link>
                </React.Fragment>
                }
            </div>
        </div>
    )
}