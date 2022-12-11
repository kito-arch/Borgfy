
import styles from './caseStudyPage.module.css'
import PaddingLayout from '../../layouts/paddingLayout/paddingLayout'
import StandardLayout from '../../layouts/standardLayout/standardLayout'
import Section1 from './section1/section1'
import Section2 from './section2/section2'
import Section3 from './section3/section3'
import Image from 'next/image'
import Section4 from './section4/section4'
import Section5 from './section5/section5'
import Section6 from './section6/section6'
import Section7 from './section7/section7'
import Section8 from './section8/section8'
import Section9 from './section9/section9'
import Section10 from './section10/section10'
import Section11 from './section11/section11'
import Section12 from './section12/section12'
import Section13 from './section13/section13'
import Section14 from './section14/section14'
import Section15 from './section15/section15'
import Section16 from './section16/section16'

export default function CaseStudyPage(props){
    return(

        <StandardLayout>
            <div className = {`${styles.container}`}>
                <PaddingLayout backgroundColor = 'white'>
                    <Section1/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'black'>
                    <Section2/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Image priority  src = '/../public/case_sec3_back.png' layout = 'fill' />
                    <Section3/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section4/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section5/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section6/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section7/>
                </PaddingLayout>


                <PaddingLayout backgroundColor = 'white'>
                    <Section8/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section9/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section10/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section11/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section12/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section13/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section14/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'black'>
                    <Image priority  src = '/../public/case_sec15_back.png' layout = 'fill'/>
                    <Section15/>
                </PaddingLayout>

                <PaddingLayout zIndex = '15' backgroundColor = 'white'>
                    <Image priority  src = '/../public/case_sec16_back.png' layout = 'fill'/>
                    <Section16/>
                </PaddingLayout>

            </div>
        </StandardLayout>
    )
}