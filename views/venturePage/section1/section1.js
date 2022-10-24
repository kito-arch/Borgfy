
import Image from 'next/image'
import React from 'react'
import styles from './section1.module.css'

export default function Section1(props){
    return(
        <React.Fragment>
        <div className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>What Is Digital<br/>Transformation?</p>
            <p className = {`${styles.text}`}>Digital transformation is a fundamental shift of the culture, mindset, and various processes of a startup, organization, or SME in terms of using technology. It aims at taking up productivity and performance consistently, which lets you augment revenue and substantially better the customer experience. It makes your business failsafe & future-proof. With this happening, you can gain a competitive edge & reach the topnotch position in your niche.</p>

            <div style = {{position: 'absolute', top: 10, right: 0}}>
                <Image src = '/../public/digital_pc.png' width = '729.5px' height = '694px'/>
            </div>
            <div style = {{position: 'absolute', bottom: 0, left: '-12rem'}}>
                <Image src = '/../public/digital_left_triangle.png' width = '219.47px' height = '221.19px'/>
            </div>
            <div style = {{position: 'absolute', top: 23, right: '-12rem'}}>
                <Image src = '/../public/digital_right_triangle.png' width = '219.47px' height = '221.19px'/>
            </div>
        </div>  
    </React.Fragment>
    )
}