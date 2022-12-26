import Image from 'next/image';
import Link from 'next/link';
import styles from './logo.module.css'

export default function Logo(props){
    return(
        <Link href = '/'>
            <div className = {styles.logoCon}>
                <Image priority  style = {{cursor: 'pointer'}} src = {props.logo ?? (props.double ? '../logo_white.png' : './logo_white.png')} width = {!props.logo ? '159px': '170px'} height = {!props.logo ? '70px' : '90px'}/>
            </div>
        </Link>
    )
}