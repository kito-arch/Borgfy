
import Image from 'next/image'
import { scroll } from '../../../../conts_vars'
import styles from './section3.module.css'

export default function Section3(props){
    return(
        <div className = {`${styles.container}`}>
            <div style = {{position: 'absolute', top: '-50px', right: '-12rem'}}>
                <Image src = '/../public/venture_blue.png' width = '368px' height = '509px'/>
            </div>
            <div style = {{position: 'absolute', top: '170px', left: '-11rem'}}>
                <Image src = '/../public/venture_pink.png' width = '422px' height = '596px'/>
            </div>
            <p data-aos-offset = {scroll-300} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.heading}`}>Corporate Venture Building-A “Co-Creation Model”</p>
            <p data-aos-offset = {scroll-400} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.text}`}>It’s a collaborative model, wherein a number of growth partners work together toward the same mission. Large enterprises leverage the advantages of acquiring talent, ideas, resources, assistance, and funds easily. This happening helps them eliminate various challenges. These gigantic corporate firms can also access hard assets together with soft assets like established brands, data, customer relationships, and industry knowledge. Enriched with these assets, they sail across limited tolerance of uncertainty, risks, failure, and transformation in a faster turnaround.<br/>Undoubtedly, the overall expenditure is lesser if you compare it to set up a business from scratch on its own. You can have an “N” number of opportunities to cultivate a “progressive corporate culture” through an agile execution of the product idea or business intelligence.<br/>Corporate venture studios help with architecting a new business. The startup gets the strength to take risks if required to find a product-market fit in an uncertain environment.  The coalition of growth partners lets it try new things without integrating them closely with core practices. Once it turns to maturity, integrating such challenging things with core practices can be possible.<br/>Besides, the business ideas of incubators get new life with them. The entrepreneurial talent lets them be failsafe over time and attain a strong entrepreneurial culture.</p>
            <p data-aos-offset = {scroll-500} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.heading}`}>Why should a startup choose a venture studio?</p>
            <p data-aos-offset = {scroll-600} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.text}`}>A venture studio is way up to that of other business models. It can actually provide founders with a wide range of services to fast-track the growth, scalability, & opportunities of a new firm or company. Their success rate is 30% higher than any other company. This is a golden era for  Digital Transformation technology-driven startups, especially for the ones that are into AI, IoT, and DLT Using SaaS and Mobile Apps Models. Around 11% of corporate entities are already here in the gig economy.<br/>However, there are four diverse business models, viz Venture Studio, Accelerator, Incubator, and VC. Each of them runs on different concepts.</p>
        </div>
    )
}