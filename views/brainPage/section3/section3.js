
import Image from 'next/image'
import { scroll } from '../../../conts_vars'
import styles from './section3.module.css'

export default function Section3(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', top: '84px', left: '0'}}>
                <Image src = './brain_sec3_image.png' width = '552px' height = '589px'/>
            </div>

            <div style = {{position: 'absolute', top: '400px', right: '0px'}}>
                <Image src = './brain_sec3_image.png' width = '552px' height = '589px'/>
            </div>

            <p data-aos-offset = {-500*scroll} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>03. Whom are we going to sell?</p>
            
            <div className = {`${styles.stretchBetween}`}>
                <div data-aos-offset = {-500*scroll} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.innerContainer}`}>
                    <p className = {`${styles.blueHeading}`}>Ask Burning Questions</p>
                    <p className = {`${styles.text}`}>Every idea needs to be resonating with the current need of the market. In layman's terms, the idea we are building will it be able to achieve commercialization. Ask yourself-will your customers to be ready to buy it? And, so on. A series of questions mark will be put up in your mind.</p>
                </div>

                <div data-aos-offset = {-500*scroll} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.innerContainer}`}>
                    <p className = {`${styles.blueHeading}`}>Product Market Fit</p>
                    <p className = {`${styles.text}`}>To find the answers to all burning questions going on in your mind, you need to be calm and do the proper homework. We need to keep knocking on doors and find out who the right customers are for the product that we are building.  We need to perform proper market research.</p>
                </div>

            </div>

            <div data-aos-offset = {-500*scroll} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.lastContainer}`}>
                <p className = {`${styles.blueHeading}`}>Laser-Focus on Target Audience</p>
                <p className = {`${styles.text}`}> This is the most crucial part of market research where most early-stage startups make mistakes of selling everything to everyone. Not every shoe is the right fit for all feet. Likewise, one answer can never be the feasible answer to diverse queries.<br/>(Pardon-We should avoid spotlighting our negative points, such as what we used to do in our early phase that proved negative. So, I removed the following sentence.)<br/>Demographics and Physiographic are two words that explain what your buyer persona is and the last key point is where to find buyers. People often struggle to find tuna at sea which is full of sharks.</p>
            </div>
        </div>
    )
}