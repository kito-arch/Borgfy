
import Image from 'next/image'
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
            {props.contact &&
                <div style = {{position: 'absolute', top: '0', left: '0'}}>
                    <Image priority  src = {props.double ? '../contact_footer.png' : './contact_footer.png'} width = '2304px' height = '388px'/>
                </div>
            }
            <div className = {`${styles.innerContainer}`}>
                <FooterTop contact = {props.contact} double = {props.double}/>
                <FooterBottom double = {props.double}/>
            </div>
        </div>
    )
}