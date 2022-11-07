
import Image from 'next/image'
import styles from './section10.module.css'

export default function Section10(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.startBetween}`}>
                <Image src = '/../public/case_sec10_image.png' width = '900px' height = '655px' />
                <div>
                    <div className = {`${styles.headingContainer}`}>
                        <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                            <Image src = '/../public/gray_ellipse.png' width = '61px' height = '61px'/>
                        </div>
                        <p className = {`${styles.heading}`}>Wireframe</p>
                    </div>
                    <p className = {`${styles.text}`}>After conducting the user research, we planned a layout keeping information hierarchy in mind and then sketched the outline visual and details of the main features and the big presentation.</p>
                </div>
            </div>
        </div>
    )
}