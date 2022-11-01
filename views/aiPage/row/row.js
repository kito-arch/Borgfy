
import styles from './row.module.css'

export default function Row(props){
    return(
        <div style = {{marginTop: props.marginTop ??  '0', color: props.color ?? 'white'}} className = {`${styles.container}`}>
            <div className = {`${styles.centerStart}`}>
                <div style = {{backgroundColor: props.numberBackgroundColor ?? '#14222d'}} className = {`${styles.numberContainer}`}>
                    <p className = {`${styles.number}`}>{props.number}</p>
                </div>
                <p className = {`${styles.heading}`}>{props.heading}</p>
            </div>
            <p className = {`${styles.text}`}>{props.text}</p>
        </div>
    )
}