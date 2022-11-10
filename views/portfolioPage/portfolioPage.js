
import Image from 'next/image'
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
                    <Image src = '/../public/port_back_1.png' layout = 'fill' />
                    <div className = {`${styles.centerStart}`}>
                        <Card1 heading = 'Atomic' subheading = 'Design   |   Development' text = 'Skrolled is an Influencer marketing and campaign management app that helps in running influencer campaigns, onboarding influencers, creating campaigns,' headingMarginBottom = '14px' textMarginBottom = '43px' />
                    </div>
                </PaddingLayout>

                <PaddingLayout>
                    <Image src = '/../public/port_back_2.png' layout = 'fill' />
                    <div className = {`${styles.centerEnd}`}>
                        <Card1 heading = 'Atomic' subheading = 'Design   |   Development' text = 'Skrolled is an Influencer marketing and campaign management app that helps in running influencer campaigns, onboarding influencers, creating campaigns,' headingMarginBottom = '14px' textMarginBottom = '43px' />
                    </div>
                </PaddingLayout>

                <PaddingLayout>
                    <Image src = '/../public/port_back_3.png' layout = 'fill' />
                    <div className = {`${styles.centerStart}`}>
                        <Card1 heading = 'Skrolled' subheading = 'Design   |   Development' text = 'Skrolled is an Influencer marketing and campaign management app that helps in running influencer campaigns, onboarding influencers, creating campaigns, auto payments the best place for the freelance marketplace for influencers to make some cash.' headingMarginBottom = '14px' textMarginBottom = '25px' />
                    </div>
                </PaddingLayout>

                <PaddingLayout>
                    <Image src = '/../public/port_back_4.png' layout = 'fill' />
                    <div className = {`${styles.centerEnd}`}>
                        <Card1 heading = 'R.O.' text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.' headingMarginBottom = '60px' textMarginBottom = '68px' />
                    </div>
                </PaddingLayout>

                <PaddingLayout>
                    <Image src = '/../public/port_back_5.png' layout = 'fill' />
                    <div className = {`${styles.centerStart}`}>
                        <Card1 heading = 'Bizz App' text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.' headingMarginBottom = '60px' textMarginBottom = '71px' />
                    </div>
                </PaddingLayout>


                <PaddingLayout>
                    <Image src = '/../public/port_back_6.png' layout = 'fill' />
                    <div className = {`${styles.centerEnd}`}>
                        <Card1 heading = 'Sage Creek' text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.' headingMarginBottom = '60px' textMarginBottom = '68px' />
                    </div>
                </PaddingLayout>

                <PaddingLayout>
                    <Image src = '/../public/port_back_7.png' layout = 'fill' />
                    <div className = {`${styles.centerStart}`}>
                        <Card1 alternate = {true} heading = 'Charzer' text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.' headingMarginBottom = '60px' textMarginBottom = '71px' />
                    </div>
                </PaddingLayout>

                <PaddingLayout>
                    <Image src = '/../public/port_back_8.png' layout = 'fill' />
                    <div className = {`${styles.centerEnd}`}>
                        <Card1 heading = 'Online Edtech' text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.' headingMarginBottom = '60px' noIcon = {true} />
                    </div>
                </PaddingLayout>

                <PaddingLayout>
                    <Image src = '/../public/port_back_9.png' layout = 'fill' />
                    <div className = {`${styles.centerStart}`}>
                        <Card1 heading = 'Kitchenware' text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.' headingMarginBottom = '60px' noIcon = {true} />
                    </div>
                </PaddingLayout>

            </div>
        </StandardLayout>
    )
}