
import styles from './footer.module.css'
import FooterBottom from './footerBottom/footerBottom'
import FooterTop from './footerTop/footerTop'

export default function Footer(props){
    return(
        <div className = {`${styles.container}`}>
            <FooterTop/>
            <FooterBottom/>
        </div>
    )
}