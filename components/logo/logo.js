import Image from 'next/image';
import Link from 'next/link';
import styles from './logo.module.css'

export default function Logo(props){
    return(
        <Link href = 'landing2'>
            <div className = {styles.logoCon}>
                <Image priority  style = {{cursor: 'pointer'}} src = {props.logo ?? (props.double ? '/../public/logo_white.png' : '/../public/logo_white.png')} width = {!props.logo ? '159px': '170px'} height = {!props.logo ? '70px' : '90px'}/>
            </div>
        </Link>
    )
}