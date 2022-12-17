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
        setHeadingNumber(prev => (prev + 1) % 3)   
    }

    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.imageContainer} hide_in_mobile`} style = {{zIndex: '1', position: 'absolute', top: '150px', right: '0'}}>
                <Image priority  className = {`${styles.image}`} src = '/../public/venture_animate.png' width = '844px' height = '496px'  layout='fixed'/>
            </div>
            <div data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '3000' style = {{opacity: headingNumber == 0  ? '1' : '0'}}>
                <p style = {{marginTop: '-100px'}} className = {`${styles.text}`}>We SHAPE VISIONS</p>
                <p style = {{marginLeft: '-150px'}} className = {`${styles.heading}`}>Bring your ideas to life</p>
            </div>
            <div className='hide_in_mobile' data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '3000' style = {{opacity: headingNumber == 1  ? '1' : '0'}}>
                <p style = {{marginTop: '-50px', marginLeft: '150px'}} className = {`${styles.text}`}>LEVERAGE INNOVATION</p>
                <p style = {{marginTop: '0px'}} className = {`${styles.heading}`}>Step up your digital transformation</p>
            </div>
            <div className='hide_in_mobile' data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '3000' style = {{opacity: headingNumber == 2  ? '1' : '0'}}>
                <p style = {{marginTop: '100px', marginLeft: '300px'}} className = {`${styles.text}`}>SELL WITH EMPATHY</p>
                <p style = {{marginLeft: '150px', marginTop: '0px', marginBottom: '0px',}} className = {`${styles.heading}`}>Grow your business</p>
            </div>


            <div className='show_in_mobile' data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '3000' style = {{opacity: headingNumber == 1  ? '1' : '0'}}>
                <p style = {{marginTop: '50px', marginLeft: '150px'}} className = {`${styles.text}`}>LEVERAGE INNOVATION</p>
                <p style = {{marginTop: '100px'}} className = {`${styles.heading}`}>Step up your digital transformation</p>
            </div>
            <div className='show_in_mobile' data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '3000' style = {{opacity: headingNumber == 2  ? '1' : '0'}}>
                <p style = {{marginTop: '50px', marginLeft: '300px'}} className = {`${styles.text}`}>SELL WITH EMPATHY</p>
                <p style = {{marginLeft: '150px', marginTop: '100px', marginBottom: '0px',}} className = {`${styles.heading}`}>Grow your business</p>
            </div>
        </div>
    )
}