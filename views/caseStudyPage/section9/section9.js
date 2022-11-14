
import Image from 'next/image'
import styles from './section9.module.css'

export default function Section9(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{zIndex: '10', position: 'absolute', right: '0rem', top: '0px'}}>
                <Image src = '/../public/case_sketching_gray.png' width = '1227px' height = '1227px' />
            </div>

            <div className = {`${styles.startBetween}`}>
                <div data-aos-offset = "-2800" data-aos = 'fade-right' data-aos-duration = '1000'>
                    <div className = {`${styles.headingContainer}`}>
                        <div style = {{position: 'absolute', left: '-25px', top: '0'}}>
                            <Image src = '/../public/gray_ellipse.png' width = '61px' height = '61px'/>
                        </div>
                        <p className = {`${styles.heading}`}>Sketching</p>
                    </div>
                    <p className = {`${styles.text}`}>Once our raw content was ready, we started putting all our ideas from paper to pen. We began sketching and visualizing transitions screen to screen and user interference's. </p>
                </div>
                <Image src = '/../public/case_sec9_image.png' width = '900px' height = '655px' />
            </div>
        </div>
    )
}