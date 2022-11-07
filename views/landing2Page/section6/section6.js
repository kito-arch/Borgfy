
import styles from './section6.module.css'

export default function Section6(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.subheading}`}>DELIVERED</p>
            <p className = {`${styles.heading}`}>What our Delivered</p>

            <div className = {`${styles.numberContainer}`}>

                <div>
                    <p className = {`${styles.numberHeading}`}>1.5k+</p>
                    <p className = {`${styles.numberText}`}>Startup Ideas</p>
                    <p className = {`${styles.numberSubText}`}>Evaluated</p>
                </div>

                <div>
                    <p className = {`${styles.numberHeading}`}>105+</p>
                    <p className = {`${styles.numberText}`}>Technology Products</p>
                    <p className = {`${styles.numberSubText}`}>Developed</p>
                </div>

                <div>
                    <p className = {`${styles.numberHeading}`}>30+</p>
                    <p className = {`${styles.numberText}`}>Enterprise / Startup</p>
                    <p className = {`${styles.numberSubText}`}>Clients</p>
                </div>

            </div>

            <div className = {`${styles.howContainer}`}>

                <p className = {`${styles.heading2}`}>How we work?</p>
                <p className = {`${styles.subheading2}`}>Bussiness Model</p>

                <div className = {`${styles.stretchBetween}`}>

                    <div className = {`${styles.boxContainer}`}>
                        <div style = {{backgroundColor: '#A5CEFF'}} className = {`${styles.boxTop}`}>
                            <p className = {`${styles.boxHeading1}`}>As experts in</p>
                            <p className = {`${styles.boxHeading2}`}>Digital Transformation</p>
                            <p className = {`${styles.boxHeading3}`}>we undertake</p>
                        </div>

                        <div className = {`${styles.boxBottom}`}>
                            <div>
                                <ul>
                                    <li><p className = {`${styles.list}`}>Building Digital  Products </p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Scaling Businesses Using Technology & Automation</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Full Stack Product Development</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Helping Entrepreneurs Build Scalable Ideas</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Fast Market Access Through Growth Partners</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Full Funding Assistance</p></li>
                                </ul>
                            </div>
                            <p className = {`${styles.button}`}>Read More</p>
                        </div>
                    </div>

                    <div className = {`${styles.boxContainer}`}>
                        <div style = {{backgroundColor: '#A0FFEE'}} className = {`${styles.boxTop}`}>
                            <p className = {`${styles.boxHeading1}`}>From Inception to Launch we do</p>
                            <p className = {`${styles.boxHeading2}`}>Venture Building</p>
                            <p className = {`${styles.boxHeading3}`}>To Build next level Visionary ideas</p>
                        </div>

                        <div className = {`${styles.boxBottom}`}>
                            <div>
                                <ul>
                                    <li><p className = {`${styles.list}`}>Idea evaluation and brainstorming</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Market and Audience Research</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>MVP Pivoting</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Reiteration and Rectification of Developed Product</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Go To Market Strategy</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Venture  Launch</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Capital Support</p></li>
                                    <br/>
                                    <li><p className = {`${styles.list}`}>Startup Networking Events </p></li>
                                </ul>
                            </div>
                            <p className = {`${styles.button}`}>Read More</p>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
    )
}