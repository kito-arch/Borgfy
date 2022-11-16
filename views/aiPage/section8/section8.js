
import Image from 'next/image'
import { scroll } from '../../../conts_vars'
import styles from './section8.module.css'

export default function Section8(props){
    return(
        <div className = {`${styles.container}`}>
        
            <div style = {{position: 'absolute', top: '450px', left: '-150px'}}>
                <Image src = '/../public/ai_sec8_icon1.png' width = '300px' height = '314px'/>
            </div>
            <div style = {{position: 'absolute', top: '800px', right: '-150px'}}>
                <Image src = '/../public/ai_sec8_icon2.png' width = '250px' height = '250px'/>
            </div>
            <div style = {{position: 'absolute', bottom: '130px', left: '-150px'}}>
                <Image src = '/../public/ai_sec8_icon4.png' width = '200px' height = '200px'/>
            </div>
            <div style = {{position: 'absolute', bottom: '60px', right: '-150px'}}>
                <Image src = '/../public/ai_sec8_icon5.png' width = '300px' height = '314px'/>
            </div>


            <div data-aos-offset = {-1500+scroll} data-aos = 'fade-up' data-aos-duration = '1000'>
                <p className = {`${styles.heading}`}>Tools We Use</p>

                <div style = {{marginBottom: '73px'}} className = {`${styles.centerBetween}`}>

                    <Image src = '/../public/ai_sec8_com1.png' width = '353px' height = '144px' />
                    <Image src = '/../public/ai_sec8_com2.png' width = '296px' height = '159px' />
                    <Image src = '/../public/ai_sec8_com3.png' width = '307px' height = '287px' />
                    <Image src = '/../public/ai_sec8_com4.png' width = '370px' height = '127px' />

                </div>
            </div>

            <div data-aos-offset = {-1700+scroll} data-aos = 'fade-up' data-aos-duration = '1000'>
                <p style = {{marginBottom: '50px'}} className = {`${styles.heading}`}>How AI Brought Difference in the Industry</p>
                <p style = {{width: '1305px', margin: 'auto'}} className = {`${styles.text}`}>Due to the amazing developments, AI solutions brought a huge difference. Following are the best examples of AI that helps vendors to sell their services in a good manner.<br/>We start with Chatbots because they are present everywhere. Almost all the latest websites have the facility of chatbots. These are efficient communication systems that provide better analytical information to online visitors.</p>
            </div>

            <div className = {`${styles.stretchBetween}`}>
                <div data-aos-offset = {-1900+scroll} data-aos = 'fade-right' data-aos-duration = '1000' style = {{width: '45%'}}>
                    <div style = {{position: 'relative'}}>

                    <div style = {{position: 'absolute', top: '8px', left: '320px'}}>
                        <Image src = '/../public/ai_sec8_icon3.png' width = '68px' height = '68px'/>
                    </div>

                        <p className = {`${styles.blueHeading}`}>Ecommerce</p>
                    </div>
                    <p style = {{textAlign: 'left', marginBottom: '10px'}} className = {`${styles.text}`}>Now comes the use of AI in eCommerce. With the use of AI, it becomes easy to add products by recommending you Products based on your interest  to their respective categories. It also becomes easy to promote business on a wide area.</p>

                    <div className = {`${styles.flex}`}>
                        <Image src = '/../public/ai_sec8_tick.png' width = '34px' height = '40px' />
                        <p className = {`${styles.text} ${styles.tickText}`}>Helps in recommending products</p>
                    </div>

                    <div className = {`${styles.flex}`}>
                        <Image src = '/../public/ai_sec8_tick.png' width = '34px' height = '40px' />
                        <p className = {`${styles.text} ${styles.tickText}`}>Analysis of customer purchasing behaviour</p>
                    </div>

                    <div className = {`${styles.flex}`}>
                        <Image src = '/../public/ai_sec8_tick.png' width = '34px' height = '40px' />
                        <p className = {`${styles.text} ${styles.tickText}`}>Chatbot Customer Support</p>
                    </div>

                </div>
                <div data-aos-offset = {-1900+scroll} data-aos = 'fade-left' data-aos-duration = '1000' style = {{width: '45%'}}>
                    
                    <p className = {`${styles.blueHeading}`}>Fintech</p>
                    <p style = {{textAlign: 'left', marginBottom: '10px'}} className = {`${styles.text}`}>Finance is the leading industry which is transforming rapidly with use of machine learning giving companies better decisions on financial situation like,</p>

                    <div className = {`${styles.flex}`}>
                        <Image src = '/../public/ai_sec8_tick.png' width = '34px' height = '40px' />
                        <p className = {`${styles.text} ${styles.tickText}`}>Banks uses it do determine customer churn rate</p>
                    </div>

                    <div className = {`${styles.flex}`}>
                        <Image src = '/../public/ai_sec8_tick.png' width = '34px' height = '40px' />
                        <p className = {`${styles.text} ${styles.tickText}`}>Loan repaying capabilities</p>
                    </div>

                    <div className = {`${styles.flex}`}>
                        <Image src = '/../public/ai_sec8_tick.png' width = '34px' height = '40px' />
                        <p className = {`${styles.text} ${styles.tickText}`}>Stock Trading helps to predict behavior of market graph</p>
                    </div>

                </div>
            </div>

            <p data-aos-offset = {-2100+scroll} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.boldText}`}>There are other industries like , Pharmaceutical, Marketing and Advertising, Medical Research and many more which are getting huge benefit return Integration of AI</p>

            <p data-aos-offset = {-2200+scroll} data-aos = 'fade-up' data-aos-duration = '1000' style = {{marginTop: '104px', marginBottom: '40px'}} className = {`${styles.heading}`}>Why We are the Best AI Automation Company?</p>
            <div data-aos-offset = {-2200+scroll} data-aos = 'fade-up' data-aos-duration = '1000' style = {{width: 'fit-content', marginLeft: 'auto', marginRight: 'auto'}} className = {`${styles.flex}`}>
                <Image src = '/../public/ai_sec8_tick.png' width = '34px' height = '40px' />
                <p className = {`${styles.text} ${styles.tickText}`}>Stock Trading helps to predict behavior of market graph</p>
            </div>

        </div>
    )
}