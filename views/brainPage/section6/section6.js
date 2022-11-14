
import Image from 'next/image'
import styles from './section6.module.css'

export default function Section6(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{zIndex: '1', position: 'absolute', bottom: '-100px', right: '-11rem'}}>
                <Image src = '/../public/brain_sec6_image.png' width = '344px' height = '344px'/>
            </div>

            <div className = {`${styles.stretchBetween}`}>

                <div data-aos-offset = "-1700" data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.innerContainer}`}>
                    <p className = {`${styles.heading}`}>Launch</p>
                    <p className = {`${styles.text}`}>
                        Once your idea is inside the development factory, we simultaneously start working with our growth partners to plan a product launch. It is about how it would go through market strategy/market funnel.
                        <br/><br/>Any good startup idea is always scalable and profitable if it is perfectly & strategically delivered to customers. We actually believe what makes entrepreneurship different from an ordinary business is one word, i.e. “Strategy”.
                    </p>
                </div>

                <div data-aos-offset = "-1700" data-aos = 'fade-left' data-aos-duration = '1000' className = {`${styles.innerContainer}`}>
                    <p className = {`${styles.heading}`}>Business Model Strategy</p>
                    <p className = {`${styles.text}`}>
                        Business Model / Revenue Model- We try to determine the best sources of revenue for a startup idea, whether it's b2b or b2c or b2b2c. Upon proper analysis and connection between startup ideas and the right set of business models, we initially evaluate the best possible revenue streams once the product is launched. For example, most apps consist of in-app purchases, ads stream, and subscription models. 
                        <br/><br/>Apart from the revenue model, we also try to create a possible business plan for startups’ growth and financial projects with our business consultant partners. They help entrepreneurs create a concrete and sustainable business model, which automatically gives startups an accelerated kick-start.
                    </p>
                </div>

            </div>
        </div>
    )
}