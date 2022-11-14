
import Image from 'next/image'
import styles from './section1.module.css'

export default function Section1(props){
    return(
        <div className = {`${styles.container}`}>
            <div style = {{position: 'absolute', top: 23, right: '-12rem'}}>
                <Image src = '/../public/case_sec1_image1.png' width = '219.47px' height = '221.19px'/>
            </div>
            <div style = {{position: 'absolute', bottom: '70px', left: '-12rem'}}>
                <Image src = '/../public/case_sec1_imag2.png' width = '189px' height = '320px'/>
            </div>
            <div style = {{position: 'absolute', top: '-60px', left: '-12rem'}}>
                <Image src = '/../public/case_sec1_ellipse.png' width = '650px' height = '650px'/>
            </div>
            <div style = {{position: 'absolute', bottom: '-96.19px', right: '-12rem'}}>
                <Image src = '/../public/case_sec1_ellipse2.png' width = '500px' height = '500px'/>
            </div>

            <div data-aos-offset = "-300" data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.startBetween}`}>
                <p className = {`${styles.text}`}>ISHFAR VR<br/><span style = {{fontWeight: '200'}}>New Delhi,<br/>India</span></p>
                <p className = {`${styles.heading}`}>Acheive your<br/>Desired Look</p>
            </div>
        </div>
    )
}