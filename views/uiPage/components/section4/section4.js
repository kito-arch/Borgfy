import { myscroll, mobscroll } from '../../../../conts_vars'
import Image from 'next/image'
import styles from './section4.module.css'

export default function Section4(props){
    return(
        <div className = {`${styles.outerContainer}`}>
            <div className = {`${styles.container}`}>

                <Image priority  src = './ui_sec4_back.jpg' width = '1537px' height = '691px' layout = 'fill'/>

                <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1000} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.innerContainer}`}>
                    <div className = {styles.tCon} style = {{width: '30%', zIndex: '10', marginRight: '3%'}}>
                        <p className = {`${styles.heading}`}>Analysis</p>
                        <p className = {`${styles.text}`}>By collecting all information about your needs and discussing it thoroughly, we ensure there is no scope of error.</p>
                    </div>

                    <div className = {styles.tCon} style = {{width: '30%', zIndex: '10', marginRight: '3%'}}>
                        <p className = {`${styles.heading}`}>Mapping Our User Journey</p>
                        <p className = {`${styles.text}`}>We analyze your target audience and help you prevent making any false assumptions.</p>
                    </div>

                    <div className = {styles.tCon} style = {{width: '30%', zIndex: '10', marginRight: '3%'}}>
                        <p className = {`${styles.heading}`}>Sketching & Wireframe</p>
                        <p className = {`${styles.text}`}>Wireframing will let you outline the site's basic structure and explore new ideas.</p>
                    </div>
                </div>

                <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1000} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.innerContainer}`}>
                    <div className = {styles.tCon} style = {{width: '30%', zIndex: '10', marginRight: '3%'}}>
                        <p className = {`${styles.heading}`}>Prototyping</p>
                        <p className = {`${styles.text}`}>We test your ideas before they are fully developed to provide the best user experience.</p>
                    </div>

                    <div className = {styles.tCon} style = {{width: '30%', zIndex: '10', marginRight: '3%'}}>
                        <p className = {`${styles.heading}`}>Validation & Testing</p>
                        <p className = {`${styles.text}`}>The final step is to test the final product and check all prototypes, software products, and service offering to build a solid design.</p>
                    </div>
                </div>



            </div>
        </div>
    )
}