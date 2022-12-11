
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react'
import { scroll } from '../../conts_vars'
import PaddingLayout from '../../layouts/paddingLayout/paddingLayout'
import StandardLayout from '../../layouts/standardLayout/standardLayout'
import styles from './blogsPage.module.css'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

export default function DynamicBlogsPage(props){

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        axios.get("https://admin.borgfy.com/blogs")
        .then((res)=>{
            setBlogs(res.data)
        })
        .catch((err)=>{alert("Error Occured While Fetching Use Cases")})
    }, [])

    return(
        <StandardLayout>
            
            <div className = {`${styles.container}`}>

                <div style = {{position: 'absolute', bottom: '-100px', left : '-12rem', zIndex: '10'}}>
                    <Image priority  src = '/../public/blog_sec2_ellipse.png' width = '500px' height = '500px' />
                </div>

                <div style = {{position: 'absolute', bottom: '-100px', right : '0', zIndex: '10'}}>
                    <Image priority  src = '/../public/blog_sec2_ellipse.png' width = '500px' height = '500px' />
                </div>

                <PaddingLayout>
                    <Image priority  src = '/../public/blog_sec1_back.png' layout = 'fill'/>
                    <Section1 blogs = {blogs}/>
                </PaddingLayout>
                {blogs.map((b, i)=>{
                    return(
                        <React.Fragment>
                        {i == 0 ?
                            <PaddingLayout backgroundColor = 'white'>
                                <div data-aos-offset = {-300*scroll} data-aos = 'fade-up' data-aos-duration = '3000'>
                                    <Section2 blog = {b} paddingTop = '80px' backgroundColor = '#F3F5F5' headingColor = 'black' textColor = 'black'/>
                                </div>
                            </PaddingLayout>
                        :
                            <PaddingLayout backgroundColor = 'white'>
                                <div data-aos-offset = {-300*scroll} data-aos = 'fade-up' data-aos-duration = '3000'>
                                    <Section2 blog = {b} paddingTop = '40px' backgroundColor = '#F3F5F5' headingColor = 'black' textColor = 'black'/>
                                </div>
                            </PaddingLayout>
                        }
                        </React.Fragment>
                    )
                })}

                <PaddingLayout backgroundColor = 'white'>
                    <div style = {{height: '200px'}}></div>
                </PaddingLayout>

                {/* <PaddingLayout backgroundColor = 'white'>
                    <div className = {`${styles.paginationContainer}`}>
                        <div className = {`${styles.pageNumberContainer}`}>
                            <p style = {{background: '#377DFF', color: 'white'}} className = {`${styles.pageNumber}`}>1</p>
                            <p className = {`${styles.pageNumber}`}>2</p>
                            <p className = {`${styles.pageNumber}`}>3</p>
                            <p className = {`${styles.pageNumber}`}>...</p>
                            <p className = {`${styles.next}`}>Next</p>
                        </div>
                    </div>
                </PaddingLayout> */}

            </div>
        </StandardLayout>
    )
}