import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section1.module.css'
import { useEffect, useState } from 'react'

export default function Section1(props){

    const [headingNumber, setHeadingNumber] = useState(2)

    useEffect(()=>{
        setInterval(()=>{
            update();
        }, 3000)
    }, [])


    let update = ()=>{
        setHeadingNumber(prev => (prev + 1) % 3)   
    }

    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.imageContainer}`} style = {{zIndex: '1', position: 'absolute', top: '150px', right: '0'}}>
                <Image className = {`${styles.image}`} src = '/../public/venture_animate.png' width = '844px' height = '496px'  layout='fixed'/>
            </div>
            <p style = {{marginTop: '-100px'}} data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.text}`}>WE SHAPE VISIONS</p>
            <p style = {{marginLeft: '-150px', opacity: headingNumber == 2  ? '1' : '0'}} data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.heading}`}>Bring your ideas to life</p>
            <p style = {{marginTop: '0px', opacity: headingNumber == 1  ? '1' : '0'}} data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.heading}`}>Step up your digital transformation</p>
            <p style = {{marginLeft: '150px', marginTop: '0px', marginBottom: '0px', opacity: headingNumber == 0 ? '1' : '0'}} data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.heading}`}>Grow your business</p>
        </div>
    )
}