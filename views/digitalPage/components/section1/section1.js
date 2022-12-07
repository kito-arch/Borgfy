
import Image from 'next/image'
import React from 'react'
import styles from './section1.module.css'

export default function Section1(props){
    return(
        <React.Fragment>
        <div className = {`${styles.container}`}>
            <p data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>Venture Studio</p>
            <p data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.text}`}>Evolved at the beginning of the 2000s, Venture studio is a unique business model that makes startups failsafe. Chances are there that they may fall short of resources, strategies, ideas, and funds. This concept saves them. It improves their chances of success. One-time success is of no use. They need sustainable and consistent growth. Venture Studio introduces them to growth leaders who actually stand by their side when they need resources, capital, expertise, and above all, consulting. They show them the way to innovation, which lets the opportunities come in over and over.<br/>A venture studio marks an edge when it comes to overcoming challenges. Here, tailor-made products or solutions are developed to resolve a specific problem. These are actively there when it comes to finding a founder recruiter, mentor, fundraiser, and product developer or problem solver. From scratch to finish, it provides limitless support. You, as a startup, can have financial support for operational & business elevation assistance.</p>
            
            <div style = {{zIndex: '3', position: 'absolute', bottom: '-96.19px', left: '-12rem'}}>
                <Image src = './digital_left_triangle.png' width = '219.47px' height = '221.19px'/>
            </div>
            <div style = {{position: 'absolute', top: 23, right: '-12rem'}}>
                <Image src = './digital_right_triangle.png' width = '219.47px' height = '221.19px'/>
            </div>
        </div>  
    </React.Fragment>
    )
}