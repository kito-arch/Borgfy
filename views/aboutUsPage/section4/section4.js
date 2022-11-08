
import Image from 'next/image'
import styles from './section4.module.css'

export default function Section4(props){
    return(
        <div className = {`${styles.container}`}>
            <p  className = {`${styles.title}`}>Why should a startup choose a venture studio?</p>
            <p  className = {`${styles.text}`}>A venture studio is way up to that of other business models. It can actually provide founders with a wide range of services to fast-track the growth, scalability, & opportunities of a new firm or company. Their success rate is 30% higher than any other company. This is a golden era for  Digital Transformation technology-driven startups, especially for the ones that are into AI, IoT, and DLT Using SaaS and Mobile Apps Models. Around 11% of corporate entities are already here in the gig economy. However, there are four diverse business models, viz Venture Studio, Accelerator, Incubator, and VC. Each of them runs on different concepts. </p>
            <div style = {{position: 'absolute', top: '-50px', left: '-2rem'}}>
                <Image src = '/../public/about_sec4_circle.png' width = '400px' height = '400px' />
            </div>
            <div style = {{position: 'absolute', bottom: '-150px', right: '-12rem'}}>
                <Image src = '/../public/about_sec4_circle.png' width = '400px' height = '400px' />
            </div>
        </div>
    )
}