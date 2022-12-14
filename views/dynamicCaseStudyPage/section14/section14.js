
import Image from 'next/image'
import styles from './section14.module.css'

export default function Section14(props){
    return(
        <div className = {`${styles.container}`}>
            <div style = {{width: 'fit-content', margin: 'auto'}}>
                {props?.useCase?.final_image &&
                    <Image priority  src = {`https://admin.borgfy.com/uploads/${props?.useCase?.final_image}`} width = '1500px' height = '300px' />
                }
            </div>
        </div>
    )
}