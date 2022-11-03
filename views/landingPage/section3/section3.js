
import styles from './section3.module.css'

export default function Section3(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>Our Approach</p>

            <div className = {`${styles.stretchBetween}`}>

                <div className = {`${styles.box}`}>
                    <div className = {`${styles.numberContainer}`}>
                        <p className = {`${styles.number}`}>1</p>
                    </div>
                    <p className = {`${styles.boxHeading}`}>Project Discovery</p>
                    <p className = {`${styles.boxText}`}>We will get on a call to understand your app idea. This is where we will learn about your requirements, and objectives.</p>
                </div>

                <div className = {`${styles.box}`}>
                    <div className = {`${styles.numberContainer}`}>
                        <p className = {`${styles.number}`}>2</p>
                    </div>
                    <p className = {`${styles.boxHeading}`}>Analysis & Planning</p>
                    <p className = {`${styles.boxText}`}>We will validate your app idea throughout this phase, examine your target audience, and prepare a solid roadmap for seamless project execution.</p>
                </div>

                <div className = {`${styles.box}`}>
                    <div className = {`${styles.numberContainer}`}>
                        <p className = {`${styles.number}`}>3</p>
                    </div>
                    <p className = {`${styles.boxHeading}`}>UI/UX Design</p>
                    <p className = {`${styles.boxText}`}>We will map out the user journey, design the interface during this phase. Our team will constantly seek your feedback and improvise as and when needed.</p>
                </div>

                <div className = {`${styles.box}`}>
                    <div className = {`${styles.numberContainer}`}>
                        <p className = {`${styles.number}`}>4</p>
                    </div>
                    <p className = {`${styles.boxHeading}`}>App Development</p>
                    <p className = {`${styles.boxText}`}>This is the phase where the actual development starts. Once the design is finalized, we will start coding the app. Our experts employ best coding practices to ensure your app is secure, fast, and snappy.</p>
                </div>

                <div className = {`${styles.box}`}>
                    <div className = {`${styles.numberContainer}`}>
                        <p className = {`${styles.number}`}>5</p>
                    </div>
                    <p className = {`${styles.boxHeading}`}>Testing</p>
                    <p className = {`${styles.boxText}`}>Once we’re through the development phase, we will start testing the app and its functionality to ensure everything is working as intended.</p>
                </div>

                <div className = {`${styles.box}`}>
                    <div className = {`${styles.numberContainer}`}>
                        <p className = {`${styles.number}`}>6</p>
                    </div>
                    <p className = {`${styles.boxHeading}`}>Deployment & Support</p>
                    <p className = {`${styles.boxText}`}>Now that the app is live, we will help you maintain it by constantly monitoring its performance and upgrading it as and when new versions of Android and iOS are released.</p>
                </div>

            </div>
        </div>
    )
}