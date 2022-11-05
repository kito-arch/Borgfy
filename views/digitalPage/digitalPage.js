
import PaddingLayout from '../../layouts/paddingLayout/paddingLayout'
import StandardLayout from '../../layouts/standardLayout/standardLayout'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
import Section3 from './components/section3/section3'
import Section4 from './components/section4/section4'
import styles from './digitalPage.module.css'
import Section5 from './components/section5/section5'
import Section6 from './components/section6/section6'
import Image from 'next/image'
import Section7 from './components/section7/section7'

export default function DigitalPage(props){
    return(
        <StandardLayout>

            <div className = {`${styles.container}`}>

                <PaddingLayout>
                    <Section1/>
                </PaddingLayout>

                <PaddingLayout>
                    <Section2/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section3/>
                </PaddingLayout>

                <PaddingLayout>
                    <Section4/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section5/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Image src = '/../public/venture_business_back.png' layout = 'fill'/>
                    <Section6/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section7/>
                </PaddingLayout>

            </div>

        </StandardLayout>
    )
}