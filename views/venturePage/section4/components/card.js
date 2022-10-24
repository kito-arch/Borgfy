
import styles from './card.module.css'

export default function Card2(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>{props.heading}</p>
            <p className = {`${styles.text}`}>{props.desc}</p>
        </div>
    )
}