
import Image from 'next/image'
import styles from './section14.module.css'

export default function Section14(props){
    return(
        <div className = {`${styles.container}`}>
            <div style = {{width: 'fit-content', margin: 'auto'}}>
                <Image priority  src = '/../public/case_sec14_image1.png' width = '1500px' height = '100px' />
            </div>
            <div style = {{width: 'fit-content', margin: 'auto', marginTop: '20px'}}>
                <Image priority  src = '/../public/case_sec14_image2.png' width = '1500px' height = '100px' />
            </div>
            <div style = {{margin: 'auto', marginTop: '60px', width: 'fit-content'}}>
                <Image priority  src = '/../public/case_sec14_image3.png' width = '1500px' height = '600px' />
            </div>
        </div>
    )
}