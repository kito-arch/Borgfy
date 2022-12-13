
import Image from 'next/image'
import { scroll } from '../../../conts_vars'
import styles from './section3.module.css'

export default function Section3(props){
    return(
        <div className = {`${styles.container}`}>

            <div className='hide_in_mobile' style = {{position: 'absolute', bottom: '-4px', right: '-100px'}}>
                <Image priority  src = '/../public/ai_sec3_back.png' width = '992px' height = '711px' />
            </div>

            <div  data-aos-offset = {-500*scroll} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.innerContainer}`}>
                <p className = {`${styles.heading}`}>How AI Works</p>
                <p className = {`${styles.text}`}>
                    The hype of AI solutions has increased so much. That's why today every vendor wants to use AI to sell their services and products. Machine learning is the most common form of AI.
                    <br/><br/>To implement AI you need specialized software and hardware. As with the advanced system, it becomes easy to write and train machine learning algorithms.
                    <br/><br/>There are some specific languages that you can use to implement AI. These languages are Python, R, and Java. The basic purpose of an AI machine is to predict future states and match patterns.
                </p>
            </div>
        </div>
    )
}