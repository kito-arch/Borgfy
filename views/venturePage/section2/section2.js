
import Image from 'next/image'
import styles from './section2.module.css'

export default function Section2(props){
    return(
        <div className = {`${styles.container}`}>
            <div data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.innerContainer}`}>
                <p className = {`${styles.heading}`}>Why Does A Business Require Digital Transformation?</p>
                <p className = {`${styles.text}`}>
                    This is a digital era where people interact with technology to seek products, services, or any information. They use the internet to reach, communicate, and buy anything through smart devices. Moreover, the global digital transformation market is projected to reach a value of USD 2744.68 billion at a CAGR of 17.42% by 2026.
                    <br/><br/>Businesses leveraging digital products and services are far more successful than that paper-based companies. They are able to effectively integrate automation with their business processes, which let them centralize their data and improve team collaboration. Digital technologies like data analytics, artificial intelligence (AI), or blockchain turn workflows better and efficiency touches new heights. They win scalability, as the outcome from faster TAT is beyond expectations. 
                    <br/><br/>Startups, manufacturing, SMEs, etc. firms experience a growing impact, as these enterprises together with IT ecosystems develop capacities to draw new and prolific opportunities. They become able to leverage the power of innovative technologies like Cloud, Big Data, mobile, and digital products by developing and integrating next-gen solutions. With this happening, any industry, small scale, or Fintech companies ensure scalability, feasibility, and limitless support to customers.
                    <br/><br/>In short, digital transformation lets you accelerate your pace of growth by creating new revenue opportunities.   
                </p>
            </div>
            <div style = {{position: 'absolute', top: '-4px', left: '-12rem', zIndex: '1', height: '100%', overflowY: 'hidden'}}>
                <Image priority  src = '/../public/digital_music_back_edited.png' width = '2000px' height = '930px'/>
            </div>
        </div>  
    )
}