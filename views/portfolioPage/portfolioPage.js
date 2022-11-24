
import Image from 'next/image'
import { scroll } from '../../conts_vars'
import PaddingLayout from '../../layouts/paddingLayout/paddingLayout'
import StandardLayout from '../../layouts/standardLayout/standardLayout'
import Card1 from './components/card1/card1'
import styles from './portfolioPage.module.css'

export default function PortfolioPage(props){
    return(

        <StandardLayout backgroundColor = 'black'>

            <div className = {`${styles.container}`}>
                <div className = {`${styles.topContainer}`}>
                    <p className = {`${styles.category}`}>Category_1</p>
                    <p className = {`${styles.category}`}>Category_2</p>
                    <p className = {`${styles.category}`}>Category_3</p>
                    <p className = {`${styles.category}`}>Category_4</p>

                </div>

                <PaddingLayout>
                    <Image src = './qool_qatar_back.png' layout = 'fill' />
                    <div data-aos-offset = {-scroll*1500} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerEnd}`}>
                        <Card1 backgroundColor = {'#00AAE8'} alternate = {true} heading = 'Qool Qatar' text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.' headingMarginBottom = '60px' textMarginBottom = '71px' />
                    </div>
                </PaddingLayout>

                <PaddingLayout>
                    <Image src = './atomic_back.png' layout = 'fill' />
                    <div data-aos-offset = {-scroll*300} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerStart}`}>
                        <Card1 heading = 'Atomic' subheading = 'Design   |   Development' text = 'Skrolled is an Influencer marketing and campaign management app that helps in running influencer campaigns, onboarding influencers, creating campaigns,' headingMarginBottom = '14px' textMarginBottom = '43px' />
                    </div>
                </PaddingLayout>

                <PaddingLayout>
                    <Image src = './port_back_2.png' layout = 'fill' />
                    <div data-aos-offset = {-scroll*5000} data-aos = 'fade-left' data-aos-duration = '1000' className = {`${styles.centerEnd}`}>
                        <Card1 heading = 'Atomic' subheading = 'Design   |   Development' text = 'Skrolled is an Influencer marketing and campaign management app that helps in running influencer campaigns, onboarding influencers, creating campaigns,' headingMarginBottom = '14px' textMarginBottom = '43px' />
                    </div>
                </PaddingLayout>

                <PaddingLayout>
                    <Image src = './port_back_3.png' layout = 'fill' />
                    <div data-aos-offset = {-scroll*700} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerStart}`}>
                        <Card1 heading = 'Skrolled' subheading = 'Design   |   Development' text = 'Skrolled is an Influencer marketing and campaign management app that helps in running influencer campaigns, onboarding influencers, creating campaigns, auto payments the best place for the freelance marketplace for influencers to make some cash.' headingMarginBottom = '14px' textMarginBottom = '25px' />
                    </div>
                </PaddingLayout>

                <PaddingLayout>
                    <Image src = './ro_back.png' layout = 'fill' />
                    <div data-aos-offset = {-scroll*800} data-aos = 'fade-left' data-aos-duration = '1000' className = {`${styles.centerEnd}`}>
                        <Card1 heading = 'R.O.' text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.' headingMarginBottom = '60px' textMarginBottom = '68px' />
                    </div>
                </PaddingLayout>

                <PaddingLayout>
                    <Image src = './bizz_back.png' layout = 'fill' />
                    <div data-aos-offset = {-scroll*900} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerStart}`}>
                        <Card1 heading = 'Bizz App' text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.' headingMarginBottom = '60px' textMarginBottom = '71px' />
                    </div>
                </PaddingLayout>


                <PaddingLayout>
                    <Image src = './port_back_6.png' layout = 'fill' />
                    <div data-aos-offset = {-scroll*1000} data-aos = 'fade-left' data-aos-duration = '1000' className = {`${styles.centerEnd}`}>
                        <Card1 heading = 'Sage Creek' text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.' headingMarginBottom = '60px' textMarginBottom = '68px' />
                    </div>
                </PaddingLayout>

                <PaddingLayout>
                    <Image src = './port_back_7.png' layout = 'fill' />
                    <div data-aos-offset = {-scroll*1500} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerStart}`}>
                        <Card1 alternate = {true} heading = 'Charzer' text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.' headingMarginBottom = '60px' textMarginBottom = '71px' />
                    </div>
                </PaddingLayout>

                <PaddingLayout>
                    <Image src = './port_back_8.png' layout = 'fill' />
                    <div data-aos-offset = {-scroll*1600} data-aos = 'fade-left' data-aos-duration = '1000' className = {`${styles.centerEnd}`}>
                        <Card1 heading = 'Online Edtech' text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.' headingMarginBottom = '60px' noIcon = {true} />
                    </div>
                </PaddingLayout>

                <PaddingLayout>
                    <Image src = './port_back_9.png' layout = 'fill' />
                    <div data-aos-offset = {-scroll*1700} data-aos = 'fade-right' data-aos-duration = '1000' className = {`${styles.centerStart}`}>
                        <Card1 heading = 'Kitchenware' text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.' headingMarginBottom = '60px' noIcon = {true} />
                    </div>
                </PaddingLayout>

            </div>
        </StandardLayout>
    )
}