
import Image from 'next/image'
import styles from './row.module.css'

export default function Row(props){
    return(
        <div style = {{marginBottom: props.right ? '33px' : '14px', paddingLeft: props.right ? '110px' : '0'}} className = {`${styles.container}`}>
            <div className = {`${styles.image}`}>
                <Image src = {props.image} width = '282px' height = '282px'/>
            </div>
            <div className = {`${styles.desc}`}>
                <p className = {`${styles.subheading}`}>{props.subheading}</p>
                <p className = {`${styles.subtext}`}>{props.subtext}</p>
            </div>
        </div>
    )
}