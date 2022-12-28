
import Image from 'next/image'
import Link from 'next/link'
import styles from './section7.module.css'

export default function Section7(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.text}`}>Full Stack Development</p>
            <Link href = 'why-does-full-stack-development-matter'>
                <div className={styles.imCon}  style = {{cursor: 'pointer', marginLeft: '30px', marginRight: '30px'}}>
                    <Image priority  src = './landing_sec7_left.png' width = '62px' height = '41px' />
                </div>
            </Link>
            <Link href = 'why-the-businesses-needs-an-apps'>
                <div className={styles.imCon}  style = {{cursor: 'pointer', marginLeft: '30px', marginRight: '30px'}}>
                    <Image priority  src = './landing_sec7_right.png' width = '62px' height = '41px' />
                </div>
            </Link>
            <p className = {`${styles.text}`}>App Development</p>

        </div>
    )
}