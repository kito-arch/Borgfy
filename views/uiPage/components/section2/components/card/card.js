
import Image from 'next/image'
import styles from './card.module.css'

export default function Card(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.center}`}>
                <div className = {`${styles.iconContainer}`}>
                    <Image src = {props.image} width = '85px' height = '85px'/>
                </div>
            </div>
            <p className = {`${styles.heading}`}>{props.heading}</p>
            <p className = {`${styles.text}`}>{props.text}</p>
        </div>
    )
}