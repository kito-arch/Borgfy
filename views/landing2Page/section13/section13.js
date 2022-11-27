
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { scroll } from '../../../conts_vars'
import styles from './section13.module.css'

export default function Section13(props){

    const [reviews, setReviews] = useState([
        {image: './rev1.jpeg', review: "The company will do what it takes to get the job done and satisfy it's customer.", name: 'Goy Sengmany', title: 'Realtor, Sengmany & Associates'},
        {image: './rev2.png', review: 'The communication on the project was very professional and the logo was done in a timely manner.', name: 'Robb Cheeks', title: 'Consultant, Robb Cheeks Consulting'}
    ])

    const [current, setCurrent] = useState(0)

    useEffect(()=>{
        document.getElementById("slider").scroll(495*current, 0)
    }, [current])
    

    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', top: '-90px', left: '-12rem'}}>
                <Image src = './landing2_sec13_left.png' width = '215px' height = '749px' />
            </div>

            <p data-aos-offset = {-scroll*4600} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.subheading}`}>Testimonials</p>
            <p data-aos-offset = {-scroll*4600} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>Check what our clients are saying</p>

            <div className = {`${styles.stretchBetween}`}>
                <div className = {`${styles.revImageContainer}`}>
                    <div onClick={()=>{setCurrent(prev => {
                        if(prev == 0)
                            return (reviews.length - 1)
                        else 
                            return ((prev - 1)%(reviews.length))
                    })}} style = {{cursor: 'pointer', position: 'absolute', top: '300px', left: '0', zIndex: '100'}}>
                        <Image src = './rev_left.png' width = '60px' height = '60px'/>
                    </div>
                    <div onClick={()=>{setCurrent(prev => ((prev + 1)%(reviews.length)))}} style = {{cursor: 'pointer', position: 'absolute', top: '300px', right: '0', zIndex: '100'}}>
                        <Image src = './rev_right.png' width = '60px' height = '60px'/>
                    </div>
                    <div id = 'slider' className = {`${styles.slideContainer}`}>
                        {reviews.map((rev=>{
                            return(
                                <div style = {{minWidth: '495px', height: '593px', position: 'relative'}}>
                                    <div style = {{position: 'absolute', top: '0', left: '0'}}>
                                        <Image style = {{borderRadius: '10px'}} src = {rev.image} width = '495px' height = '593px' />
                                    </div>
                                </div>
                            )
                        }))}
                    </div>
                    
                </div>
                <div style = {{width: '60%'}} data-aos-offset = {-scroll*4600} data-aos = 'fade-left' data-aos-duration = '3000'>
                    <div style = {{marginBottom: '20px', marginTop: '150px'}}>
                        <Image src = './landing2_sec13_comma.png' width = '31px' height = '27px' />
                    </div>
                    <div style = {{width: '145px'}} className = {`${styles.srtretchBetween}`}>
                        <Image src = './landing2_sec13_star.png' width = '29px' height = '29px' />
                        <Image src = './landing2_sec13_star.png' width = '29px' height = '29px' />
                        <Image src = './landing2_sec13_star.png' width = '29px' height = '29px' />
                        <Image src = './landing2_sec13_star.png' width = '29px' height = '29px' />
                        <Image src = './landing2_sec13_star.png' width = '29px' height = '29px' />
                    </div>
                    <div style = {{position: 'relative'}}>
                        {reviews.map((rev, index)=>{
                            return(
                                <div style = {{position: 'absolute', top: '0', left: '0', transition: 'all 0.5s linear', opacity: (current == index) ? '1' : '0' }}>
                                    <p  className = {`${styles.rev}`}>{rev.review}</p>
                                    <p  className = {`${styles.by}`}>{rev.name}</p>
                                    <p  className = {`${styles.company}`}>{rev.title}</p>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}