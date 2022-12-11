
import Image from 'next/image'
import Link from 'next/link'
import styles from './section2.module.css'


const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]

export default function Section2(props){
    return(
        <div style = {{paddingTop: props.paddingTop ?? '40px', paddingBottom: props.paddingBottom ?? '0'}}>
            <div style = {{backgroundColor: props.backgroundColor ?? 'white'}} className = {`${styles.container}`}>
                <div className = {`${styles.leftContainer}`}>
                    <div className = {`${styles.endBetween}`}>
                        <p style = {{color: props.headingColor ?? 'white'}} className = {`${styles.heading}`}>{props.blog.title}</p>
                        <p className = {`${styles.date}`}>{props.blog.date.split("T")[0].split("-")[2]} {months[parseInt(props.blog.date.split("T")[0].split("-")[1])-1]} {props.blog.date.split("T")[0].split("-")[0]}</p>
                    </div>
                    <p style = {{color: props.textColor ?? 'white'}} className = {`${styles.text}`}>{props.blog.subtext}</p>
                    <Link href = {`dynamic-blog/${props.blog.link}`}>
                        <p className = {`${styles.btn}`}>Read Full Post</p>
                    </Link>
                </div>
                {props.blog.image1 &&
                    <div className = {`${styles.rightContainer}`}>
                        <div className = {`${styles.rightInnerContainer}`}>
                            <Image priority  src = {`https://admin.borgfy.com/uploads/${props.blog.image1}`} width = '597px' height = '374px' />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}