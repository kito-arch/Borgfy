
import Image from 'next/image'
import Link from 'next/link'
import styles from './card1.module.css'

export default function (props){
    return(
        <div className = {`${props.alternate ? (props.backgroundColor ? styles.alternateContainer1 : styles.alternateContainer) : styles.container}`}>
            <p style = {{marginBottom: props.headingMarginBottom ?? '0'}} className = {`${styles.heading}`}>{props.heading}</p>
            <p className = {`${styles.subheading}`}>{props.subheading}</p>
            <p style = {{marginTop: props.textMarginTop ?? '0', marginBottom: props.textMarginBottom ?? '0'}} className = {`${styles.text}`}>{props.text}</p>
            <div className = {`${styles.centerStart}`}>
            {props.apple &&
            <Link href = {props.apple}>
                <div className = {styles.small} style = {{marginRight: '20px'}}>
                    <Image priority  src = './apple_icon.png' width = '44px' height = '44px' />
                </div>
            </Link>
            }   
            {props.android &&
            <Link href = {props.android}>
                <div className = {styles.small}>
                    <Image priority  src = './playstore_icon.png' width = '44px' height = '44px' />
                </div>
            </Link>
            }
            {props.web &&
            <Link href = {props.web}>
                <div className='hide_in_mobile'>
                    <Image priority  src = './web_icon.png' width = '88px' height = '88px' />
                </div>
            </Link>
            }
            {props.web &&
            <Link href = {props.web}>
                <div className='show_in_mobile'>
                    <Image priority  src = './web_icon.png' width = '44px' height = '44px' />
                </div>
            </Link>
            }
            </div>
        </div>
    )
}