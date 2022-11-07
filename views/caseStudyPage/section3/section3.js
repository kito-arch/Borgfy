
import Image from 'next/image'
import styles from './section3.module.css'


export default function Section3(props){
    return(
        <div className = {`${styles.container}`}>
            <div style = {{position: 'absolute', top: '-150px', right: '250px'}}>
                <Image src = '/../public/case_sec3_image.png' width = '1083px' height = '633px' />
            </div>
            <div style = {{position: 'absolute', bottom: '120px', right: '30%'}}>
                <Image src = '/../public/case_sec3_text.png' width = '1000px' height = '80px' />
            </div>
        </div>
    )
}