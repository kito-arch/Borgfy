
import styles from './footerTag.module.css'

export default function FooterTag(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.copy}`}>Copyrght Borgfy 2023</p>
        </div>
    )
}