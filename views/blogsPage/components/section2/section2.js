
import Image from 'next/image'
import styles from './section2.module.css'

export default function Section2(props){
    return(
        <div style = {{paddingTop: props.paddingTop ?? '40px', paddingBottom: props.paddingBottom ?? '0'}}>
            <div style = {{backgroundColor: props.backgroundColor ?? 'white'}} className = {`${styles.container}`}>
                <div className = {`${styles.leftContainer}`}>
                    <div className = {`${styles.endBetween}`}>
                        <p style = {{color: props.headingColor ?? 'white'}} className = {`${styles.heading}`}>{props.heading}</p>
                        <p className = {`${styles.date}`}>{props.date}</p>
                    </div>
                    <p style = {{color: props.textColor ?? 'white'}} className = {`${styles.text}`}>{props.text}</p>
                    <p className = {`${styles.btn}`}>Read Full Post</p>
                </div>
                <div className = {`${styles.rightContainer}`}>
                    <div className = {`${styles.rightInnerContainer}`}>
                        <Image src = {props.image} width = '597px' height = '374px' />
                    </div>
                </div>
            </div>
        </div>
    )
}