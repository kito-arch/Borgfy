
import { scroll } from '../../../../conts_vars'
import Row from './components/row/row'
import styles from './section5.module.css'

export default function Section5(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {-scroll*1000} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.heading}`}>Incubators Vs Accelerators Vs Venture Studio</p>
            <p data-aos-offset = {-scroll*1200} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.text}`}>Venture Studio is by far the most refined version of Incubators and Accelerators.</p>
            <div data-aos-offset = {-scroll*1200} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.top}`}>
                <div style = {{width: '22%'}}></div>
                <div style = {{width: '17.4%'}}>
                    <p className = {`${styles.subheading}`}>Venture Capital (VC)</p>
                </div>
                <div style = {{width: '17.4%'}}>
                    <p className = {`${styles.subheading}`}>Incubators</p>
                </div>
                <div style = {{width: '17.4%'}}>
                    <p className = {`${styles.subheading}`}>Accelerators</p>
                </div>
                <div style = {{width: '17.4%'}}>
                    <p className = {`${styles.subheading}`}>Venture Studio</p>
                </div>
            </div>
            
            <div data-aos-offset = {-scroll*1200} data-aos = 'fade-up' data-aos-duration = '1000'>
                <Row heading = 'Aim' c1 = 'Providing equity to interested companies, especially a startup that is found to be a company with a great potential to grow in a long run.' c2 = 'Brainstorming interesting ideas & push startups or SMEs to try, innovate, and grow proactively in the corporate ecosystem.' c3 = 'Offering startups & SMEs a structured curriculum, program, product education, mentorship, and funding.' c4 = 'Guiding a startup & SMEs to catch bugs in their growth & ROI by drawing the talents within their network of growth partners & equity.' />
            </div>
            <div data-aos-offset = {-scroll*1300} data-aos = 'fade-up' data-aos-duration = '1000'>
                <Row heading = 'Resources' c1 = 'Capital is availed, but no assistance with resources.' c2 = 'Neither capital nor other resources are availed.' c3 = 'No capital is provided, but inputs are accessible. ' c4 = 'Capital & resources are easily available.' />
            </div>
            <div data-aos-offset = {-scroll*1400} data-aos = 'fade-up' data-aos-duration = '1000'>
                <Row heading = 'Business Idea' c1 = 'No business idea ' c2 = 'Idea remains in nascent stage' c3 = 'Idea remains in nascent stage' c4 = 'Full-on support with innovative ideas' />
            </div>
            <div data-aos-offset = {-scroll*1500} data-aos = 'fade-up' data-aos-duration = '1000'>
                <Row heading = 'Team Support' c1 = 'No team is provided.' c2 = 'Team support is absent.' c3 = 'No manual support is availed.' c4 = 'Build a team to achieve goals.' />
            </div>
            <div data-aos-offset = {-scroll*1600} data-aos = 'fade-up' data-aos-duration = '1000'>
                <Row heading = 'Capital' c1 = 'A bit of capital is provided.' c2 = 'Support with no much of capital' c3 = 'Support with a bit of capital' c4 = 'End-to-end Funding is available.' />
            </div>
            <div data-aos-offset = {-scroll*1700} data-aos = 'fade-up' data-aos-duration = '1000'>
                <Row heading = 'Act As Co-Founder' c1 = 'Never' c2 = 'Never' c3 = 'Never' c4 = 'Does'  /> 
            </div>
            <div data-aos-offset = {-scroll*1800} data-aos = 'fade-up' data-aos-duration = '1000'>
                <Row heading = 'Business Assistance' c1 = 'Partly assistance is provided.' c2 = 'Not full assistance is provided.' c3 = 'Incomplete assistance is availed.' c4 = 'Start-to-Finish assistance is there.'  />
            </div>
            <div data-aos-offset = {-scroll*1900} data-aos = 'fade-up' data-aos-duration = '1000'>
                <Row heading = 'Growth & Scalability Ideas' c1 = 'Scalability ideas are missing.' c2 = 'Help with a few scalability ideas.' c3 = 'Share a few ideas to scale up.' c4 = 'Complete scalability-achieving ideas.' />
            </div>
        </div>
    )
}