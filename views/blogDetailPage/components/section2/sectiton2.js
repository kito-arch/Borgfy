import Image from 'next/image'

import styles from './section2.module.css'

export default function Section2(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.innerContainer}`}>

                <Image src = '/../public/blog_detail_sec2_back.png' layout = 'fill'/>

                <div className = {`${styles.iconsContainer}`}>
                    <div>
                        <div className = {`${styles.iconContainer}`}>
                            <Image src = '/../public/blog_detail_icon_1.png' width = '45px' height = '45px'/>
                        </div>
                        <div className = {`${styles.iconContainer}`}>
                            <Image src = '/../public/blog_detail_icon_2.png' width = '45px' height = '45px'/>
                        </div>
                        <div className = {`${styles.iconContainer}`}>
                            <Image src = '/../public/blog_detail_icon_3.png' width = '45px' height = '45px'/>
                        </div>
                        <div className = {`${styles.iconContainer}`}>
                            <Image src = '/../public/blog_detail_icon_4.png' width = '45px' height = '45px'/>
                        </div>
                    </div>
                </div>

                <div className = {`${styles.bottomContainer}`}>
                    <p className = {`${styles.heading}`}>Simply Dummy Text Of The Printing </p>
                    <div>
                        <Image src = '/../public/blog_detail_icon_share.png.png' width='51px' height = '54px'/>
                    </div>
                </div>
            </div>
        </div>
    )
}