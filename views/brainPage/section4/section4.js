
import { myscroll, mobscroll } from '../../../conts_vars'
import styles from './section4.module.css'

export default function Section4(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.stretchBetween}`}>

                <div className = {`${styles.innerContainer}`}>
                    <p data-aos-offset = {-700*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.heading}`}>Idea Mapping</p>
                    <p data-aos-offset = {-700*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.text}`}>
                        We need to shape our ideas, imagination, and thought processes in some physical dimension to make them fully functional, programmable, and presentable to this world.
                        <br/>We have been evolved from a tough apps studio company. After developing multiple app-based ideas for our clients, we have gained an enhancement in building great digital tech products ideas, ranging from apps to web apps (SaaS). We always try to deliver the best quality apps with impressive product design -UI/UX, Right Premium Features, and Performance to help them with scalability and leveraging market growth.
                    </p>
                </div>

                <div className = {`${styles.innerContainer}`}>
                    <p data-aos-offset = {-700*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.heading}`}>Product Design & Development</p>
                    <p data-aos-offset = {-700*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.text}`}>Every app-based idea always starts from wireframing and prototyping designs. It involves a team of developers, designers, and strategists. It determines the UX or User Experience flow of the app. In this phase, we need to make sure that the customer should get the best experience in understanding the whole concept of the idea in terms of features. Once, we finalize wireframing and flow, we indulge in User Interface design or UI. To make it aligned with our branding parameters like color palette, layout, icons, etc. post final layout designing, we convert it into a prototype to test the final look of the app.</p>
                </div>

            </div>
        </div>
    )
}