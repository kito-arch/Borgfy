
import Image from 'next/image'
import { myscroll, mobscroll } from '../../../../conts_vars'
import Row from './components/row/row'
import styles from './section7.module.css'

export default function Section7(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2200} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>Advantages of Our Working With Borgfy  Venture Studio</p>
            <div className='hide_in_mobile' style = {{position: 'absolute', top: '489px', left: '48px'}}>
                <Image priority  src = './venture_advantages_path.png' width = '248px' height = '1520px'/>
            </div>
            <div style = {{position: 'absolute', bottom: '0px', right: '-12rem'}}>
                <Image priority  src = './venture_advantages_dot.png' width = '198px' height = '348px' />
            </div>

            <div className={styles.imCon} data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2300} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row image = './venture_advantages_1.png' subheading = 'Networking for Smarter & Better Startup' subtext = 'A venture studio assists with the resources and networks of connections that you require to build and scale a thriving company. It helps you to work smarter, faster, and better. With growth partners, it lets you improve the odds. This is how you take a step forward to the elite group of startups with a successful exit.'/>
            </div>
            <div className={styles.imCon} data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2400} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row image = './venture_advantages_2.png' subheading = 'Great Ideas Built Up in Short Time' subtext = 'The core value proposition of our venture studio is reducing the time to build a startup. We significantly reduce the risk or threats to entrepreneurship, while simultaneously attracting more talent & resources to ideate and evolve new business ideas.' right = {true}/>
            </div>
            <div className={styles.imCon} data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2500} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row image = './venture_advantages_3.png' subheading = 'Act as a Co-Founder and Builder' subtext = 'Not only do we provide funding and mentorship, but also act as both a builder and a co-founder. We are enriched with human capital, & resources, which cover venture developers, in-residence entrepreneurs, C-level personnel, and in-house support staff.'/>
            </div>
            <div className={styles.imCon} data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2600} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row image = './venture_advantages_4.png' subheading = 'In-house & Out-Bound Support' subtext = 'Generally, we offer diverse in-house support and outsourced resources. These resources can be anything from development, investment, domain expertise, marketing, operations, and growth.' right = {true}/>
            </div>
            <div className={styles.imCon} data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2700} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row image = './venture_advantages_5.png' subheading = 'Capital Support and Faster Returns for Startups' subtext = 'We are a network of all professionals having hands-on experience in this domains-marketing, designing, finance experts, Investors, and more. With these growth partners, it’s easy to gain revenues in a fast turnaround and consistent upping in ROI.' />
            </div>
            <div className={styles.imCon} data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*2800} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row image = './venture_advantages_6.png' subheading = 'Go to Market Strategy For Accelerated Product Market Fit' subtext = 'we always thrive to build scalable lean startup ideas that resonate with real market needs and achieve product-market fit with nest market research and strategy to launch product in better way, our venture studio model always tries to flourish the startup ecosystem with the best technology-driven products solving the most demanding problems in society. we always try to reshape your ideas towards our vision so that it resonates the upliftment of society in health, education, employment, energy, shelter sector so that we become profitable alongside the support of society so that our vision, mission, and ideas last longer, sustainable and people are actually interested in paying for your product to make their life easier and better. Let’s Shape and Align Your Next Disruptive Visionary Idea and make it flourish and thrive for a sustainable world.' right = {true} />
            </div>
        </div>
    )
}