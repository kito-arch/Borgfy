
import Image from 'next/image'
import { scroll } from '../../../conts_vars'
import Row from '../row/row'
import styles from './section5.module.css'

export default function Section5(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', top: '150px', right: '-12rem'}}>
                <Image src = '/../public/ai_sec6_icon1.png' width = '200px' height = '200px'/>
            </div>

            <div style = {{position: 'absolute', bottom: '0', left: '-12rem'}}>
                <Image src = '/../public/ai_sec6_icon2.png' width = '150px' height = '190px'/>
            </div>

            <p  data-aos-offset = {-800*scroll} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>Working Of Artificial Intelligence</p>
            <p  data-aos-offset = {-8500*scroll} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.text}`}>AI is a complete process to train machines and get better predictions. For the understanding of beginners, AI has 5 different parts, and we the best AI company take care of all of them. To understand our services it is important to understand Ai first so look at its parts.</p>

            <div  data-aos-offset = {-900*scroll} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row color = 'white' number = '1' marginTop = '0' heading = 'Learning' text = 'This is the first aspect of AI as it focuses on collecting data and creating rules to convert data into useful information.These rules are algorithms in computer language. These algorithms provide a step-by-step guide to do a specific task.Computer programs learn in different ways as the human mind does. But there are different methods to train the system.Developers are focusing on making efficient algorithms and models that accept previous data and generate better future results.To improve the learning process, the model is trained on simple data. When it starts to produce the right results it is further trained on more data.You can enter different information into machines including foreign languages, vocabulary, and much more. To improve learning generalization method is used.'/>
            </div>
            <div  data-aos-offset = {-1000*scroll} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row color = 'white' number = '2' marginTop = '50px' heading = 'Reasoning' text = 'The main difference between humans and machines is reasoning. It is something that is limited to humans only five decades ago.But now it is a part of artificial intelligence. This means it becomes easy to give the ability to differentiate between things. Due to this machines can easily differentiate between things. This difference helps to produce more accurate results. Further, these software systems or models differentiate between things using induction and deductive interferences. These techniques ensure to generate exact results.'/>
            </div>
        </div>
    )
}