
import Image from "next/image";
import styles from './section5.module.css'

export default function Section5(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', top: '100px', left: '-12rem'}}>
                <Image src = '/../public/about_sec5_ellipse1.png' width = '250px' height = '300px'/>
            </div>

            <div style = {{position: 'absolute', bottom: '-160px', right: '-60px'}}>
                <Image src = '/../public/about_sec5_ellipse2.png' width = '400px' height = '350px'/>
            </div>

            <div style = {{position: 'absolute', bottom: '-100px', left: '-50px'}}>
                <Image src = '/../public/about_sec5_semi.png' width = '204px' height = '204px'/>
            </div>

            <p className = {`${styles.heading}`}>Why we different from others</p>
            <p className = {`${styles.text}`}>This revolutionary business model works on promoting or encouraging startups that have the potential to grow. Building an innovative business model from scratch is challenging. So, startups acquisition is favored under the venture studio model.<br/>Here is how it works. </p>

            <div style = {{marginBottom: '200px'}} className = {`${styles.centerCenter}`}>

                <div className = {`${styles.stretchBetween}`}>
                    <div className = {`${styles.single}`}>
                        <Image src = '/../public/about_sec5_image2.png' width = '119px' height = '119px'/>
                        <p className = {`${styles.singleText}`}>Skills and Innovative Mindset </p>
                    </div>
                    <div className = {`${styles.single}`}>
                        <Image src = '/../public/about_sec5_image2.png' width = '119px' height = '119px'/>
                        <p className = {`${styles.singleText}`}>Transform as Per Market Dynamics </p>
                    </div>
                </div>

            </div>

            <div className = {`${styles.centerCenter}`}>

                <div className = {`${styles.stretchBetween}`}>
                    <div style = {{marginLeft: '-30px'}} className = {`${styles.single}`}>
                        <Image src = '/../public/about_sec5_image3.png' width = '55px' height = '92px'/>
                        <p className = {`${styles.singleText}`}>Research & Make It Sustainable </p>
                    </div>
                    <div style = {{paddingRight: '100px'}} className = {`${styles.single}`}>
                        <Image src = '/../public/about_sec5_image4.png' width = '76px' height = '76px'/>
                        <p className = {`${styles.singleText}`}>Scalability & Progress</p>
                    </div>
                </div>

            </div>
        </div>
    )
}