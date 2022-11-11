
import Image from 'next/image'
import styles from './section5.module.css'

export default function Section5(props){
    return(
        <div className = {`${styles.container}`}>
            <div style = {{position: 'absolute', top: '21px', left: '-12rem'}}>
                <Image src = '/../public/venture_left_dots.png' width = '137px' height = '273px'/>
            </div>
            <div style = {{position: 'absolute', bottom: '4px', right: '-12rem'}}>
                <Image src = '/../public/venture_right_dots.png' width = '174px' height = '348px'/>
            </div>
            <div style = {{position: 'absolute', bottom: '70px', right: '400px'}}>
                <Image src = '/../public/venture_arrow.png' width = '100px' height = '90px'/>
            </div>
            <p className = {`${styles.heading}`}>Lets Us Help You Build Your Digital Transformation Era</p>
            <p style = {{marginBottom: '3rem'}} className = {`${styles.text}`}>
                Borgfy is a trusted group of highly professional and experienced growth partners. We are corporate giants, marketers, product managers, managers, full-stack developers, knowledge consultants, trend analysts, and strategy-makers. We act as an exceptional Venture Builder Studio that guides & assists you throughout the digital journey. We emerge as a gap-filler that tends to help anywhere, from developing the digital ability to scalability moreover we had prime expertise to lead digital transformation strategy through the custom mobile app, web apps (SaaS), wearable app-based ideas  on top of that a great product design and Niche tech stack of Artificial intelligence and IoT to create best full-stack product user experiences  for startups ideas, and corporate
                <br/>Not only do we develop tailor-made digital products, but we also build extraordinary roadmaps to evolve exceptional startup plans and winning strategies that are feasible and profit-making. We offer over decades of experience, drafting a significant outlay of resources in terms of money, time, staff, and workstation. 
            </p>
            <p className = {`${styles.subheading1}`}>Our diverse domains' expertise helps companies in Industries Like</p>
            <p style = {{marginBottom: '2rem'}} className = {`${styles.text}`}> manufacturing, automotive, media & entertainment, education, aviation, defense, Internet, Healthcare, Marketing & Advertising, Consumer Tech, Architecture & Planning Design , Computer Software,Real Estate  to survive any wrong turn or glitch by building great digital strategy of scalable niche problem-solving products. Sustainability in the corporate world is hard. With digital transformation, it can be averted. Our assistance can lift you up and elevate your business to a successful track. Borgy is the one that can provide anything that you need for a business to keep it up and running. From evolving ideas & arranging investors to digital integrity & product development, we stand by your side. Our growth partners can customize a unique digital experience, plans, & resources for every business or organization. Hundreds of domestic and overseas customers have witnessed how we make it true.</p>
            <div className = {`${styles.subheading2_container}`}>

                <p className = {`${styles.subheading2}`}><span className = {`${styles.quotes}`}>“ </span>So what you are waiting for let's build your great tech transformation within the digital<br/>transformation era to help you achieve the pinnacle of scalable products to disrupt market!<span style = {{marginLeft: '60px'}} className = {`${styles.quotes}`}>”</span></p>
            </div>
        </div>
    )
}
