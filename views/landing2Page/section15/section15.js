
import Image from 'next/image'
import styles from './section15.module.css'

export default function Section15(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '600px'}}>
                <Image src = '/../public/landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '680px'}}>
                <Image src = '/../public/landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '760px'}}>
                <Image src = '/../public/landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '840px'}}>
                <Image src = '/../public/landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '920px'}}>
                <Image src = '/../public/landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '1000px'}}>
                <Image src = '/../public/landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '1080px'}}>
                <Image src = '/../public/landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '1160px'}}>
                <Image src = '/../public/landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '1240px'}}>
                <Image src = '/../public/landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            <div style = {{zIndex: '1', position: 'absolute', bottom: '-32px', left: '1320px'}}>
                <Image src = '/../public/landing_sec1_circle.png' width = '70px' height = '70px' />
            </div>
            

            <div style = {{justifyContent: 'flex-start'}} className = {`${styles.stretchBetween}`}>
                <div>
                    <div className = {`${styles.stretchBetween}`}>
                        <Image src = '/../public/landing2_sec15_image1.png' width = '246px' height = '246px'/>
                        <Image src = '/../public/landing2_sec15_image2.png' width = '202px' height = '202px'/>
                    </div>
                    <div className = {`${styles.stretchBetween}`}>
                        <Image src = '/../public/landing2_sec15_image3.png' width = '247px' height = '247px'/>
                        <Image src = '/../public/landing2_sec15_image4.png' width = '260px' height = '260px'/>
                    </div>
                </div>
                <div style = {{paddingLeft: '420px'}}>
                    <p className = {`${styles.heading}`}>Our Client</p>
                    <p className = {`${styles.text}`}>The World is too noise tune to Borgy Signal</p>
                    <p className = {`${styles.text}`}>The World is too noise tune to Borgy Signal</p>
                </div>
            </div>
        </div>
    )
}