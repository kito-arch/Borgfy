
import Image from 'next/image'
import styles from './section2.module.css'

export default function Section2(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'relative'}}>
                <p className = {`${styles.subtext}`}>WHO WE ARE</p>
                <p className = {`${styles.heading}`}>WE ARE</p>

                <div className = {`${styles.centerCenter}`}>
                    <div className = {`${styles.stretchBetween}`}>
                        <div style = {{width: '340px', position: 'relative', paddingTop: '60px'}}>
                            <div style = {{width: 'fit-content', margin: 'auto'}}>
                                <Image src = '/../public/landing2_sec2_image1.png' width = '110px' height = '110px' />
                            </div>
                            <div style = {{position: 'absolute', top: '200px', right: '-150px'}}>
                                <Image src = '/../public/landing2_sec2_arrow1.png' width = '88px' height = '42px' />
                            </div>
                            <p className = {`${styles.text}`}>Venture Builders  and Digital Transformation Experts helping startups and enterprises</p>
                        </div>
                        <div style = {{width: '340px', position: 'relative'}}>
                            <Image src = '/../public/landing2_sec2_image2.png' width = '110px' height = '110px' />
                            <p className = {`${styles.text}`}>with capabilities to quickly develop high quality technology products of any scale and complexity</p>

                            <div style = {{position: 'absolute', top: '180px', right: '-150px'}}>
                                <Image src = '/../public/landing2_sec2_arrow2.png' width = '76px' height = '59px' />
                            </div>
                        </div>
                        <div style = {{width: '340px', position: 'relative', paddingTop: '60px'}}>
                            <Image src = '/../public/landing2_sec2_image3.png' width = '110px' height = '110px' />
                            <p className = {`${styles.text}`}>and business skills to launch and support digital ideas, initiatives,  & Ventures</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className = {`${styles.bottomContainer}`}>
                {/* <div style = {{position: 'absolute', top: '-100px', left: '-150px'}}>
                    <Image src = '/../public/landing2_sec2_line.png' width = '1410px' height = '39px' />
                </div> */}
                <div style = {{position: 'absolute', top: '-50px', left: '-300px'}}>
                    <Image src = '/../public/landing2_sec2_steve.png' width = '262px' height = '195px' />
                </div>
                <div style = {{position: 'absolute', top: '-100px', right: '-300px'}}>
                    <Image src = '/../public/landing2_sec2_rocket.png' width = '214px' height = '214px' />
                </div>
                <p className = {`${styles.bottomText}`}>“Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.”</p>
                <p className = {`${styles.by}`}>—Steve Jobs</p>
            </div>

        </div>
    )
}