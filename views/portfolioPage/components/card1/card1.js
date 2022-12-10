
import Image from 'next/image'
import styles from './card1.module.css'

export default function (props){
    return(
        <div className = {`${props.alternate ? (props.backgroundColor ? styles.alternateContainer1 : styles.alternateContainer) : styles.container}`}>
            <p style = {{marginBottom: props.headingMarginBottom ?? '0'}} className = {`${styles.heading}`}>{props.heading}</p>
            <p className = {`${styles.subheading}`}>{props.subheading}</p>
            <p style = {{marginTop: props.textMarginTop ?? '0', marginBottom: props.textMarginBottom ?? '0'}} className = {`${styles.text}`}>{props.text}</p>
            {!props.noIcon &&
                <div className = {`${styles.centerStart}`}>
                    <div style = {{marginRight: '20px'}}>
                        <Image src = '/../public/apple_icon.png' width = '44px' height = '44px' />
                    </div>
                    <Image src = '/../public/playstore_icon.png' width = '44px' height = '44px' />
                </div>
            }   
        </div>
    )
}