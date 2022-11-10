
import styles from './footerTag.module.css'

export default function FooterTag(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.copy}`}>Copyrght 2022 all right reserved</p>
        </div>
    )
}