
import styles from './section2.module.css'

export default function Section2(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>How does a venture studio<br/>work?</p>
            <p className = {`${styles.text}`}>This revolutionary business model works on promoting or encouraging startups that have the potential to grow. Building an innovative business model from scratch is challenging. So, startups acquisition is favored under the venture studio model.<br/>Here is how it works. </p>

            <div style = {{marginTop: '43px'}} className = {`${styles.innerContainer}`}>
                <div className = {`${styles.innerSingleContainer}`}>
                    <p className = {`${styles.subheading}`}>Skills and Innovative Mindset</p>
                    <p className = {`${styles.text}`}>It requires innovative skills and a mindset.  This rare combo excels in the market dynamics. The business becomes future-ready with it, as the change is certain. With creativity and innovation, adapting to the change turns easier. </p>
                </div>
                <div className = {`${styles.innerSingleContainer}`}>
                    <p className = {`${styles.subheading}`}>Skills and Innovative Mindset</p>
                    <p className = {`${styles.text}`}>It requires innovative skills and a mindset.  This rare combo excels in the market dynamics. The business becomes future-ready with it, as the change is certain. With creativity and innovation, adapting to the change turns easier. </p>
                </div>
            </div>

            <div style = {{marginTop: '55px'}} className = {`${styles.innerContainer}`}>
                <div className = {`${styles.innerSingleContainer}`}>
                    <p className = {`${styles.subheading}`}>Research & Make It Sustainable</p>
                    <p className = {`${styles.text}`}>Within this studio, a startup or corporate entity achieves antibodies. They protect them from challenges that threaten their sustainability. These can be concerned with lacking knowledge, funds, experience, skills, and market trend analysis. The venture studio represents a network of mentors and growth partners who are experienced players in defeating these risks. </p>
                </div>
                <div className = {`${styles.innerSingleContainer}`}>
                    <p className = {`${styles.subheading}`}>Transform as Per Market Dynamics</p>
                    <p className = {`${styles.text}`}>When change is everywhere, you need to embrace it for eliminating the termination of any business. However, it’s hard for a small fish in the pond. But, the shelter of a large enterprise in the Venture Studio can save it. It can guard you with its own antibodies to fight challenges and win. </p>
                </div>
            </div>

            <div style = {{marginTop: '55px'}} className = {`${styles.innerContainer}`}>
                <div style = {{width : '100%'}}>
                    <p className = {`${styles.subheading}`}>Scalability & Progress</p>
                    <p className = {`${styles.text}`}>Venture studios offer expertise and consulting that help startups or typical corporations achieve scalability. It certainly requires embracing new marketing trends and platforms. Moreover, the thought process needs newness to understand the likelihood of customers. With its innovative growth partners, one can discover and analyze customer & market dynamics. This leads to finding the answer to all burning questions of customers, which results in discovering strategies to scale up and elevate the growth rate. </p>
                </div>
            </div>
        </div>
    )
}