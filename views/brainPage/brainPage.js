
import styles from './brainPage.module.css'
import PaddingLayout from '../../layouts/paddingLayout/paddingLayout'
import StandardLayout from '../../layouts/standardLayout/standardLayout'
import Section1 from './section1/section1'
import Section2 from './section2/section2'
import Section3 from './section3/section3'
import Section4 from './section4/section4'
import Section5 from './section5/section5'
import Section6 from './section6/section6'
import Section7 from './section7/section7'
import Section8 from './section8/section8'
import Image from 'next/image'

export default function BrainPage(props){
    return(

        <StandardLayout>
            <div className = {`${styles.container}`}>

                <PaddingLayout backgroundColor = '#0B0000'>
                    <Section1/>
                </PaddingLayout>

                <Section2/>

                <PaddingLayout backgroundColor = '#000103'>
                    <Section3/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section4/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = '#1e59d8'>
                    <Section5/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section6/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section7/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Image priority  src = '/../public/brain_sec8_back.png' layout = 'fill'/>
                    <Section8/>
                </PaddingLayout>

            </div>
        </StandardLayout>
    )
}