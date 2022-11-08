
import Image from 'next/image'
import styles from './section3.module.css'

export default function Section3(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.title}`}>What our misson....</p>
            <p className = {`${styles.text}`}>Our mission is to meet and deliver all the business expectations of our client base. With years of expertise and knowledge of bleeding-edge technologies, we serve the corporate world with top-tech services like Artificial Intelligence, Website Designing, Custom IoT applications, Alluring Graphics, and many more. We enable innovation to sustain the growth of our clients by helping them build their dream projects.</p>
            <div style = {{position: 'absolute', top: '92px', right: '0'}}>
                <Image src = '/../public/about_sec3_image1.png' width = '588px' height = '588px' />
            </div>
        </div>
    )
}