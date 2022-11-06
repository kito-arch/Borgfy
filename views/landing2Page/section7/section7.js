
import Image from 'next/image'
import styles from './section7.module.css'

export default function Section7(props){
    return(
        <div className = {`${styles.container}`}>
            <div style = {{position: 'absolute', top: '0', right: '-12rem'}}>
                <Image src = '/../public/landing2_sec7_image1.png' width = '886px' height = '734px'/>
            </div>
            <p className = {`${styles.subtext}`}>Startup to the Mooon</p>
            <p className = {`${styles.text}`}>Artificial Intelligence phenomenon is the best method that teaches us how to build and launch successful startup ideas that are scaled to achieve product-market fit</p>
        </div>
    )
}