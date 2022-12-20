
import Image from "next/image";
import { myscroll, mobscroll } from "../../../conts_vars";
import styles from './section8.module.css'


export default function Section8(props){
    return(
        <div className = {`${styles.container}`}>

            <div className='hide_in_mobile' style = {{zIndex: '10', position: 'absolute', right: '0rem', top: '350px'}}>
                <Image priority  src = './case_right_hand.png' width = '158px' height = '185px' />
            </div>

            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1800} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.headingContainer}`}>
                <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                    <Image priority  src = './gray_ellipse.png' width = '61px' height = '61px'/>
                </div>
                <p className = {`${styles.heading}`}>Approach</p>
            </div>
            <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1800} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.text}`}>{props?.useCase?.approach_text}</p>


            <div className = {`${styles.centerCenter}`}>
                {props?.useCase?.approach_image1 &&
                    <Image priority  src = {`https://admin.borgfy.com/uploads/${props?.useCase?.approach_image1}`} width = '1222px' height = '591px'/>
                }
            </div>

            <div className = {`${styles.centerCenter}`}>
                <div style = {{width: '1222px', marginTop: '50px'}} className = {`${styles.stretchBetween}`}>
                    {props?.useCase?.approach_image2 &&
                        <Image priority  src = {`https://admin.borgfy.com/uploads/${props?.useCase?.approach_image2}`} width = '591px' height = '600px'/>
                    }
                    {props?.useCase?.approach_image3 &&
                        <Image priority  src = {`https://admin.borgfy.com/uploads/${props?.useCase?.approach_image3}`} width = '591px' height = '600px'/>
                    }
                </div>
            </div>
        </div>
    )
}