
import styles from './row.module.css'


export default function Row(props){
    return(
        <div className = {`${styles.container}`}>
            <div style = {{width: '22%'}} className = {`${styles.centerCenter}`}>
                <p className = {`${styles.heading}`}>{props.heading}</p>
            </div>
            <p  className = {`${styles.text}`}>{props.c1}</p>
            <p  className = {`${styles.text}`}>{props.c2}</p>
            <p  className = {`${styles.text}`}>{props.c3}</p>
            <p  className = {`${styles.text}`}>{props.c4}</p>
        </div>
    )
}