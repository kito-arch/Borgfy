
import Image from 'next/image'
import styles from './section6.module.css'

export default function Section6(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.topHeading}`}>Tools We used</p>
            <p className = {`${styles.heading}`}>Native and Hybrid APP</p>

            <div className = {`${styles.stretchBetween}`}>
                <div className = {`${styles.single}`}>
                    <Image src = '/../public/landing_sec8_image1.png' width = '272px' height = '272px' />
                    <p className = {`${styles.text}`}>Native Android</p>
                </div>

                <div className = {`${styles.single}`}>
                    <Image src = '/../public/landing_sec8_image2.png' width = '250px' height = '250px' />
                    <p className = {`${styles.text}`}>React Native</p>
                </div>

                <div className = {`${styles.single}`}>
                    <Image src = '/../public/landing_sec8_image3.png' width = '258px' height = '268px' />
                    <p className = {`${styles.text}`}>Laravel</p>
                </div>
            </div>

            <div className = {`${styles.stretchBetween}`}>
                <div className = {`${styles.single}`}>
                    <Image src = '/../public/landing_sec8_image4.png' width = '250px' height = '250px' />
                    <p className = {`${styles.text}`}>MYSQL/Mongo DB</p>
                </div>

                <div className = {`${styles.single}`}>
                    <Image src = '/../public/landing_sec8_image5.png' width = '361px' height = '196px' />
                    <p className = {`${styles.text}`}>Php</p>
                </div>

                <div className = {`${styles.single}`}>
                    <Image src = '/../public/landing_sec8_image6.png' width = '334px' height = '195px' />
                    <p className = {`${styles.text}`}>DigitalOceanCloud</p>
                </div>
            </div>

            <div className = {`${styles.stretchBetween}`}>
                <div className = {`${styles.single}`}>
                    <Image src = '/../public/landing_sec8_image7.png' width = '311px' height = '88px' />
                    <p className = {`${styles.text}`}>Node JS</p>
                </div>

                <div className = {`${styles.single}`}>
                    <Image src = '/../public/landing_sec8_image8.png' width = '354px' height = '176px' />
                    <p className = {`${styles.text}`}>AWS(Amazoon web service)</p>
                </div>

                <div className = {`${styles.single}`}>
                    <Image src = '/../public/landing_sec8_image9.png' width = '240px' height = '240px' />
                    <p className = {`${styles.text}`}>Python</p>
                </div>
            </div>

            <div className = {`${styles.stretchBetween}`}>
                <div className = {`${styles.single}`}>
                    <Image src = '/../public/landing_sec8_image10.png' width = '214px' height = '281px' />
                    <p className = {`${styles.text}`}>Java</p>
                </div>

                <div className = {`${styles.single}`}>
                    <Image src = '/../public/landing_sec8_image11.png' width = '190px' height = '230px' />
                    <p className = {`${styles.text}`}>IOS</p>
                </div>

                <div className = {`${styles.single}`}>
                    <Image src = '/../public/landing_sec8_image12.png' width = '205px' height = '246px' />
                    <p className = {`${styles.text}`}>Codigniter</p>
                </div>
            </div>

        </div>

    )
}