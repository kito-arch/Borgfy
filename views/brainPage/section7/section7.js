
import Image from 'next/image'
import { scroll } from '../../../conts_vars'
import styles from './section7.module.css'

export default function(props){
    return(
        <div data-aos-offset = {-1600*scroll} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.container}`}>

            <div style = {{zIndex: '1', position: 'absolute', top: '370px', left: '30%'}}>
                <Image src = './brain_sec7_image.png' width = '734px' height = '450px'/>
            </div>            

            <p className = {`${styles.heading}`}>04. Go To Market Strategy/Customer Acquisition Strategy</p>
            <p style = {{width: 'fit-content', margin: 'auto', marginBottom: '93px'}} className = {`${styles.text}`}>In this phase, we try to find the best possible channels and ways for hunting customers through various acquisition strategies. These are basically of two types-paid and unpaid. Usually, we call them outbound and inbound strategies. </p>

            <div className = {`${styles.stretchBetween}`}>

                <div className = {`${styles.innerContainer}`}>
                    <p className = {`${styles.text} ${styles.button}`}>Paid Channels</p>
                    <p className = {`${styles.text}`}>They consist of ad campaigns on various popular online and offline platforms. Usually, we prefer online methods like Google Ads, LinkedIn ads, FB & Instagram Ads, etc. Apart from them, we prefer PR, News Paper, Radio, TV commercials, Influencer Marketing, etc.</p>
                </div>

                <div className = {`${styles.innerContainer}`}>
                    <p style = {{marginLeft: 'auto'}} className = {`${styles.text} ${styles.button}`}>Organic Channels</p>
                    <p className = {`${styles.text}`}>This method at the initial phase of getting traction is slower. But gradually, it creates a solid foundation for your brand presence in the online world. It includes blogging, social selling on platforms like LinkedIn, Twitter, Instagram, SEO, Quora, Webinar, Events, Cold Calling, Emailing, etc.</p>
                </div>

            </div>


            <div style = {{margin: 'auto', marginTop: '200px', width: '40%', textAlign: 'center'}}>
                <div style = {{width: '100%'}} className = {`${styles.innerContainer}`}>
                    <p style = {{marginLeft: 'auto', marginRight: 'auto'}} className = {`${styles.text} ${styles.button}`}>Branding Communication</p>
                    <p className = {`${styles.text}`}>
                        This is the strategy of reflecting your vision and identity toward your audience. Simply say, it includes website, logo, color tone, thought leadership, storytelling, etc. 
                        <br/><br/>Once people start recognizing you by your logo, it implies that you have achieved branding tag and product-market fit. 
                    </p>
                </div>
            </div>

        </div>
    )
}