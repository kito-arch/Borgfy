
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import styles from './standardLayout.module.css'
import FooterTag from '../../components/footer/footerTag/footerTag'

export default function StandardLayout(props){
    return(
        <div style = {{position: 'relative'}}>
            <Navbar double = {props.double} logo =  {props.logo}/>
                {props.children}
            <Footer double = {props.double} backgroundColor = {props.backgroundColor ?? 'white'}/>
            <FooterTag/>
        </div>
    )
}