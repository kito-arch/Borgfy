
import Image from 'next/image'
import styles from './row.module.css'

export default function Row(props){
    return(
        <div className = {`${styles.container}`}>
            {props.left &&
                <div className = {`${styles.imageContainer}`}>
                    {props.image &&
                        <div style = {{paddingTop: props.imagePaddingTop ?? '0', paddingLeft: props.imagePaddingLeft ?? '0'}}>
                            <Image src = {props.image} width = {props.width} height = {props.height} />
                        </div>
                    }
                </div>
            }

            <div className = {`${styles.textContainer}`}>
                {props.left &&
                    <div style = {{position: 'absolute', left: props.leftBulb ? '-400px' : '0', top: '0'}}>
                        <Image src = {props.leftBulb ? '/../public/full_stack_left_bulb.png' : '/../public/full_stack_right_bulb.png'} width = '400px' height = '80px'/>
                    </div>  
                }
                {!props.left &&
                    <div style = {{position: 'absolute', right: props.leftBulb ? '0' : '-400px', top: '0'}}>
                        <Image src = {props.leftBulb ? '/../public/full_stack_left_bulb.png' : '/../public/full_stack_right_bulb.png'} width = '400px' height = '80px'/>
                    </div>  
                }
                <div style = {{paddingTop: props.textPaddingTop ?? '0', paddingLeft: props.textPaddingLeft ?? '0', paddingRight: props.textPaddingRight ?? '20px', paddingBottom: props.textPaddingBottom ?? '0'}}>
                    <p className = {`${styles.heading}`}>{props.heading}</p>
                    <p className = {`${styles.text}`}>{props.text}</p>
                </div>
            </div>
            
            {!props.left && 
                <div className = {`${styles.imageContainer}`}>
                    {props.image &&
                        <div style = {{paddingTop: props.imagePaddingTop ?? '0', paddingLeft: props.imagePaddingLeft ?? '0'}}>
                            <Image src = {props.image} width = {props.width} height = {props.height} />
                        </div>
                    }
                </div>
            }
        </div>
    )
}