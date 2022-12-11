
import Image from 'next/image'
import styles from './section3.module.css'

export default function Section3(props){
    return(
        <div className = {`${styles.container}`}>

            {/* <div style = {{zIndex: '20', position: 'absolute', bottom: props.bottom, left: props.left ?? 'unset', right: props.right ?? 'unset'}}>
                <Image priority  src = {props.image} width = '600px' height = '600px'/>
            </div> */}

            <div className = {`${styles.centerBetween}`}>
                <p className = {`${styles.heading}`}>{props.title}</p>
                <p className = {`${styles.date}`}>{props.date}</p>
            </div>
            <p className = {`${styles.text}`}>{props.text}</p>
            {props.image &&
                <div style = {{margin: 'auto', width: '100%'}}>
                    <Image priority  src = {`https://admin.borgfy.com/uploads/${props.image}` } width = '1200px' height = '600px'/>
                </div>
            }

        </div>
    )
}