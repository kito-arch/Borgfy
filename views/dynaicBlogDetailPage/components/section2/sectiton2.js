import Image from 'next/image'
import Link from 'next/link'

import styles from './section2.module.css'

export default function Section2(props){
    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.innerContainer}`}>

                <Image priority  src = {`https://admin.borgfy.com/uploads/${props?.blog?.image2}`} layout = 'fill'/>

                <div className = {`${styles.iconsContainer}`}>
                    <div>
                        
                        {props?.blog?.facebook_link &&
                            <Link href = {`${props?.blog?.facebook_link}`}>
                                <div style = {{cursor: 'pointer'}} className = {`${styles.iconContainer}`}>
                                    <Image priority  src = '/../public/blog_detail_icon_1.png' width = '45px' height = '45px'/>
                                </div>
                            </Link>
                        }

                        {props?.blog?.instagram_link &&
                            <Link href = {`${props?.blog?.instagram_link}`}>
                                <div style = {{cursor: 'pointer'}} className = {`${styles.iconContainer}`}>
                                    <Image priority  src = '/../public/blog_detail_icon_2.png' width = '45px' height = '45px'/>
                                </div>
                            </Link>
                        }

                        {props?.blog?.twiiter_link &&
                            <Link href = {`${props?.blog?.twiiter_link}`}>
                                <div style = {{cursor: 'pointer'}} className = {`${styles.iconContainer}`}>
                                    <Image priority  src = '/../public/blog_detail_icon_3.png' width = '45px' height = '45px'/>
                                </div>
                            </Link>
                        }

                        {props?.blog?.linkedin_link &&
                            <Link href = {`${props?.blog?.linkedin_link}`}>
                                <div style = {{cursor: 'pointer'}} className = {`${styles.iconContainer}`}>
                                    <Image priority  src = '/../public/blog_detail_icon_4.png' width = '45px' height = '45px'/>
                                </div>
                            </Link>
                        }

                    </div>
                </div>

                <div className = {`${styles.bottomContainer}`}>
                    <p className = {`${styles.heading}`}>{props?.blog?.title}</p>
                    <div>
                        <Image priority  src = '/../public/blog_detail_icon_share.png.png' width='51px' height = '54px'/>
                    </div>
                </div>
            </div>
        </div>
    )
}