import { scroll } from '../../../conts_vars'
import Image from 'next/image'
import Card from './components/card/card'
import styles from './section3.module.css'

export default function Section3(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', top: 0, left: '-12rem'}}>
                <Image priority  src = '/../public/journey_eclipse_1.png' width = '499px' height = '609px'/>
            </div>

            <div style = {{position: 'absolute', bottom: 0, right: '-12rem'}}>
                <Image priority  src = '/../public/journey_eclipse_2.png.png' width = '542px' height = '696px'/>
            </div>

            <p data-aos = 'fade-up' data-aos-duration = '3000' data-aos-offset = {-scroll*500} className = {`${styles.heading}`}>Journey of Digital Transformation that We Define</p>
            <p data-aos = 'fade-up' data-aos-duration = '3000' data-aos-offset = {-scroll*500} className = {`${styles.desc}`}>Our incorporation helps scale your cutting-edge ideas through the right fit digital transformation journey. Our growth partners let you become a growth hacker through end-to-end business assistance. We follow a definite way, which is here for your notice:</p>
            <div className = {`${styles.stretchBetween}`}>
                <div data-aos-offset = {-scroll*500} data-aos = 'fade-up' data-aos-duration = '3000' style = {{width: '30%'}}>
                    <Card heading = 'Assessing Market & Trends' desc = 'It’s challenging to survive the cut-throat competition and win leadership in your niche. We make this path easier. Our experienced trade and IT ecosystem experts observe market trends, analyze requirements, validate facts, and then, figure out feasible products with a scope to achieve your mission & vision.'/>
                </div>
                <div data-aos-offset = {-scroll*500} data-aos = 'fade-up' data-aos-duration = '3000' style = {{width: '30%'}}>
                    <Card heading = 'Roadmap Building' desc = 'For this, our growth partners draw a roadmap as per your vision. It covers buy-in from your top-down management, budgeting, business insights assessment, determining your goals and prospects, conducting gap analysis, and finally, defining feasibility as per resources.'/>
                </div>
                <div data-aos-offset = {-scroll*500} data-aos = 'fade-up' data-aos-duration = '3000' style = {{width: '30%'}}>
                    <Card heading = 'Prototyping Your Digital Business' desc = 'In this step, we build capabilities where a design team executes plans to shift to the digital platform via an app or website. We model your business Operandi prior and test on users, which verify that our digital business models are customer-centric.'/>
                </div>
            </div>
            <div className = {`${styles.stretchBetween}`}>
                <div data-aos-offset = {-scroll*500} data-aos = 'fade-up' data-aos-duration = '3000' style = {{width: '30%'}}>
                    <Card heading = 'Remove Gaps for Effective Models' desc = 'Digital ecosystems are all around, which play a vital role in bridging industrial gaps and creating values for customers. We leverage gateways to discover ecosystems within and outside that ease sharing & executing digital business ideas and models.'/>
                </div>
                <div data-aos-offset = {-scroll*500} data-aos = 'fade-up' data-aos-duration = '3000' style = {{width: '30%'}}>
                    <Card heading = 'Break Down Silos' desc = 'Creating & managing a digital organizational structure is not easy. These things require cross-functional collaboration and skilled developers with diverse capabilities. We have these all, which help in developing & integrating a commercial aspect with web/app designs & technologies.'/>
                </div>
                <div data-aos-offset = {-scroll*500} data-aos = 'fade-up' data-aos-duration = '3000' style = {{width: '30%'}}>
                    <Card heading = 'Refine Legacy Systems' desc = 'This is a must-have step for well–established companies that want to shift from legacy business systems. We identify and attempt to modify complex legacy restrictions, which actually prove the biggest barriers in this transformation process. Being a critical resource of information, it is essential to manage them effectively.'/>
                </div>
            </div>
        </div>
    )
}