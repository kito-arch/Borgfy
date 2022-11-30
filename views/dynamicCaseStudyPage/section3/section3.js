
import Image from 'next/image'
import { scroll } from '../../../conts_vars'
import styles from './section3.module.css'


export default function Section3(props){
    return(
        <div className = {`${styles.container}`}>
            {props?.useCase?.brainstorm_image &&
                <div style = {{position: 'absolute', top: '-150px', right: '250px'}}>
                    <Image src = {`http://localhost:3000/uploads/${props?.useCase?.brainstorm_image}`} width = '1083px' height = '633px' />
                </div>
            }
            <div data-aos-offset = {-scroll*600} data-aos = 'fade-up' data-aos-duration = '3000' style = {{position: 'absolute', bottom: '120px', right: '30%'}}>
                <Image src = '../case_sec3_text.png' width = '1000px' height = '80px' />
            </div>
        </div>
    )
}