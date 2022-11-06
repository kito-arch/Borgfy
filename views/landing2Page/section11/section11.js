
import Image from 'next/image'
import styles from './section11.module.css'

export default function Section11(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>how  we do it</p>
            <p className = {`${styles.text}`}>Read the reviews that we regularly receive from users of our music app. We are proud to have created a product that gives a vivid impression.</p>

            <div style = {{marginBottom: '398px'}} className = {`${styles.stretchBetween}`}>

                <div className = {`${styles.box}`}>
                    <div style = {{position: 'absolute', top: '-134px', left: '43px'}}>
                        <Image src = '/../public/landing2_sec11_image1.png' width = '228px' height = '197px' />
                    </div>
                    <p className = {`${styles.boxHeading}`}>Brain Storm</p>
                    <p className = {`${styles.boxText}`}>We Are Dedicated Engineers Minds Devoted to Innovation, Bringing Sustainable LifeThrough Technology Advancement, </p>
                </div>


                <div className = {`${styles.box}`}>
                    <div style = {{position: 'absolute', top: '-125px', left: '35px'}}>
                        <Image src = '/../public/landing2_sec11_image2.png' width = '231px' height = '199px' />
                    </div>
                    <p className = {`${styles.boxHeading}`}>Develop</p>
                    <p className = {`${styles.boxText}`}>We Are Dedicated Engineers Minds Devoted to Innovation, Bringing Sustainable LifeThrough Technology Advancement, </p>
                </div>

            </div>
            <div className = {`${styles.stretchBetween}`}>

                <div className = {`${styles.box}`}>
                    <div style = {{position: 'absolute', top: '-275px', left: '0px'}}>
                        <Image src = '/../public/landing2_sec11_image3.png' width = '326px' height = '326px' />
                    </div>
                    <p className = {`${styles.boxHeading}`}>Lounch</p>
                    <p className = {`${styles.boxText}`}>We Are Dedicated Engineers Minds Devoted to Innovation, Bringing Sustainable LifeThrough Technology Advancement, </p>
                </div>

                <div className = {`${styles.box}`}>
                    <div style = {{position: 'absolute', top: '-171px', left: '-5px'}}>
                        <Image src = '/../public/landing2_sec11_image4.png' width = '227px' height = '227px' />
                    </div>
                    <p className = {`${styles.boxHeading}`}>Coneect</p>
                    <p className = {`${styles.boxText}`}>We Are Dedicated Engineers Minds Devoted to Innovation, Bringing Sustainable LifeThrough Technology Advancement, </p>
                </div>

            </div>

            <p className = {`${styles.readmore}`}>Read More</p>

        </div>
    )
}