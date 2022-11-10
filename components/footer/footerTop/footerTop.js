import Image from 'next/image' 

import styles from './footerTop.module.css'
export default function FooterTop(props){
    return(
        <div className = {`${styles.container} ${styles.startBetween}`}>
            <div style = {{position: 'absolute', top: 20, right: '-12rem'}}>
                <Image src = '/../public/hand.png' width = '190px' height = '228px'/>
            </div>
            <div style = {{position: 'absolute', top: '200px', left: '-12rem'}}>
                <Image src = '/../public/footer_socials.png' width = '1757px' height = '260px'/>
            </div>

            <p className = {`${styles.desc}`}>“Be the viewer or be the changer it`s your choice”<br/>Don`t be just  a daydreamer let`s do it and build something great</p>
            <div>
                <p className = {`${styles.have}`}>Have an Idea ?</p>
                <div className = {`${styles.chipContainer}`}>
                    <p className = {`${styles.lets}`}>lets Connect</p>
                    <Image src = '/../public/arrowRight.png' width = '10px' height = '20px'/>
                </div>
            </div>
        </div>
    )
}