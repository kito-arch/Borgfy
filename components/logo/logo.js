import Image from 'next/image';
import Link from 'next/link';

export default function Logo(props){
    return(
        <Link href = 'landing2'>
            <Image style = {{cursor: 'pointer'}} src = {props.logo ?? './logo_white.png'} width = {!props.logo ? '159px': '170px'} height = {!props.logo ? '70px' : '90px'}/>
        </Link>
    )
}