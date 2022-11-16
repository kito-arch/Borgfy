
import { scroll } from '../../../conts_vars'
import styles from './section5.module.css'

export default function Section5(props){
    return(
        <div className = {`${styles.container}`}>
            <p data-aos-offset = {-900*scroll} data-aos = 'fade-up' data-aos-duration = '1000' style = {{marginBottom: '30px'}} className = {`${styles.heading}`}>Development Phase</p>
            <p data-aos-offset = {-900*scroll} data-aos = 'fade-up' data-aos-duration = '1000' style = {{marginBottom: '156px'}} className = {`${styles.text}`}>
                Once the design is approved, we finally move to the development phase. In this phase, we work with individuals in different tech roles to finally make the product live.
            </p>

            <p data-aos-offset = {-900*scroll} data-aos = 'fade-up' data-aos-duration = '1000' style = {{margin: 'auto', marginBottom: '50px', width: 'fit-content'}} className = {`${styles.heading}`}>The development team includes the following professionals:</p>
            
            <div data-aos-offset = {-1000*scroll} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.innerContainer}`}>
                <p style = {{marginRight: '20px'}} className = {`${styles.heading}`}>1. Project Manager: </p>
                <p className = {`${styles.text}`}>He usually manages the operational part of the project development like assigning tasks, operation, assisting developers, project reporting, allocation of resources, monitoring of projects health, and deliverability of tasks on the timeline.</p>
            </div>

            <div data-aos-offset = {-1100*scroll} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.innerContainer}`}>
                <p style = {{marginRight: '20px'}} className = {`${styles.heading}`}>2. Front End Developer: </p>
                <p className = {`${styles.text}`}> He develops your front end design, defines user experience in the programmable format, works on functionalities of In-App features, and integrates APIs (which helps in fetching data from the backend database).</p>
            </div>

            <div data-aos-offset = {-1200*scroll} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.innerContainer}`}>
                <p style = {{marginRight: '20px'}} className = {`${styles.heading}`}>3. Backend Developer: </p>
                <p className = {`${styles.text}`}>He helps in developing the backend architecture for storing information in a database, complex logic creation for app functionalities in the form of APIs, and deployment on the server.</p>
            </div>

            <div data-aos-offset = {-1300*scroll} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.innerContainer}`}>
                <p style = {{marginRight: '20px'}} className = {`${styles.heading}`}>4. Full Stack Developer:</p>
                <p className = {`${styles.text}`}> (Manages both front and backend): He handles both sides, Front End and Backend, simultaneously. </p>
            </div>

            <div data-aos-offset = {-1400*scroll} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.innerContainer}`}>
                <p style = {{marginRight: '20px'}} className = {`${styles.heading}`}>5. Quality Analyst: </p>
                <p className = {`${styles.text}`}>He analyzes and tests your code structure, reusability, and the quality of code pattern for better scalability and app performance.</p>
            </div>

            <div data-aos-offset = {-1500*scroll} data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.innerContainer}`}>
                <p style = {{marginRight: '20px'}} className = {`${styles.heading}`}>6. Business Analyst (BA): </p>
                <p className = {`${styles.text}`}> BA usually plays a bridge role in understanding the entrepreneur's expectations and creating a draft of requirements.  Moreover, he plays the role of a mediator during overall app progress.</p>
            </div>

        </div>
    )
}