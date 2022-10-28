
import Image from 'next/image'
import Box from './components/box/box'
import styles from './section4.module.css'

export default function Section4(props){
    return( 
        <div className = {`${styles.container}`}>
            <div style = {{position: 'absolute', top: '-10px', left: '-12rem'}}>
                <Image src = '/../public/venture_building_top_ellipse.png' width = '450px' height = '450px' />
            </div>
            <div style = {{position: 'absolute', bottom: '180px', left: '873px'}}>
                <Image src = '/../public/venture_building_bottom_ellipse.png' width = '120px' height = '120px' />
            </div>
            <div style = {{position: 'absolute', bottom: '50px', right: '-180px'}}>
                <Image src = '/../public/venture_building_right_ellipse.png' width = '400px' height = '400px' />
            </div>
            <div style = {{position: 'absolute', bottom: '140px', left: '-90px'}}>
                <Image src = '/../public/venture_building_left_ellipse.png' width = '204px' height = '204px' />
            </div>
            <p className = {`${styles.heading}`}>Venture Building Journey/Process</p>
            <p className = {`${styles.text}`}>Get through the venture building journey or strategies that we follow:</p>
            <Box subheading = '1. Ideate' subtext = 'This phase requires entrepreneurs to think differently; research trends, scope, and problems thoroughly; and then, find feasibility or scope of scalability in the realization of ideas. Besides, end-to-end strategizing takes place for all verticals, including the capital, process, workflow, and network.'/>
            <Box subheading = '2. Verify' subtext = 'Upon strategizing, any strategy requires testing. We iterate ideas to pass them through an acid test, which is for testing feasibility & flexibility. If an idea fails the test, resources are reassigned. This is how the validating phase goes on one more time.'/>
            <Box subheading = '3. Create' subtext = 'This is a phase of creation. The product is built toward problems that people face. It is a test for our partners and customers to understand and develop its actual usability to terminate the specific problem. It is also discovered if the product is market-fit.'/>
            <Box subheading = '4. Portfolio' subtext = 'This stage is attributed to the foundation of the business. The startup is listed in the existing portfolio. Our venture developers take this business case as an assignment and develop a full-proof, concrete strategy to scale it up. '/>
            <Box subheading = '5. Scale Up' subtext = 'Here in this stage, we find how to elevate and take it to the next level. We explore new market opportunities, channels, and the best-fit strategy to manage and develop new products. This is the final round, which may end up in an acquisition. '/>
        </div>
    )
}