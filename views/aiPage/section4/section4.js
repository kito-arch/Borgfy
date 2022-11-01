
import Image from 'next/image'
import styles from './section4.module.css'

export default function Section4(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', left: '-12rem', bottom: '113px'}}>
                <Image src = '/../public/ai_sec4_dots.png' width = '120px' height = '274px' />
            </div>

            <p className = {`${styles.heading}`}>Data Science & Machine Learning Applications</p>
            <p className = {`${styles.text}`}>As more and more data is created to scale the industrial outcome the use of Data Science is increasing. With the help of AI and analytics industries are becoming more profoundly able for mass-producing digital and physical products of a grand scale.it helps in estimating your customer behaviour,product lifecycle and better insights of future</p>

            <div className = {`${styles.stretchBetween}`}>

                <div className = {`${styles.card}`}>
                    <div className = {`${styles.cardImage}`}>
                        <Image src = '/../public/ai_sec4_icon1.png' width = '93px' height = '93px' />
                    </div>
                    <p className = {`${styles.cardHeading}`}>Computer Vision</p>
                    <p className = {`${styles.cardText}`}>This capability of computers allows the machines to interpret their field of view of the visual world. It helps these machines to react accordingly using the protocols defined through artificial intelligence.example are Smarts Autonomous cars,Robots</p>
                </div>

                <div className = {`${styles.card}`}>
                    <div className = {`${styles.cardImage}`}>
                        <Image src = '/../public/ai_sec4_icon2.png' width = '93px' height = '93px' />
                    </div>
                    <p className = {`${styles.cardHeading}`}>ChatBots</p>
                    <p className = {`${styles.cardText}`}>You have a clear understanding of a chatbot because most of the time you are chatting with a chatbot on different websites. These chatbots have pre-programmed answers which are provided to you according to your question with the help of AI.Example: Siri,Alexa,Google Assistant</p>
                </div>

                <div className = {`${styles.card}`}>
                    <div className = {`${styles.cardImage}`}>
                        <Image src = '/../public/ai_sec4_icon3.png' width = '93px' height = '93px' />
                    </div>
                    <p className = {`${styles.cardHeading}`}>Image Processing</p>
                    <p className = {`${styles.cardText}`}>This capability allows the computer or any machine to process images and create better enhancement of images.Example- NFT 3D Art, Deepfake,Image enhancement,Black white photo colorization</p>
                </div>

            </div>
        </div>
    )
}