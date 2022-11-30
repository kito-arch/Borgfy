
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './footer.module.css'
import FooterBottom from './footerBottom/footerBottom'
import FooterTag from './footerTag/footerTag'
import FooterTop from './footerTop/footerTop'

export default function Footer(props){

    const router = useRouter()

    const [zoom, setZoom] = useState("100%")

    useEffect(() => {
        if(router.pathname == "/portfolio"){
            setZoom("85%")
        }
        else{
            setZoom("100%")
        }
    }, [[router.pathname]])
    

    return(
        <div style = {{zoom: zoom}} className = {`${styles.container}`}>
            <div className = {`${styles.innerContainer}`}>
                <FooterTop/>
                <FooterBottom/>
            </div>
        </div>
    )
}