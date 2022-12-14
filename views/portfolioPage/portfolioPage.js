
import Image from 'next/image'
import { useState } from 'react'
import { myscroll, mobscroll } from '../../conts_vars'
import PaddingLayout from '../../layouts/paddingLayout/paddingLayout'
import StandardLayout from '../../layouts/standardLayout/standardLayout'
import Card1 from './components/card1/card1'
import styles from './portfolioPage.module.css'

export default function PortfolioPage(props){

    const [category, setCategory] = useState(0)


    return(

        <StandardLayout backgroundColor = 'black'>

            <div className = {`${styles.container}`}>
                <div className = {`${styles.topContainer}`}>

                    <div style = {{background: (category == 0) ? 'linear-gradient(to bottom, #7785ff, #fd2f31)' : 'none'}} className = {`${styles.categoryContainer}`}>
                        <p onClick={()=>{setCategory(0)}} className = {`${styles.category}`}>All</p>
                    </div>
                    <div style = {{background: (category == 1) ? 'linear-gradient(to bottom, #7785ff, #fd2f31)' : 'none'}} className = {`${styles.categoryContainer}`}>
                        <p onClick={()=>{setCategory(1)}} className = {`${styles.category}`}>Mobile Apps</p>
                    </div>
                    <div style = {{background: (category == 2) ? 'linear-gradient(to bottom, #7785ff, #fd2f31)' : 'none'}} className = {`${styles.categoryContainer}`}>
                        <p onClick={()=>{setCategory(2)}} className = {`${styles.category}`}>UI/UX</p>
                    </div>
                    <div style = {{background: (category == 3) ? 'linear-gradient(to bottom, #7785ff, #fd2f31)' : 'none'}} className = {`${styles.categoryContainer}`}>
                        <p onClick={()=>{setCategory(3)}} className = {`${styles.category}`}>Website</p>
                    </div>

                </div>

                {(category == 0 || category == 1 || category == 2) &&
                    <PaddingLayout>
                        <div className={styles.mb}>
                        <Image className='show_in_mobile' priority  src = './port_back_7.png.png' layout = 'fill' />
                        <div style = {{margin: 'auto', width : 'fit-content'}} className='show_in_mobile'>
                            <Image priority  src = './qatar_mob.png' width = {'278.75px'} height = {'272.9166666666667px'}></Image>
                        </div>
                        <Image className='hide_in_mobile' priority  src = './qool_qatar_back.png' layout = 'fill' />
                        <div id = "qool" data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1500} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.centerEnd}`}>
                            <Card1 subheading = "Design   |   Development" apple = "https://apps.apple.com/us/app/qool-qatar/id6443429633" android = "https://play.google.com/store/apps/details?id=com.qoolqatar.app" backgroundColor = {'#00AAE8'} alternate = {true} heading = 'Qool Qatar' text = 'A Travel Tech Event & Activities Booking App for Qatar, It Lets Customers Enjoy Leisure Time and explore and book nearby cultural and tourist hotspots.' headingMarginBottom = '60px' textMarginBottom = '71px' />
                        </div>
                        </div>
                    </PaddingLayout>
                }

                {(category == 0 || category == 2) &&
                    <PaddingLayout>
                        <div style = {{paddingBottom: '60px'}} className={styles.mb}>
                        <Image priority  src = './port_back_1.png.png' layout = 'fill' />
                        <div className='show_in_mobile' >
                            <Image priority  src = {'./port_back_1_.png'} width = {'960px'} height = {'637px'}></Image>
                        </div>
                        <div className='hide_in_mobile' style = {{position: 'absolute', top: '3rem', right: '2rem'}}>
                            <Image priority  src = {'./port_back_1_.png'} width = {'960px'} height = {'637px'}></Image>
                        </div>
                        <div id = "atomic" data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*300} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.centerStart}`}>
                            <Card1 width = '960px' height = '637px' im = './port_back_1_.png' heading = 'Atomic' subheading = 'Design' text = 'A social blockchain-based app designed for sharing thoughts hacks inspired by Twitter UX.' headingMarginBottom = '14px' textMarginBottom = '43px' />
                        </div>
                        </div>
                    </PaddingLayout>
                }

                {(category == 0 || category == 2) &&
                    <PaddingLayout>
                        <div style = {{paddingBottom: '38px'}} className={styles.mb}>
                            <Image priority  src = './port_back_2.png.png' layout = 'fill' />
                            <div className='show_in_mobile'>
                                <Image priority  src = {'./port_back_2_.png'} width = {'955px'} height = {'696px'}></Image>
                            </div>
                            <div className='hide_in_mobile' style = {{position: 'absolute', top: '3rem', left: '4rem'}}>
                                <Image priority  src = {'./port_back_2_.png'} width = {'955px'} height = {'696px'}></Image>
                            </div>
                            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*5000} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.centerEnd}`}>
                                <Card1 width = '955px' height = '696px' im = './port_back_2_.png'  heading = 'Borgfy' subheading = 'Design' text = 'Its our company corporate website UIUX earlier designed based on software agency model.' headingMarginBottom = '14px' textMarginBottom = '43px' />
                            </div>
                        </div>
                    </PaddingLayout>
                }

                {(category == 0 || category == 1 || category == 2) &&
                    <PaddingLayout>
                        <div className={styles.mb}>
                        <Image priority  src = './port_back_3.png.png' layout = 'fill' />
                        <div className='show_in_mobile' >
                            <Image priority  src = {'./port_back_3_.png'} width = {'799px'} height = {'608px'}></Image>
                        </div>
                        <div className='hide_in_mobile' style = {{position: 'absolute', top: '6rem', right: '4rem'}}>
                            <Image priority  src = {'./port_back_3_.png'} width = {'799px'} height = {'608px'}></Image>
                        </div>
                        <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*700} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.centerStart}`}>
                            <Card1 width = '799px' height = '608px' im = './port_back_3_.png' heading = 'Skrolled' subheading = 'Design   |   Development' text = 'Skrolled is an Influencer marketing and campaign management app that helps in running influencer campaigns, onboarding influencers, creating campaigns, auto payments the best place for the freelance marketplace for influencers to make some cash.' headingMarginBottom = '14px' textMarginBottom = '25px' />
                        </div>
                        </div>
                    </PaddingLayout>
                }

                {(category == 0 || category == 2) &&
                    <PaddingLayout>
                        <div className={styles.mb}>
                        <Image priority  src = './port_back_4.png.png' layout = 'fill' />
                        <div className='show_in_mobile' >
                            <Image priority  src = {'./port_back_4_.png'} width = {'901.7142857142858px'} height = {'501.42857142857144px'}></Image>
                        </div>
                        <div className='hide_in_mobile' style = {{position: 'absolute', top: '14rem', left: '4rem'}}>
                            <Image priority  src = {'./port_back_4_.png'} width = {'901.7142857142858px'} height = {'501.42857142857144px'}></Image>
                        </div>
                        <div id = "ro" data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*800} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.centerEnd}`}>
                            <Card1 width = '1052px' height = '585px' im = './port_back_4_.png' subheading = "Design" heading = 'R.O.' text = 'Ro is an Influencer Video Chat App built in Flutter and Node.js. Elegant Custom UI/UX Design For User Video Chatting Entertainment App, Quality Designed by Ux Researcher to give best User Experience Flow from User Profiling to Payment booking , Premium Vectors and Icons being Used for smooth easy user interfaceace' headingMarginBottom = '60px' textMarginBottom = '68px' />
                        </div>
                        </div>
                    </PaddingLayout>
                }

                {(category == 0 || category == 1 || category == 2) &&
                    <PaddingLayout>
                        <div className={styles.mb}>
                        <Image priority  src = './port_back_5.png.png' layout = 'fill' />
                        <div className='show_in_mobile' >
                            <Image priority  src = {'./port_back_5_.png'} width = {'740px'} height = {'673px'}></Image>
                        </div>
                        <div className='hide_in_mobile' style = {{position: 'absolute', top: '6rem', right: '4rem'}}>
                            <Image priority  src = {'./port_back_5_.png'} width = {'740px'} height = {'673px'}></Image>
                        </div>
                        <div id = "bizz" data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*900} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.centerStart}`}>
                            <Card1 android = "https://play.google.com/store/apps/details?id=com.app.bizzapp&gl=NL" apple = "https://apps.apple.com/in/app/bizzy-app/id1573739023" width = '740px' height = '673px' im = './port_back_5_.png' subheading = "Design   |   Development" heading = 'Bizzy App' text = 'Bizzycard App is an NFC business card app that helps in sharing your socials at one tap build with smooth fluidic UI design Consists of NFC & Qr URL Sharing features, its a trending business idea among youth so adapt digital transformation world within digital business cards' headingMarginBottom = '60px' textMarginBottom = '71px' />
                        </div>
                        </div>
                    </PaddingLayout>
                }


                {(category == 0 || category == 3 || category == 2) &&
                    <PaddingLayout>
                        <div className={styles.mb}>
                        <Image priority  src = './port_back_6.png.png' layout = 'fill' />
                        <div className='show_in_mobile' >
                            <Image priority  src = {'./port_back_6_.png'} width = {'764.2142857142857px'} height = {'758.6428571428571px'}></Image>
                        </div>
                        <div className='hide_in_mobile' style = {{position: 'absolute', top: '-10px', left: '4rem'}}>
                            <Image priority  src = {'./port_back_6_.png'} width = {'764.2142857142857px'} height = {'758.6428571428571px'}></Image>
                        </div>
                        <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1000} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.centerEnd}`}>
                            <Card1 web = "https://sagecreekra.com/" width = '823px' height = '817px' im = './port_back_6_.png' subheading = "Design   |   Development" heading = 'Sage Creek' text = 'Sage Creekra is Real Estate community website, we helped them transform the website look and performance with finest quality.' headingMarginBottom = '60px' textMarginBottom = '68px' />
                        </div>
                        </div>
                    </PaddingLayout>
                }

                {(category == 0 || category == 1 || category == 2) &&
                    <PaddingLayout>
                        <div className={styles.mb}>
                        <Image priority  src = './port_back_7.png.png' layout = 'fill' />
                        <div style = {{width: '300px', margin: 'auto'}} className='show_in_mobile'>
                            <Image priority  src = {'./port_back_7_.png'} width = {'794.1666666666666px'} height = {'555px'}></Image>
                        </div>
                        <div className='hide_in_mobile' style = {{position: 'absolute', top: '10rem', right: '10rem'}}>
                            <Image priority  src = {'./port_back_7_.png'} width = {'794.1666666666666px'} height = {'555px'}></Image>
                        </div>
                        <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1500} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.centerStart}`}>
                            <Card1 android = "https://play.google.com/store/apps/details?id=com.first.faebikes.faeconsumerapp&hl=en_IN&gl=US" apple = "https://apps.apple.com/in/app/charzer/id1549198545" width = '953px' height = '666px' im = './port_back_7_.png' alternate = {true} subheading = "Design   |   Development" heading = 'Charzer' text = 'Charzer is an IoT EV Charging Cross-Platform App Build On React native Platform With Full Dynamic UI/UX And Detailing its has full custom development of Frontend /Backend Admin Side for Dynamic Data build on Django' headingMarginBottom = '60px' textMarginBottom = '71px' />
                        </div>
                        </div>
                    </PaddingLayout>
                }

                {(category == 0 || category == 2) &&
                    <PaddingLayout>
                        <div className={styles.mb}>
                        <Image priority  src = './port_back_8.png.png' layout = 'fill' />
                        <div className='show_in_mobile'>
                            <Image priority  src = {'./port_back_8_.png'} width = {'871px'} height = {'616px'}></Image>
                        </div>
                        <div className='hide_in_mobile' style = {{position: 'absolute', top: '3rem', left: '4rem'}}>
                            <Image priority  src = {'./port_back_8_.png'} width = {'871px'} height = {'616px'}></Image>
                        </div>
                        <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1600} data-aos = 'fade-left' data-aos-duration = '3000' className = {`${styles.centerEnd}`}>
                            <Card1 width = '871px' height = '616px' im = './port_back_8_.png' subheading = "Design" heading = 'Online Edtech' text = 'Website Designed for Online Coaching Centre for Civil Services Exam For Online Live Video Interaction on Demand Courses Training.' headingMarginBottom = '60px' noIcon = {true} />
                        </div>
                        </div>
                    </PaddingLayout>
                }

                {(category == 0 || category == 2) &&
                    <PaddingLayout>
                        <div className={styles.mb}>
                        <Image priority  src = './port_back_9.png.png' layout = 'fill' />
                        <div className='show_in_mobile' >
                            <Image priority  src = {'./port_back_9_.png'} width = {'738px'} height = {'604px'}></Image>
                        </div>
                        <div className='hide_in_mobile' style = {{position: 'absolute', top: '3rem', right: '4rem'}}>
                            <Image priority  src = {'./port_back_9_.png'} width = {'738px'} height = {'604px'}></Image>
                        </div>
                        <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1700} data-aos = 'fade-right' data-aos-duration = '3000' className = {`${styles.centerStart}`}>
                            <Card1 width = '738px' height = '604px' im = './port_back_9_.png' subheading = "Design" heading = 'Kitchenware' text = 'Kitchenware Website Designed is an informative website for kitchenware startups for branding.' headingMarginBottom = '60px' noIcon = {true} />
                        </div>
                        </div>
                    </PaddingLayout>
                }

            </div>
        </StandardLayout>
    )
}