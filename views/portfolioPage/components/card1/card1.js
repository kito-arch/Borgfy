
import Image from 'next/image'
import styles from './card1.module.css'

export default function (props){
    return(
        <div style = {{backgroundColor: (props.backgroundColor && props.alternate) ? props.backgroundColor : 'ok', boxShadow: (props.backgroundColor && props.alternate) ? `0px 4px 34px ${props.backgroundColor}, inset 0px 1px 4px rgba(255, 255, 255, 0.25);`: 'ok'}} className = {`${props.alternate ? styles.alternateContainer : styles.container}`}>
            <p style = {{marginBottom: props.headingMarginBottom ?? '0'}} className = {`${styles.heading}`}>{props.heading}</p>
            <p className = {`${styles.subheading}`}>{props.subheading}</p>
            <p style = {{marginTop: props.textMarginTop ?? '0', marginBottom: props.textMarginBottom ?? '0'}} className = {`${styles.text}`}>{props.text}</p>
            {!props.noIcon &&
                <div className = {`${styles.centerStart}`}>
                    <div style = {{marginRight: '20px'}}>
                        <Image src = './apple_icon.png' width = '44px' height = '44px' />
                    </div>
                    <Image src = './playstore_icon.png' width = '44px' height = '44px' />
                </div>
            }   
        </div>
    )
}