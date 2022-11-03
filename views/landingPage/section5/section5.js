
import styles from './section5.module.css'

export default function Section5(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>Types of App We had Developed</p>

            <div className = {`${styles.stretchBetween}`}>
                <p className = {`${styles.text}`}>Internet based Startups</p>
                <p className = {`${styles.text}`}>Healthcare Apps</p>
            </div>

            <div style = {{width : '70%', marginLeft: '15%'}} className = {`${styles.stretchBetween}`}>
                <p className = {`${styles.text}`}>SaaS Web Apps</p>
                <p className = {`${styles.text}`}>Fintech Apps</p>
            </div>

            <div style = {{width : '70%'}} className = {`${styles.stretchBetween}`}>
                <p className = {`${styles.text}`}>AR/VR Apps</p>
                <p className = {`${styles.text}`}>IoT- AI Enabled Apps</p>
            </div>

            <div style = {{width : '70%', marginLeft: '15%'}} className = {`${styles.stretchBetween}`}>
                <p className = {`${styles.text}`}>Business Apps</p>
                <p className = {`${styles.text}`}>Sports Apps</p>
            </div>

            <div style = {{width : 'fit-content', marginLeft: '40%'}} className = {`${styles.stretchBetween}`}>
                <p className = {`${styles.text}`}>Consumer tech apps</p>
            </div>

        </div>
    )
}