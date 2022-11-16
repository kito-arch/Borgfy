import Image from 'next/image';

export default function Logo(props){
    return(
        <Image src = {props.logo ?? '/../public/logo_white.png'} width = '159px' height = '70px'/>
    )
}