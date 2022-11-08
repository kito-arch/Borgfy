
import Image from 'next/image'
import styles from './section1.module.css'

export default function Sectoin1(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>We Shape Visionary Ideas So That It Connects Dots in People life</p>
            <br/>
            <p className = {`${styles.text}`}>Building Amazing products using cutting-edge technologies mixed with physchology</p>
            <br/>
            <p style = {{marginBottom: '40px'}} className = {`${styles.text}`}>You know why? Cause it sell more</p>
            <div style = {{width: 'fit-content', margin: 'auto'}}>
            <Image src = '/../public/about_sec1_image1.png' width = '786' height = '496px'/>
            </div>
            <div style = {{position: 'absolute', bottom: '218px', left: '-12rem'}}>
                <Image src = '/../public/digital_left_triangle.png' width = '219.47px' height = '221.19px'/>
            </div>
            <div style = {{position: 'absolute', top: 23, right: '-12rem'}}>
                <Image src = '/../public/digital_right_triangle.png' width = '219.47px' height = '221.19px'/>
            </div>
        </div>
    )
}