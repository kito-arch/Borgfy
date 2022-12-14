
import Image from 'next/image'
import { myscroll, mobscroll } from '../../../conts_vars'
import styles from './section1.module.css'

export default function Sectoin1(props){
    return(
        <div className = {`${styles.container}`}>

            <div className='hide_in_mobile' style = {{position: 'absolute', top: '250px', right: '0'}}>
                <Image priority  src = './about_sec1_hand.png' width = '192px' height = '192px'/>
            </div>


            <div data-aos-offset = {-300*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-up' data-aos-duration = '3000' style = {{position: 'relative'}}>
                <div className = {`${styles.bell}`} style = {{position: 'absolute', top: '-20px', left: '160px'}}>
                    <Image priority  src = './about_sec1_bell.png' width = '100px' height = '100px'/>
                </div>
                <p className = {`${styles.heading}`}>We Shape Visionary Ideas So That It Connects Dots in People life</p>
                <br/>
            </div>
            <p data-aos-offset = {-300*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.text}`}>Building Amazing products using cutting-edge technologies mixed with physchology</p>
            <br/>
            <div data-aos-offset = {-400*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-up' data-aos-duration = '3000' style = {{position: 'relative'}}>
                <p style = {{marginBottom: '40px'}} className = {`${styles.text}`}>You know why? Cause it sell more</p>
                <div className='hide_in_mobile' style = {{position: 'absolute', top: '0px', right: '670px'}}>
                    <Image priority  src = './about_sec1_emoji.png' width = '35px' height = '35px'/>
                </div>
            </div>
            <div style = {{width: 'fit-content', margin: 'auto'}}>
            <Image priority  src = './about_sec1_image1.png' width = '786' height = '496px'/>
            </div>
            <div className='hide_in_mobile' style = {{position: 'absolute', bottom: '218px', left: '-12rem'}}>
                <Image priority  src = './digital_left_triangle.png' width = '219.47px' height = '221.19px'/>
            </div>
            <div className='hide_in_mobile' style = {{position: 'absolute', top: 23, right: '-12rem'}}>
                <Image priority  src = './digital_right_triangle.png' width = '219.47px' height = '221.19px'/>
            </div>
        </div>
    )
}