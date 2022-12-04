
import Image from 'next/image'
import { useState } from 'react'
import { scroll } from '../../conts_vars'
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

                {(category == 0 || category == 1) &&
                    <PaddingLayout>
                        <Image src = './new_qq_back.png' layout = 'fill' />
                        <div id = "qool" data-aos-offset = {-scroll*1500} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerEnd}`}>
                            <Card1 backgroundColor = {'#00AAE8'} alternate = {true} heading = 'Qool Qatar' text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.' headingMarginBottom = '60px' textMarginBottom = '71px' />
                        </div>
                    </PaddingLayout>
                }

                {(category == 0 || category == 1 || category == 2) &&
                    <PaddingLayout>
                        <Image src = './port_back_1.png' layout = 'fill' />
                        <div id = "atomic" data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerStart}`}>
                            <Card1 heading = 'Atomic' subheading = 'Design   |   Development' text = 'Skrolled is an Influencer marketing and campaign management app that helps in running influencer campaigns, onboarding influencers, creating campaigns,' headingMarginBottom = '14px' textMarginBottom = '43px' />
                        </div>
                    </PaddingLayout>
                }

                {(category == 0 || category == 2) &&
                    <PaddingLayout>
                        <Image src = './port_back_2.png' layout = 'fill' />
                        <div data-aos-offset = {-scroll*5000} data-aos = 'fade-left' data-aos-duration = '1000' className = {`${styles.centerEnd}`}>
                            <Card1 heading = 'Atomic' subheading = 'Design   |   Development' text = 'Skrolled is an Influencer marketing and campaign management app that helps in running influencer campaigns, onboarding influencers, creating campaigns,' headingMarginBottom = '14px' textMarginBottom = '43px' />
                        </div>
                    </PaddingLayout>
                }

                {(category == 0 || category == 1) &&
                    <PaddingLayout>
                        <Image src = './port_back_3.png' layout = 'fill' />
                        <div data-aos-offset = {-scroll*700} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerStart}`}>
                            <Card1 heading = 'Skrolled' subheading = 'Design   |   Development' text = 'Skrolled is an Influencer marketing and campaign management app that helps in running influencer campaigns, onboarding influencers, creating campaigns, auto payments the best place for the freelance marketplace for influencers to make some cash.' headingMarginBottom = '14px' textMarginBottom = '25px' />
                        </div>
                    </PaddingLayout>
                }

                {(category == 0 || category == 1 || category == 2) &&
                    <PaddingLayout>
                        <Image src = './port_back_4.png' layout = 'fill' />
                        <div id = "ro" data-aos-offset = {-scroll*800} data-aos = 'fade-left' data-aos-duration = '1000' className = {`${styles.centerEnd}`}>
                            <Card1 heading = 'R.O.' text = 'Ro is an Influencer Video Chat App built in Flutter and Node.js. Elegant Custom UI/UX Design For User Video Chatting Entertainment App, Quality Designed by Ux Researcher to give best User Experience Flow from User Profiling to Payment booking , Premium Vectors and Icons being Used for smooth easy user interfaceace' headingMarginBottom = '60px' textMarginBottom = '68px' />
                        </div>
                    </PaddingLayout>
                }

                {(category == 0 || category == 1) &&
                    <PaddingLayout>
                        <Image src = './port_back_5.png' layout = 'fill' />
                        <div id = "bizz" data-aos-offset = {-scroll*900} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerStart}`}>
                            <Card1 heading = 'Bizz App' text = 'Bizzycard App is an NFC business card app that helps in sharing your socials at one tap build with smooth fluidic UI design Consists of NFC & Qr URL Sharing features, its a trending business idea among youth so adapt digital transformation world within digital business cards' headingMarginBottom = '60px' textMarginBottom = '71px' />
                        </div>
                    </PaddingLayout>
                }


                {(category == 0 || category == 3) &&
                    <PaddingLayout>
                        <Image src = './port_back_6.png' layout = 'fill' />
                        <div data-aos-offset = {-scroll*1000} data-aos = 'fade-left' data-aos-duration = '1000' className = {`${styles.centerEnd}`}>
                            <Card1 heading = 'Sage Creek' text = 'Sage Creekra is Real Estate community website, we helped them transform the website look and performance with finest quality.' headingMarginBottom = '60px' textMarginBottom = '68px' />
                        </div>
                    </PaddingLayout>
                }

                {(category == 0 || category == 1) &&
                    <PaddingLayout>
                        <Image src = './port_back_7.png' layout = 'fill' />
                        <div data-aos-offset = {-scroll*1500} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerStart}`}>
                            <Card1 alternate = {true} heading = 'Charzer' text = 'Charzer is an IoT EV Charging Cross-Platform App Build On React native Platform With Full Dynamic UI/UX And Detailing its has full custom development of Frontend /Backend Admin Side for Dynamic Data build on Django' headingMarginBottom = '60px' textMarginBottom = '71px' />
                        </div>
                    </PaddingLayout>
                }

                {(category == 0 || category == 2) &&
                <PaddingLayout>
                        <Image src = './port_back_8.png' layout = 'fill' />
                        <div data-aos-offset = {-scroll*1600} data-aos = 'fade-left' data-aos-duration = '1000' className = {`${styles.centerEnd}`}>
                            <Card1 heading = 'Online Edtech' text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.' headingMarginBottom = '60px' noIcon = {true} />
                        </div>
                    </PaddingLayout>
                }

                {(category == 0 || category == 2) &&
                <PaddingLayout>
                        <Image src = './port_back_9.png' layout = 'fill' />
                        <div data-aos-offset = {-scroll*1700} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerStart}`}>
                            <Card1 heading = 'Kitchenware' text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.' headingMarginBottom = '60px' noIcon = {true} />
                        </div>
                    </PaddingLayout>
                }

            </div>
        </StandardLayout>
    )
}