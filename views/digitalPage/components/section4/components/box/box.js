
import styles from './box.module.css'

export default function Box(props){
    return(
        <div className = {`${styles.innerContainer}`}>
            <p className = {`${styles.subheading}`}>{props.subheading}</p>
            <p className = {`${styles.subtext}`}>{props.subtext}</p>
        </div>
    )
}