
import Image from "next/image";
import { scroll } from "../../../conts_vars";
import styles from './section5.module.css'

export default function Section5(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', top: '100px', left: '-12rem'}}>
                <Image priority  src = '/../public/about_sec5_ellipse1.png' width = '250px' height = '300px'/>
            </div>

            <div style = {{position: 'absolute', bottom: '-160px', right: '-60px'}}>
                <Image priority  src = '/../public/about_sec5_ellipse2.png' width = '400px' height = '350px'/>
            </div>

            <div style = {{position: 'absolute', bottom: '-100px', left: '-50px'}}>
                <Image priority  src = '/../public/about_sec5_semi.png' width = '204px' height = '204px'/>
            </div>

            <p data-aos-offset = {-900*scroll} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>Why we different from others</p>
            <p data-aos-offset = {-900*scroll} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.text}`}>This revolutionary business model works on promoting or encouraging startups that have the potential to grow. Building an innovative business model from scratch is challenging. So, startups acquisition is favored under the venture studio model.<br/>Here is how it works. </p>

            <div style = {{marginBottom: '200px'}} className = {`${styles.centerCenter}`}>

                <div className = {`${styles.stretchBetween}`}>
                    <div data-aos-offset = {-1000*scroll} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.single}`}>
                        <Image priority  src = '/../public/about_sec5_image2.png' width = '119px' height = '119px'/>
                        <p className = {`${styles.singleText}`}>Skills and Innovative Mindset </p>
                    </div>
                    <div data-aos-offset = {-1000*scroll} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.single}`}>
                        <Image priority  src = '/../public/about_sec5_image2.png' width = '119px' height = '119px'/>
                        <p className = {`${styles.singleText}`}>Transform as Per Market Dynamics </p>
                    </div>
                </div>

            </div>

            <div className = {`${styles.centerCenter}`}>

                <div className = {`${styles.stretchBetween}`}>
                    <div data-aos-offset = {-1200*scroll} data-aos = 'fade-right' data-aos-duration = '3000' style = {{marginLeft: '-30px'}} className = {`${styles.single}`}>
                        <Image priority  src = '/../public/about_sec5_image3.png' width = '55px' height = '92px'/>
                        <p className = {`${styles.singleText}`}>Research & Make It Sustainable </p>
                    </div>
                    <div data-aos-offset = {-1200*scroll} data-aos = 'fade-left' data-aos-duration = '3000' style = {{paddingRight: '100px'}} className = {`${styles.single}`}>
                        <Image priority  src = '/../public/about_sec5_image4.png' width = '76px' height = '76px'/>
                        <p className = {`${styles.singleText}`}>Scalability & Progress</p>
                    </div>
                </div>

            </div>
        </div>
    )
}