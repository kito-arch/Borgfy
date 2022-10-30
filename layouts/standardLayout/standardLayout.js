
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import styles from './standardLayout.module.css'

export default function StandardLayout(props){
    return(
        <div style = {{position: 'relative'}}>
            <Navbar/>
                {props.children}
            <Footer/>
        </div>
    )
}