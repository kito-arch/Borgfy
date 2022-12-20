
import { myscroll, mobscroll } from '../../../conts_vars'
import styles from './section8.module.css'

export default function Section8(props){
    return(
        <div className = {`${styles.container}`}>

            <p data-aos-offset = {-2100*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>05. Best Sales Resources: If you can sell it, you make it!</p>
            <p data-aos-offset = {-2100*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.text}`}>
                Sales Force is the most important asset of your company, as it is finally responsible for your top funnel efforts, money, time spent on getting customers. Finally, it gets paid from their tight pocket. 
                <br/><br/>“Sales” is not an every-guy game. It's done with diligence, patience, and experience. This is why a good salesperson makes the top 1% of earners. 
            </p>


            <div className = {`${styles.stretchBetween}`}>

                <div data-aos-offset = {-2300*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.innerContainer}`}>
                    <p style = {{marginLeft: 'auto', marginRight: 'auto'}} className = {`${styles.blueHeading}`}>Pivoting</p>
                    <p className = {`${styles.innerText}`}>
                        Testing product with a minimum of 200 users: This stage arrives when you are ready with your pilot launch. It ensures beta testing of your products with your first 200 customers, excluding family members. They always give you good feedback. So, we don't count them.
                        <br/><br/>We choose the “200” count because it is neither too late nor too early to make alterations and gain feedback.
                    </p>
                </div>

                <div data-aos-offset = {-2300*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.innerContainer}`}>
                    <p style = {{marginLeft: 'auto', marginRight: 'auto'}} className = {`${styles.blueHeading}`}>Gaining Feedback</p>
                    <p className = {`${styles.innerText}`}>This phase helps us to note down the pros and cons of the ideas of the first 200 customers. Then, we reiterate and tune the product tweaks to make it finally better for the final launch.</p>
                </div>

            </div>


            <div data-aos-offset = {-2500*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.bottomContainer}`}>
                <p style = {{marginLeft: 'auto', marginRight: 'auto'}} className = {`${styles.blueHeading}`}>Launch Into Market</p>
                <p style = {{width: 'fit-content', margin: 'auto'}} className = {`${styles.bottomContainerText}`}> Wait and Watch - Now comes the time to eat some popcorn! Let's begin the movie!</p>


                <div className = {`${styles.startStart}`}>
                    <p style = {{marginRight: '10px', marginTop: '-4px'}} className = {`${styles.blueHeading}`}>Launch Into Market:</p>
                    <p className = {`${styles.bottomContainerText}`}>Stay consistent with gaining feedback for your product's success and collect the data. Analyze what customers are speaking and directing you towards and reiterate the loop to create the best product in the market.</p>
                </div>

                <div className = {`${styles.startStart}`}>
                    <p style = {{marginRight: '10px', marginTop: '-4px'}} className = {`${styles.blueHeading}`}>Connect: </p>
                    <p className = {`${styles.bottomContainerText}`}>We won't let you go off our door easily if you come.  We try our best to connect you with the best people who give you better direction and support. </p>
                </div>

                <div className = {`${styles.startStart}`}>
                    <p style = {{marginRight: '10px', marginTop: '-4px'}} className = {`${styles.blueHeading}`}>Through the Growth Venture Partner program:</p>
                    <p className = {`${styles.bottomContainerText}`}>We have partnerships with capital institutions, which may provide you with financial aid, consulting, mentoring, and much more!</p>
                </div>
            </div>


            <p data-aos-offset = {-2900*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-up' data-aos-duration = '3000' style = {{textAlign: 'center', marginTop: '50px'}} className = {`${styles.bottomContainerText}`}>Our advice for all entrepreneurs would be “Execute Startups Idea More Strategically” and don't rush towards funding and acquisition because we do not build just a product to sell. We actually build a vision that creates value in the market.</p>

        </div>
    )
}