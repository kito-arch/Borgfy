
import styles from './card.module.css'

export default function Card(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>{props.heading}</p>
            <p className = {`${styles.desc}`}>{props.desc}</p>
        </div>       
    )
}