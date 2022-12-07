
import { scroll } from '../../../../conts_vars'
import styles from './section6.module.css'


export default function Section6(props){
    return(
        <div data-aos-offset = {-scroll*1700} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>How does Borgfy Venture Studio help a startup in business?</p>
            <div className = {`${styles.innerContainer}`}>
                <p className = {`${styles.text}`}>A new model for entrepreneurship, Borgfy Venture Studio evolved from An App Studio after years of developing great tech ideas for entrepreneurs we had achieved the right strength to build actual lean startups ideas and guide you to hold our hands as a growth partner, supporting you from start to finish in becoming a growth-hacker. Here, we have business tycoons, think tanks, knowledge consultants, product researchers & developers, full-stack developers, and scaling partners in a group to build the most feasible strategies and show ways that can actually design a successful corporate journey. For a startup, this concept is no less than a blessing. We stretch our hands to let all startups come upfront, firmly, and stronger. We assist you as accelerators and incubators. Furthermore, we have a diverse range of expertise. With Borgfy, you can beat challenges that interfere with the flow of opportunities and success.<br/>Emerging as a brand is not the end, but a kick-start of your business journey where we accelerate you to become a stunner with your corporate achievements. We make your journey smoother and easier to generate revenues in six figures. From funding to operational and marketing support-you find us everywhere in need. </p>
            </div>
        </div>
    )
}