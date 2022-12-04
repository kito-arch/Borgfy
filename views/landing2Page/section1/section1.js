import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import styles from './section1.module.css'
import { useEffect, useState } from 'react'

export default function Section1(props){

    const [headingNumber, setHeadingNumber] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            update();
        }, 3000)
    }, [])


    let update = ()=>{
        setHeadingNumber(prev => (prev + 1) % 15)
    }

    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.imageContainer}`} style = {{zIndex: '1', position: 'absolute', top: '150px', right: '0'}}>
                <Image className = {`${styles.image}`} src = './venture_animate.png' width = '844px' height = '496px'  layout='fixed'/>
            </div>
            <p data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.text}`}>WE SHAPE VISIONS</p>
            <p style = {{opacity: (headingNumber == 0 || headingNumber == 1 || headingNumber == 2)  ? '1' : '0'}} data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.heading}`}>Bring your ideas to life</p>
            <p style = {{marginTop: '-180px', opacity: (headingNumber == 5 || headingNumber == 6 || headingNumber == 7) ? '1' : '0'}} data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.heading}`}>Step Up your digital transformation</p>
            <p style = {{marginTop: '-265px', marginBottom: '100px', opacity: (headingNumber == 10 || headingNumber == 11 || headingNumber == 12) ? '1' : '0'}} data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.heading}`}>Grow your business</p>
        </div>
    )
}