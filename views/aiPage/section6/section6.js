
import Image from 'next/image'
import Row from '../row/row'
import styles from './section6.module.css'
import { scroll } from '../../../conts_vars'

export default function Section6(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', bottom: '65px', right: '-12rem'}}>
                <Image priority  src = './ai_sec6_dots.png' width = '174px' height = '348px'/>
            </div>

            <div data-aos-offset = {-1200*scroll} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row numberBackgroundColor = '#e6f4ff' color = 'black' number = '3' marginTop = '0' heading = 'Problem-solving' text = {<span>The main component of AI is problem-solving. It helps to solve huge queries in seconds that the human mind will take time to solve.<br/>To efficiently solve the problem AI comprises data. There are different problems to be solved but the right problem-solving algorithm divides the problems into general and specific purposes.<br/>In the case of special-purpose problems solution is tailor-made and exploits some features when the suggested problem is embedded.<br/>On the other side, a general-purpose problem has a variety of issues. Furthermore, this component provides a step-by-step reduction difference between the current state and the goal state.</span>}/>
            </div>
            <div data-aos-offset = {-1300*scroll} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row numberBackgroundColor = '#e6f4ff' color = 'black' number = '4' marginTop = '40px' heading = 'Perception' text = {<span>By using the perception element in the AI you can allow your system to sense whether the object is real or artificial.<br/>The perception process is slow and maintained internally which makes it easy for machines to understand the relationship between objects and their features.<br/>This analysis becomes difficult when you place two same objects in front of the machine. But with better coding and algorithms it is easy to remove all these difficulties.</span>}/>
            </div>
        </div>
    )
}