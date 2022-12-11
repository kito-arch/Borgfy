
import styles from './blogDetailPage.module.css'
import PaddingLayout from "../../layouts/paddingLayout/paddingLayout";
import StandardLayout from "../../layouts/standardLayout/standardLayout";
import Section1 from './components/section1/section1';
import Image from 'next/image';
import Section2 from './components/section2/sectiton2';
import Section3 from './components/section3/section3';
import { scroll } from '../../conts_vars';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


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

export default function DynamicBlogDetailPage(props){


    let date = (b)=>{
        // return `${b?.date.split("T")[0].split("-")[2]} ${months[parseInt(b?.date.split("T")[0].split("-")[1])-1]} ${b?.date.split("T")[0].split("-")[0]}`
        return ''
    }


    return(
        <StandardLayout double = {true}>
            <div className = {`${styles.container}`}>
                <PaddingLayout>
                    <Image priority  src = '/../public/blog_sec1_back.png' layout = 'fill'/>
                    <Section1/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section2 blog = {props?.blog}/>
                </PaddingLayout>

                {props?.blog?.sections.map((b, i)=>{
                    return(
                        
                        <PaddingLayout backgroundColor = 'white'>
                            <div data-aos-offset = {-500*scroll} data-aos = 'fade-up' data-aos-duration = '3000'>
                                <Section3 title = {b?.title} date = {i == 0 ? date(b) : '' }text = {b?.description}/>
                            </div>
                        </PaddingLayout>
                    )
                })}

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