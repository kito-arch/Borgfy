
import Image from 'next/image'
import Link from 'next/link'
import styles from './section7.module.css'

export default function Section7(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.text}`}>AI</p>
            <Link href = 'ai'>
                <div style = {{cursor: 'pointer', marginLeft: '30px', marginRight: '30px'}}>
                    <Image src = './landing_sec7_left.png' width = '62px' height = '41px' />
                </div>
            </Link>
            <Link href = 'ui'>
                <div style = {{cursor: 'pointer', marginLeft: '30px', marginRight: '30px'}}>
                    <Image src = './landing_sec7_right.png' width = '62px' height = '41px' />
                </div>
            </Link>
            <p className = {`${styles.text}`}>UI/UX</p>

        </div>
    )
}