
import styles from './paddingLayout.module.css'

export default function PaddingLayout(props){
    return(
        <div style = {{backgroundColor: props.backgroundColor ?? 'black'}} className = {`${styles.container}`}>
            {props.children}
        </div>
    )
}