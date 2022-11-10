
import Image from 'next/image'
import styles from './section1.module.css'

export default function Sectoin1(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', top: '250px', right: '0'}}>
                <Image src = '/../public/about_sec1_hand.png' width = '192px' height = '192px'/>
            </div>


            <div style = {{position: 'relative'}}>
                <div style = {{position: 'absolute', top: '-20px', left: '160px'}}>
                    <Image src = '/../public/about_sec1_bell.png' width = '100px' height = '100px'/>
                </div>
                <p className = {`${styles.heading}`}>We Shape Visionary Ideas So That It Connects Dots in People life</p>
                <br/>
            </div>
            <p className = {`${styles.text}`}>Building Amazing products using cutting-edge technologies mixed with physchology</p>
            <br/>
            <div style = {{position: 'relative'}}>
                <p style = {{marginBottom: '40px'}} className = {`${styles.text}`}>You know why? Cause it sell more</p>
                <div style = {{position: 'absolute', top: '0px', right: '670px'}}>
                    <Image src = '/../public/about_sec1_emoji.png' width = '35px' height = '35px'/>
                </div>
            </div>
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