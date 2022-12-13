
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react'
import styles from './section1.module.css'

export default function Section1(props){

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        axios.get("https://admin.borgfy.com/blogs")
        .then((res)=>{
            setBlogs(res.data)
        })
        .catch((err)=>{alert("Error Occured While Fetching Use Cases")})
    }, [])

    return(
        <div className = {`${styles.container}`}>
            <div className = {`${styles.innerContainer}`}>
                <div className = {`${styles.leftContainer}`}>
                    <p className = {`${styles.heading}`}>Our Blog</p>
                    <p className = {`${styles.text}`}>Creating a product using full-stack development helps in providing a comprehensive approach towards product development.it helps you deliver your idea at a one place<br/>It also allows in making sure that the end product is highly efficient at the user end. Also, it helps in providing a better management approach towards the backend system processes.</p>
                </div>
                <div className = {`${styles.divider} hide_in_mobile`}></div>
                <div className = {`${styles.rigthContainer} hide_in_mobile`}>
                    {blogs.map((b, i)=>{
                        if(i > 3)
                            return
                            
                        return(
                            <React.Fragment>
                                <p className = {`${styles.subheading}`}>{b.title}</p>
                                <p className = {`${styles.text} ${styles.textMargin}`}>{b.subtext.substring(0, 71)}...</p>
                                <div className = {`${styles.horizontalDivider}`}></div>
                            </React.Fragment>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}