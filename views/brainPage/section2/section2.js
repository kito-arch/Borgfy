
import Image from 'next/image'
import styles from './section2.module.css'

export default function Section2(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.topHeading}`}>Borgfy Has a Team of Daydreamers to Keep Dreaming New Ideas!</p>

            <div className = {`${styles.innerContainer}`}>

                <Image src = '/../public/brain_sec2_back.png' layout='fill'/>

                <div style = {{position: 'relative'}}>
                    <div style = {{position: 'absolute', top: '200px', right: '150px'}}>
                        <Image src = '/../public/brain_sec2_image.png' width = '512px' height = '512px'/>
                    </div>
                    <div style = {{position: 'absolute', top: '200px', right: '150px'}}>
                        <Image src = '/../public/brain_sec2_image.png' width = '512px' height = '512px'/>
                    </div>
                    <div style = {{position: 'absolute', top: '30px', left: '10px'}}>
                        <Image src = '/../public/brain_sec2_icon.png' width = '383px' height = '397px'/>
                    </div>
                    <div style = {{position: 'absolute', bottom: '-20px', right: '10px'}}>
                        <Image src = '/../public/brain_sec2_icon.png' width = '383px' height = '397px'/>
                    </div>
                    <p className = {`${styles.topHeading}`}>Borgfy</p>
                    <p className = {`${styles.heading}`}>02. What Are We Going to Build?</p>
                    <p className = {`${styles.text}`}>Problem Identification-To find the problem in the society and leverage the solution of a particular problem using technology, we select one niche industry that fits your problem solution synergies. This is the most crucial step where most entrepreneurs do the mistake of building anything by replicating someone else idea. This is the only reason startups are unable to sustain themselves.</p>
                    <br/>
                    <p className = {`${styles.text}`}>The second thing is that you need to say “no” to derive a similar solution to diverse problems. Instead, build a solution to the problems that need your dedication, as they are necessary to be transformed. Thirdly, your problem should be big enough and visionary that it will transform millions of lives. </p>
                    <br/>
                    <p className = {`${styles.text}`}>We, at Borgfy, are experts at identifying problems. We make sure our entrepreneurs or businesses are properly aligned toward their mission and vision within our great thought leadership process. This process is about brainstorming and visualizing ideas to make a change.</p>
                </div>
            </div>
        </div>
    )
}