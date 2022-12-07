
import styles from './case.module.css'
import PaddingLayout from "../../layouts/paddingLayout/paddingLayout";
import StandardLayout from "../../layouts/standardLayout/standardLayout";
import Image from 'next/image';
import { scroll } from '../../conts_vars';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function DynamicCasePage(props){

    const [useCases, setUseCases] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/cases")
        .then((res)=>{
            setUseCases(res.data)
        })
        .catch((err)=>{alert("Error Occured While Fetching Use Cases")})
    }, [])

    return(

        <StandardLayout>
            <div className = {`${styles.container}`}>
                
                <PaddingLayout backgroundColor = 'white'>

                    <div style = {{position: 'absolute', bottom: '250px', right: '0rem'}}>
                        <Image src = './case2_hifi.png' width = '300px' height = '300px'/>
                    </div>

                    <div className = {`${styles.innerContainer}`}>

                        <div style = {{position: 'absolute', top: '400px', left: '-4rem'}}>
                            <Image src = './digital_left_triangle.png' width = '219.47px' height = '221.19px'/>
                        </div>
                        <div style = {{position: 'absolute', top: 23, right: '0rem'}}>
                            <Image src = './digital_right_triangle.png' width = '219.47px' height = '221.19px'/>
                        </div>

                        <p data-aos-offset = {-300*scroll} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>Check In Depth - How we solved it</p>
                        <p data-aos-offset = {-300*scroll} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.subheading}`}>Case Studies</p>


                        <div className = {`${styles.stretchBetween}`}>

                            <div style = {{position: 'absolute', top: '200px', left: '-24rem'}}>
                                <Image src = './case2_ellipse1.png' width = '600px' height = '3000px'/>
                            </div>
                            <div style = {{position: 'absolute', top: '800px', right: '-348px'}}>
                                <Image src = './case2_ellipse2.png' width = '600px' height = '600px'/>
                            </div>


                            {useCases.map((uc)=>{
                                return(
                                    <div data-aos-offset = {-300*scroll} data-aos = 'fade-right' data-aos-duration = '3000'>
                                        <div style = {{display: 'flex', alignItems: 'center'}}>
                                            <Image src = './case2_ellipse.png' width = '31px' height = '31px' />
                                            <p className = {`${styles.mobile}`}>{uc?.type}</p>
                                        </div>
                                        <div style = {{width: '730px'}} className = {`${styles.stretchBetween}`}>
                                            <p className = {`${styles.sure}`}>{uc?.app_name}</p>
                                            <p className = {`${styles.gray}`}>{uc?.type2}</p>
                                        </div>
                                        <div className = {`${styles.hover}`}>
                                            <div className = {`${styles.box}`}>
                                                <Image src = "./case2_box_back.png" layout = 'fill'/>
                                                <p className = {`${styles.boxHeading}`}>{uc?.title}</p>
                                                <p className = {`${styles.boxSubheading}`}>{uc?.description}</p>
                                                <div style = {{width: 'fit-content', margin: 'auto'}}>
                                                    <Image src = {`http://localhost:3000/uploads/${uc?.image}`} width = '668px' height = '525px'/>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href = {`dynamic-case/${uc.link}`}>
                                            <p style = {{cursor: 'pointer'}} className = {`${styles.read}`}>Read More</p>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>                        

                </PaddingLayout>
            </div>
        </StandardLayout>
    )
}