
import Image from 'next/image'
import styles from './section2.module.css'

export default function Section2(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.title}`}>Who we are....</p>
            <p className = {`${styles.text}`}>Borgfy is a Startup Studio, helping entrepreneurs and business leaders transform the world within the digital transformation era and lead the world with better & sustainable tech products. These are more vision-focused, helping in bringing prosperity and provisions for humans. We believe, “Great Products Always come from great thought leaders with gentle hands of craft n wisdom”</p>
            <div style = {{position: 'absolute', top: '50px', right: '0'}}>
                <Image src = '/../public/about_sec2_image1.png' width = '618px' height = '721px' />
            </div>
        </div>
    )
}