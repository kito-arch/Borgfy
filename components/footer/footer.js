
import styles from './footer.module.css'
import FooterBottom from './footerBottom/footerBottom'
import FooterTag from './footerTag/footerTag'
import FooterTop from './footerTop/footerTop'

export default function Footer(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.innerContainer}`}>
                <FooterTop/>
                <FooterBottom/>
            </div>
        </div>
    )
}