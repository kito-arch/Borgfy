
import { scroll } from '../../../conts_vars'
import Row from '../row/row'
import styles from './section7.module.css'

export default function Section7(props){
    return(
        <div data-aos-offset = {-1500*scroll} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.container}`}>
            <Row color = 'white' number = '5' marginTop = '0' heading = 'Language-understanding' text = {<span>Language is a set of signs that helps in communication that's why it is an important component of AI. It uses multiple languages to generate a natural meaning.<br/>The most common human language is English as many people can speak and understand it efficiently.<br/>In the same way, AI models are developed with common languages that humans can understand. So that humans can efficiently run the algorithms to make the machine efficient.</span>}/>
        </div>
    )
}